# BusGo - Bus Ticketing System Frontend

A fully functional, frontend-only Bus Ticketing System built with pure HTML, CSS, and JavaScript. No backend, database, or server-side code required!

## 🚀 Project Overview

BusGo is a modern, responsive bus ticket booking website with a complete user journey from authentication to ticket confirmation. All data is stored locally using browser localStorage.

## 📁 Project Structure

```
client/
├── styles/
│   ├── global.css              # Global styles, animations, components
│   ├── login.css               # Login page styles
│   ├── forgot-password.css     # Forgot password page styles
│   ├── otp.css                 # OTP verification page styles
│   ├── reset-password.css      # Reset password page styles
│   └── booking.css             # Booking page styles
├── scripts/
│   └── utilities.js            # Shared JavaScript utilities
├── login.html                  # Login/Authentication Page
├── forgot-password.html        # Forgot Password Page
├── otp.html                    # OTP Verification Page
├── reset-password.html         # Reset Password Page
├── booking.html                # Bus Booking Page
└── index.html                  # (Original React index - untouched)
```

## 🎯 Features

### 1. **Login Page** (`login.html`)
- Email/Mobile login form
- Password visibility toggle
- Remember me checkbox
- Social login simulation (Google, Facebook)
- Form validation with error messages
- Success popup with redirect

### 2. **Forgot Password Page** (`forgot-password.html`)
- Email/Mobile input with validation
- OTP sending simulation
- Smooth animations and gradients
- Back to login link
- Success message with redirect to OTP page

### 3. **OTP Verification Page** (`otp.html`)
- 6-digit OTP input with auto-advance
- Backspace support for easy editing
- 60-second countdown timer with warnings
- Resend OTP button (enables after timer)
- OTP validation logic
- Responsive mobile design

### 4. **Reset Password Page** (`reset-password.html`)
- Password strength checker (Weak/Medium/Strong)
- Visual strength indicators with color coding
- Real-time password requirements validation
  - Minimum 8 characters
  - Uppercase letters
  - Lowercase letters
  - Numbers
  - Special characters
- Show/Hide password toggle
- Confirm password matching validation
- Success popup with redirect to login

### 5. **Booking Page** (`booking.html`)
- **Navigation Bar**: Logo, Links, Logout button
- **Search Section**:
  - From/To city dropdowns (15 Indian cities)
  - Journey date picker (minimum today)
  - Passenger count selector (1-6)
  - Sort options (price, departure, duration)

- **Bus Results**:
  - Cards with bus name, type (AC/Non-AC), ratings
  - Departure/Arrival times with duration
  - Available seats count
  - Price per seat
  - Book Now button

- **Seat Selection Modal**:
  - Visual bus seat layout (40 seats)
  - Occupied seats disabled
  - Select/Deselect with click
  - Real-time seat count display
  - Dynamic fare calculation
  - Total price summary

- **Passenger Details**:
  - Form for each selected seat
  - Name, Age, Gender fields
  - Contact email and phone
  - Email/Mobile validation

- **Payment Section**:
  - 3 payment methods (UPI, Card, Net Banking)
  - Visual selection indicators
  - Fare breakdown (Base + Taxes)
  - Grand total calculation

- **Ticket Display**:
  - Ticket ID generation
  - Passenger details
  - Journey information
  - Route and seat numbers
  - Booking confirmation

## 🛠️ Technology Stack

- **HTML5** - Semantic structure
- **CSS3** - Animations, gradients, flexbox, grid
- **Vanilla JavaScript** - DOM manipulation, localStorage
- **No External Dependencies** - Pure frontend

## 🎨 Design Features

- **Modern UI**: Glassmorphism, gradient backgrounds
- **Responsive Design**: Mobile, tablet, desktop optimized
- **Smooth Animations**: Fade-in, slide-up, bounce effects
- **Interactive Elements**: Hover effects, transitions, modals
- **Premium Colors**: Purple, blue, green gradients
- **Clean Typography**: Professional fonts and hierarchy
- **Dark/Light Contrast**: High readability

