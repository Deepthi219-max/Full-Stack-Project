document.addEventListener('DOMContentLoaded', () => {
  // Load Header and Footer if placeholders exist
  const headerPlaceholder = document.getElementById('header-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');

  if (headerPlaceholder) {
    fetch('../components/header.html')
      .then(response => response.text())
      .then(data => {
        headerPlaceholder.innerHTML = data;
        initMobileMenu();
      });
  }

  if (footerPlaceholder) {
    fetch('../components/footer.html')
      .then(response => response.text())
      .then(data => {
        footerPlaceholder.innerHTML = data;
      });
  }

  function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');
    if (mobileMenuBtn && mainNav) {
      mobileMenuBtn.addEventListener('click', () => {
        mainNav.classList.toggle('active');
      });
    }
  }

  // Common Form Validations
  function showError(input, message) {
    let errorElement = input.nextElementSibling;
    if (!errorElement || !errorElement.classList.contains('error-message')) {
      errorElement = document.createElement('div');
      errorElement.className = 'error-message';
      errorElement.style.color = '#ef4444';
      errorElement.style.fontSize = '0.875rem';
      errorElement.style.marginTop = '0.25rem';
      input.parentNode.insertBefore(errorElement, input.nextSibling);
    }
    errorElement.textContent = message;
    input.style.borderColor = '#ef4444';
  }

  function clearError(input) {
    const errorElement = input.nextElementSibling;
    if (errorElement && errorElement.classList.contains('error-message')) {
      errorElement.remove();
    }
    input.style.borderColor = '#cbd5e1';
  }

  // Login Form Logic
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email');
      const password = document.getElementById('password');
      let isValid = true;

      if (!email.value.trim()) {
        showError(email, 'Email is required');
        isValid = false;
      } else {
        clearError(email);
      }

      if (!password.value.trim()) {
        showError(password, 'Password is required');
        isValid = false;
      } else {
        clearError(password);
      }

      if (isValid) {
        window.location.href = 'dashboard.html';
      }
    });

    const forgotPasswordLink = document.getElementById('forgotPasswordLink');
    const resetPasswordSection = document.getElementById('resetPasswordSection');
    const resetPasswordBtn = document.getElementById('resetPasswordBtn');
    
    if (forgotPasswordLink && resetPasswordSection) {
      forgotPasswordLink.addEventListener('click', (e) => {
        e.preventDefault();
        resetPasswordSection.style.display = 'block';
      });
    }

    if (resetPasswordBtn) {
      resetPasswordBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const resetEmail = document.getElementById('resetEmail');
        if (!resetEmail.value.trim()) {
          showError(resetEmail, 'Please enter your email to reset password');
        } else {
          clearError(resetEmail);
          alert('Reset link sent to your email');
          resetPasswordSection.style.display = 'none';
          resetEmail.value = '';
        }
      });
    }
  }

  // Signup Form Logic
  const signupForm = document.getElementById('signupForm');
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const password = document.getElementById('password');
      const confirmPassword = document.getElementById('confirmPassword');
      let isValid = true;

      if (!name.value.trim()) { showError(name, 'Name is required'); isValid = false; } else { clearError(name); }
      if (!email.value.trim()) { showError(email, 'Email is required'); isValid = false; } else { clearError(email); }
      if (!password.value.trim()) { showError(password, 'Password is required'); isValid = false; } else { clearError(password); }
      
      if (!confirmPassword.value.trim()) { 
        showError(confirmPassword, 'Please confirm your password'); 
        isValid = false; 
      } else if (password.value !== confirmPassword.value) {
        showError(confirmPassword, 'Passwords do not match');
        isValid = false;
      } else {
        clearError(confirmPassword);
      }

      if (isValid) {
        alert('Signup successful! Please login.');
        window.location.href = 'login.html';
      }
    });
  }

  // Search Box Logic (Home)
  const homeSearchBtn = document.getElementById('homeSearchBtn');
  if (homeSearchBtn) {
    homeSearchBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const from = document.getElementById('searchFrom').value;
      const to = document.getElementById('searchTo').value;
      const date = document.getElementById('searchDate').value;
      
      if(from && to && date) {
        window.location.href = 'dashboard.html';
      } else {
        alert('Please fill all search fields');
      }
    });
  }

  // Dashboard Booking Logic
  const bookBtns = document.querySelectorAll('.book-now-btn');
  if (bookBtns) {
    bookBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        alert('Ticket Booked Successfully');
      });
    });
  }
});
