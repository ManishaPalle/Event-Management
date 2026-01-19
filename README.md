🎉 Event Management System
A web-based Event Management System that allows users to discover events, create events, and manage ticket bookings with secure authentication and smooth navigation.

📌 Project Overview
The Event Management System is designed to provide a simple and user-friendly platform for both event organizers and participants. Users can browse events, create their own events, and book tickets with dynamic seat and price selection. The system ensures proper authentication and redirects users to the correct pages based on their actions.

✨ Features
Authentication
User Signup and Login using LocalStorage
Auto-login after successful signup
Session handling using isLoggedIn
Smart redirection to the intended page after login

📅 Create Event
Only logged-in users can access the Create Event page
Non-logged users are redirected to login page
Users can add event details such as name, date, location, seat types, and prices

🎫 Ticket Booking
Users can select seat type and quantity
Ticket price updates dynamically
Ticket page displays event details and QR code

🔎 Find My Ticket
Users can find their ticket using email
If not logged in, user is redirected to login
After login, user is returned back to ticket page

🎨 User Interface
Modern card-based event layout
Filter tabs like Trending, Music, Sports
Responsive design
Clean alignment and styling

🛠 Tech Stack
HTML
CSS
JavaScript
LocalStorage
QR Code Generator API
Font Awesome Icons

📁 Folder Structure
/event-management-system
│
├── index.html        # Home Page
├── login.html        # Login Page
├── signup.html       # Signup Page
├── create.html       # Create Event Page
├── findticket.html   # Find Ticket Input Page
├── ticket.html       # Ticket Display Page
│
├── style.css         # Main Styles
├── app.js            # Main JavaScript Logic
└── create.js         # Create events Logic