## 💾 LocalStorage Management

The app stores data locally for:
- Login credentials and session
- OTP and reset data
- User email and password
- Booking history
- Ticket information

```javascript
// Example: Access stored data
const bookings = Storage.get('bookings');
const userEmail = Storage.get('userEmail');
Storage.set('key', value);
Storage.remove('key');
```

## 📋 How to Use

### Starting the Application

1. **Open Login Page**:
   ```
   Open login.html in any modern web browser
   ```

2. **Test Credentials** (any email/password works):
   - Email: `user@example.com`
   - Password: `password123`
   - Or use 10-digit mobile: `9876543210`

3. **Password Reset Flow**:
   - Go to "Forgot Password?"
   - Enter email/mobile
   - Verify OTP (any 6-digit code works for demo)
   - Set new password (min 8 chars with uppercase, lowercase, number, special char)

4. **Book a Bus**:
   - Select From/To cities
   - Choose journey date
   - Select passenger count
   - Click "Search Buses"
   - Choose a bus
   - Select seats
   - Fill passenger details
   - Choose payment method
   - Confirm booking

### File Navigation

```
login.html → forgot-password.html → otp.html → reset-password.html → login.html
        ↓
    booking.html (after login)
```

## 🔐 Security Notes (Frontend Only)

⚠️ **Important**: This is a frontend-only demonstration. For production:
- Use a backend server for sensitive operations
- Never store passwords in localStorage
- Implement real OTP service
- Use secure payment gateways
- Add HTTPS encryption
- Implement backend validation

## 📱 Browser Compatibility

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance Optimizations

- Minimal CSS (single file per page)
- No HTTP requests (no images, external fonts)
- LocalStorage for instant data access
- Smooth 60fps animations
- Mobile-first responsive design

## 🎓 Learning Points

This project demonstrates:
- HTML5 semantic structure
- Advanced CSS3 (Grid, Flexbox, Animations)
- Vanilla JavaScript (no framework)
- DOM manipulation and events
- Form validation and error handling
- LocalStorage API usage
- Responsive design patterns
- Modal and popup implementations
- Dynamic content rendering
- User experience best practices

## 🔧 Customization

### Change Theme Colors
Edit `:root` variables in `global.css`:
```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #1e40af;
  /* ... */
}
```

### Add More Cities
Update `FakeData.cities` in `utilities.js`:
```javascript
cities: [
  'Mumbai', 'Delhi', 'Bangalore',
  // Add more cities
]
```

### Modify Bus Data
Edit `FakeData.buses` in `utilities.js` with different routes, prices, and schedules.

## 📄 Files Reference

| File | Purpose |
|------|---------|
| `global.css` | Base styles, animations, components |
| `login.css` | Login page specific styles |
| `forgot-password.css` | Forgot password page styles |
| `otp.css` | OTP verification styles |
| `reset-password.css` | Password reset styles |
| `booking.css` | Booking page styles |
| `utilities.js` | Shared functions (Storage, Validation, UI, Format) |
| `login.html` | Login/Authentication |
| `forgot-password.html` | Password recovery start |
| `otp.html` | OTP verification |
| `reset-password.html` | Password reset |
| `booking.html` | Main booking system |

## 🚀 Next Steps for Production

1. Create a backend API (Node.js, Python, Java, etc.)
2. Set up a database (PostgreSQL, MongoDB, MySQL)
3. Implement real authentication (JWT, OAuth)
4. Integrate payment gateway (Stripe, Razorpay)
5. Set up email/SMS service
6. Add user profiles and booking history
7. Implement search filters and advanced features
8. Deploy to production server

## 📞 Support

For questions or improvements, review the code comments and utilities in `utilities.js`.

---

**Created**: April 2026
**License**: MIT (Open Source)
**Version**: 1.0.0

Enjoy! 🎉
