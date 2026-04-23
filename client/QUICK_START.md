# 🚌 BusGo - Quick Start Guide

## 📖 How to Access the Website

### 1. **Login Page** (Start Here!)
- File: `login.html`
- Path: `c:\Users\Admin\Desktop\Training\Full-Stack-Project\client\login.html`
- Features:
  - Email or 10-digit mobile login
  - "Forgot Password?" link for password recovery
  - Social login simulation
  - Remember me checkbox

**Test Credentials:**
- Email: `user@example.com`
- Password: `password123` (or any password)
- Mobile: `9876543210` (10 digits)

---

### 2. **Forgot Password Page**
- File: `forgot-password.html`
- Accessed from: Login page → Click "Forgot Password?"
- Features:
  - Email/Mobile input
  - OTP sending simulation
  - Success popup with automatic redirect

---

### 3. **OTP Verification Page**
- File: `otp.html`
- Accessed from: Forgot Password → After sending OTP
- Features:
  - 6-digit OTP input fields (auto-advance)
  - 60-second countdown timer
  - Resend OTP button (enabled after timer expires)
  - Validation and error handling

**Test OTP:** Any 6-digit number (e.g., `123456`)

---

### 4. **Reset Password Page**
- File: `reset-password.html`
- Accessed from: OTP → After verifying OTP
- Features:
  - Password strength checker
  - Real-time requirement validation:
    - ✓ At least 8 characters
    - ✓ Uppercase letters (A-Z)
    - ✓ Lowercase letters (a-z)
    - ✓ Numbers (0-9)
    - ✓ Special characters (!@#$%^&*)
  - Confirm password matching
  - Show/Hide password toggle

**Example Strong Password:** `MyBusGo@2026`

---

### 5. **Bus Booking Page** 🎫
- File: `booking.html`
- Accessed from: Login → Click "Continue"
- Features:

#### **Navigation Bar**
- BusGo Logo (clickable)
- Home, Routes, My Tickets, Contact links
- Logout button

#### **Search Section**
- From City dropdown (15 Indian cities)
- To City dropdown
- Journey Date picker (minimum today)
- Passenger count (1-6 passengers)
- Search & Reset buttons

#### **Bus Results**
- Bus name, type (AC/Non-AC), rating
- Departure & arrival times with duration
- Route information
- Available seats
- Price per seat
- Book Now button

#### **Seat Selection**
- Visual bus layout (40 seats)
- Click to select/deselect seats
- Shows occupied seats (disabled)
- Displays selected seats & total fare
- Continue button to passenger form

#### **Passenger Details**
- Name, Age, Gender for each seat
- Email and phone validation
- Contact information section

#### **Payment Section**
- 3 payment methods: UPI, Card, Net Banking
- Fare breakdown with taxes
- Grand total calculation
- Pay Now button

#### **Ticket Confirmation**
- Ticket ID generation
- Passenger details
- Route and seat information
- Booking confirmation
- Download ticket simulation

---

## 🔄 Complete User Journey

```
1. Open login.html
   ↓
2. Login with credentials
   ↓
3. Redirected to booking.html
   ↓
4. Search for buses:
   - Select From/To cities
   - Choose date & passengers
   - Click Search
   ↓
5. Select a bus
   ↓
6. Choose seats (click on available seats)
   ↓
7. Continue to passenger form
   ↓
8. Fill passenger details:
   - Name, Age, Gender for each
   - Email & Phone
   ↓
9. Select payment method
   ↓
10. Click "Pay Now"
   ↓
11. View & Download ticket
   ↓
12. Click "Back to Search" to book again
```

---

## 🔐 Password Recovery Journey

```
login.html
   ↓
Click "Forgot Password?"
   ↓
forgot-password.html
   ↓
Enter email/mobile & click "Send OTP"
   ↓
otp.html
   ↓
Enter 6-digit OTP & click "Verify OTP"
   ↓
reset-password.html
   ↓
Enter new password meeting all criteria
   ↓
Click "Reset Password"
   ↓
Success popup → Redirect to login.html
```

---

## 🎨 Features by Page

### Login Page
✅ Email/Mobile validation
✅ Password show/hide toggle
✅ Remember me checkbox
✅ Social login simulation
✅ Form validation with error messages
✅ Success popup

### Forgot Password Page
✅ Email/Mobile input validation
✅ OTP sending simulation
✅ Background animations
✅ Back to login link
✅ Success notification

### OTP Page
✅ 6-digit input boxes with auto-advance
✅ Backspace support
✅ 60-second countdown timer
✅ Resend OTP button
✅ Expired state handling
✅ Mobile-friendly input

### Reset Password Page
✅ Real-time password strength indicator
✅ Visual requirement checklist
✅ 3-level strength rating (Weak/Medium/Strong)
✅ Password matching validation
✅ Show/Hide toggle
✅ Requirements: 8 chars, uppercase, lowercase, number, special char

### Booking Page
✅ Responsive navbar
✅ City dropdowns (15 cities)
✅ Date picker with validation
✅ Passenger count selector
✅ Search & sort functionality
✅ 6 different bus options
✅ Bus cards with all details
✅ Visual seat selection (40 seats)
✅ Occupied seats indication
✅ Real-time fare calculation
✅ Passenger form for each seat
✅ Contact validation
✅ 3 payment methods
✅ Ticket generation
✅ LocalStorage booking history

---

## 💾 Data Storage

All data is stored in **browser localStorage**:
- Login credentials
- OTP and reset data
- Booking information
- Ticket details
- User preferences

**Access localStorage** (in browser console):
```javascript
// View all bookings
JSON.parse(localStorage.getItem('bookings'))

// View user email
localStorage.getItem('userEmail')

// Clear all data
localStorage.clear()
```

---

## 🎯 Test Scenarios

### Scenario 1: Complete Booking Flow
1. Login with email
2. Search buses from Mumbai to Delhi
3. Select a bus
4. Choose 2 seats
5. Fill passenger details
6. Select payment method
7. Complete booking
8. View ticket

### Scenario 2: Password Recovery
1. Click "Forgot Password?"
2. Enter email
3. Verify OTP
4. Reset password with strong password
5. Login with new password

### Scenario 3: Multiple Bookings
1. Complete first booking
2. Return to search
3. Book another route
4. View all bookings in localStorage

---

## 🚀 Browser Compatibility

✅ Chrome/Edge (Latest)
✅ Firefox (Latest)
✅ Safari (Latest)
✅ Mobile Chrome & Safari
✅ Responsive design tested on:
   - Desktop (1920px+)
   - Tablet (768px-1024px)
   - Mobile (320px-480px)

---

## 📝 File Structure

```
client/
├── styles/
│   ├── global.css (Common styles, animations)
│   ├── login.css
│   ├── forgot-password.css
│   ├── otp.css
│   ├── reset-password.css
│   └── booking.css
├── scripts/
│   └── utilities.js (Shared functions)
├── login.html
├── forgot-password.html
├── otp.html
├── reset-password.html
├── booking.html
└── BUS_TICKETING_README.md
```

---

## 🔧 Customization Tips

### Change Color Scheme
Edit `global.css`:
```css
:root {
  --primary-color: #2563eb; /* Change blue */
  --secondary-color: #1e40af;
  --success-color: #10b981;
}
```

### Add More Cities
Edit `utilities.js`:
```javascript
cities: [
  'Mumbai', 'Delhi', 'Bangalore',
  'Your City Here'
]
```

### Modify Bus Data
Edit `utilities.js`:
```javascript
buses: [
  {
    id: 1,
    name: 'Your Bus Name',
    type: 'AC', // or 'Non-AC'
    departure: '06:00',
    arrival: '12:30',
    seats: 45,
    price: 750,
    rating: 4.5
  }
]
```

---

## ⚠️ Important Notes

1. **Frontend Only**: This is a complete frontend application with no backend
2. **LocalStorage**: Data is stored locally in browser (cleared when cache is deleted)
3. **Demo Purposes**: All OTPs, payments, and bookings are simulated
4. **Test Mode**: All email/password combinations work for testing
5. **No Real Payments**: Payment processing is simulated
6. **No Email Sent**: OTP is not sent to real email (simulated)

---

## 🎓 What You'll Learn

- HTML5 semantic structure
- CSS3 (Grid, Flexbox, Animations)
- Vanilla JavaScript (DOM manipulation)
- Form validation patterns
- LocalStorage API
- Responsive design
- Modal & popup implementations
- User experience best practices
- Dynamic content rendering

---

## 📞 Quick Links

- **Start**: Open `login.html` in browser
- **Documentation**: Read `BUS_TICKETING_README.md`
- **Code**: Check inline comments in each file
- **Styling**: `global.css` for shared styles

---

**Enjoy your Bus Ticketing System! 🎉**

Made with ❤️ using pure HTML, CSS & JavaScript
