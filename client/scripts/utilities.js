// Shared Utilities for Bus Ticketing System

// LocalStorage Management
const Storage = {
  set: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  get: (key) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  },
  remove: (key) => {
    localStorage.removeItem(key);
  },
  clear: () => {
    localStorage.clear();
  }
};

// Validation Functions
const Validation = {
  isEmail: (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },
  
  isMobile: (mobile) => {
    const mobileRegex = /^[0-9]{10}$/;
    return mobileRegex.test(mobile.replace(/[^\d]/g, ''));
  },
  
  isEmailOrMobile: (value) => {
    return Validation.isEmail(value) || Validation.isMobile(value);
  },
  
  isPasswordStrong: (password) => {
    if (password.length < 8) return 'weak';
    if (password.match(/^[a-zA-Z0-9]+$/) || password.match(/^[a-z]+$/) || password.match(/^[A-Z]+$/)) {
      return 'medium';
    }
    return 'strong';
  },
  
  isEmpty: (value) => {
    return !value || value.trim() === '';
  }
};

// UI Functions
const UI = {
  showModal: (modalId) => {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('show');
      modal.style.display = 'flex';
    }
  },
  
  closeModal: (modalId) => {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
    }
  },
  
  showError: (elementId, message) => {
    const errorElement = document.getElementById(elementId) || document.querySelector(`[data-error="${elementId}"]`);
    if (errorElement) {
      errorElement.textContent = message;
      errorElement.classList.add('show');
    }
  },
  
  clearError: (elementId) => {
    const errorElement = document.getElementById(elementId) || document.querySelector(`[data-error="${elementId}"]`);
    if (errorElement) {
      errorElement.textContent = '';
      errorElement.classList.remove('show');
    }
  },
  
  showAlert: (message, type = 'success', containerId = 'alertContainer') => {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.innerHTML = `
      <span>${type === 'success' ? '✓' : type === 'error' ? '✕' : '⚠'}</span>
      <span>${message}</span>
    `;
    
    container.appendChild(alert);
    
    setTimeout(() => {
      alert.remove();
    }, 5000);
  },
  
  showSuccessPopup: (title, message, callback = null) => {
    UI.showModal('successModal');
    const modal = document.getElementById('successModal');
    if (modal) {
      const content = modal.querySelector('.modal-content');
      content.innerHTML = `
        <div class="checkmark">✓</div>
        <h2>${title}</h2>
        <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">${message}</p>
        <button class="btn btn-primary btn-block" onclick="closeSuccessModal()">OK</button>
      `;
    }
    
    if (callback) {
      window.successCallback = callback;
    }
  },
  
  disableButton: (buttonId) => {
    const button = document.getElementById(buttonId);
    if (button) {
      button.disabled = true;
      button.style.opacity = '0.6';
      button.style.cursor = 'not-allowed';
    }
  },
  
  enableButton: (buttonId) => {
    const button = document.getElementById(buttonId);
    if (button) {
      button.disabled = false;
      button.style.opacity = '1';
      button.style.cursor = 'pointer';
    }
  }
};

// Format Functions
const Format = {
  formatCurrency: (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(amount);
  },
  
  formatDate: (date) => {
    return new Date(date).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  },
  
  formatTime: (time) => {
    return new Date(`2000-01-01 ${time}`).toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  },
  
  calculateDuration: (startTime, endTime) => {
    const start = new Date(`2000-01-01 ${startTime}`);
    const end = new Date(`2000-01-01 ${endTime}`);
    const diff = (end - start) / (1000 * 60);
    const hours = Math.floor(diff / 60);
    const minutes = diff % 60;
    return `${hours}h ${minutes}m`;
  }
};

// Generate Fake Data
const FakeData = {
  generateTicketId: () => {
    return 'TKT' + Math.random().toString(36).substr(2, 9).toUpperCase();
  },
  
  generateOTP: () => {
    return Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
  },
  
  buses: [
    {
      id: 1,
      name: 'Express Travels',
      type: 'AC',
      departure: '06:00',
      arrival: '12:30',
      seats: 32,
      price: 650,
      rating: 4.5
    },
    {
      id: 2,
      name: 'Comfort Journey',
      type: 'Non-AC',
      departure: '08:00',
      arrival: '14:15',
      seats: 28,
      price: 450,
      rating: 4.2
    },
    {
      id: 3,
      name: 'Premium Rides',
      type: 'AC',
      departure: '10:00',
      arrival: '16:45',
      seats: 40,
      price: 850,
      rating: 4.8
    },
    {
      id: 4,
      name: 'Budget Buses',
      type: 'Non-AC',
      departure: '12:00',
      arrival: '18:30',
      seats: 45,
      price: 350,
      rating: 3.9
    },
    {
      id: 5,
      name: 'Luxury Travels',
      type: 'AC',
      departure: '14:00',
      arrival: '20:15',
      seats: 24,
      price: 950,
      rating: 4.9
    },
    {
      id: 6,
      name: 'City Express',
      type: 'AC',
      departure: '16:00',
      arrival: '22:30',
      seats: 35,
      price: 750,
      rating: 4.6
    }
  ],
  
  cities: [
    'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai',
    'Kolkata', 'Pune', 'Jaipur', 'Lucknow', 'Chandigarh',
    'Ahmedabad', 'Surat', 'Vadodara', 'Indore', 'Bhopal'
  ]
};

// Timer Utility
const Timer = {
  startCountdown: (seconds, updateCallback, completeCallback) => {
    let remaining = seconds;
    const interval = setInterval(() => {
      remaining--;
      if (updateCallback) {
        updateCallback(remaining);
      }
      if (remaining <= 0) {
        clearInterval(interval);
        if (completeCallback) {
          completeCallback();
        }
      }
    }, 1000);
    return interval;
  }
};

// Form Reset
function resetForm(formId) {
  const form = document.getElementById(formId);
  if (form) {
    form.reset();
    const errors = form.querySelectorAll('.form-error');
    errors.forEach(error => error.classList.remove('show'));
  }
}

// Close Success Modal (Global)
function closeSuccessModal() {
  const callback = window.successCallback;
  UI.closeModal('successModal');
  if (callback && typeof callback === 'function') {
    callback();
  }
}

// Auto Move to Next Input (for OTP)
function setupAutoMove(className = 'otp-input') {
  const inputs = document.querySelectorAll(`.${className}`);
  inputs.forEach((input, index) => {
    input.addEventListener('input', function() {
      if (this.value.length === 1 && index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    });
    
    input.addEventListener('keydown', function(e) {
      if (e.key === 'Backspace' && this.value.length === 0 && index > 0) {
        inputs[index - 1].focus();
      }
    });
  });
}

// Get All OTP Values
function getOTPValue(className = 'otp-input') {
  const inputs = document.querySelectorAll(`.${className}`);
  let otp = '';
  inputs.forEach(input => {
    otp += input.value;
  });
  return otp;
}

// Set OTP Values
function setOTPValues(values, className = 'otp-input') {
  const inputs = document.querySelectorAll(`.${className}`);
  values.split('').forEach((val, index) => {
    if (inputs[index]) {
      inputs[index].value = val;
    }
  });
}
