# FreshBite – Food Ordering Website 🥙

A modern, responsive, and interactive food ordering platform built with React.js, Tailwind CSS, and DaisyUI. FreshBite provides users with an intuitive interface to browse, search, filter, and order their favorite meals with ease and style.

**Live Link:** https://freshbite---food-delivery.web.app

---

## 📋 Project Overview

FreshBite is a comprehensive food ordering platform designed to deliver a seamless user experience from browsing to checkout. The application features a vibrant interface with smooth animations, interactive components, and playful error handling. Whether you're looking for your favorite dish or exploring new menu items, FreshBite makes food ordering fun and effortless. The platform includes a responsive design optimized for both desktop and mobile devices with persistent cart functionality.

---

## ✨ Key Features

- **🏠 Home Page** - Vibrant hero banner with call-to-action and smooth animations
- **🍽️ Menu Browsing** - Responsive grid layout showcasing all available dishes with beautiful visuals
- **🔍 Search & Filter** - Dynamic search functionality and advanced filtering to find dishes instantly
- **📄 Item Details** - Comprehensive item pages with images, descriptions, prices, and ratings
- **🛒 Shopping Cart** - Add to cart functionality with persistent storage and item management
- **✨ Smooth Animations** - Engaging animations and transitions using Framer Motion and AOS
- **🎯 Order Management** - Easy order placement with confirmation notifications
- **📱 Responsive Design** - Mobile-first design that works seamlessly on all devices
- **⚠️ Playful Error Pages** - Fun 404 and item not found pages with engaging content
- **💬 Notifications** - SweetAlert2 for elegant user notifications and confirmations
- **🍃 Loading States** - Smooth loader animations across all pages for better UX
- **📋 About Page** - Restaurant information and mission statement

---

## 🛠️ Technology Stack

| Technology                   | Purpose                                                   |
| ---------------------------- | --------------------------------------------------------- |
| **React 19.1.1**             | Frontend framework for building interactive UI components |
| **Vite**                     | Fast build tool and development server                    |
| **Tailwind CSS 4.1.14**      | Utility-first CSS framework for styling                   |
| **DaisyUI**                  | Tailwind CSS component library                            |
| **Firebase 12.4.0**          | Backend services (Authentication, Database, Hosting)      |
| **React Router 7.9.4**       | Client-side routing and navigation                        |
| **Axios 1.12.2**             | HTTP client for API requests                              |
| **Swiper 12.0.3**            | Touch slider and carousel component                       |
| **React Hot Toast 2.6.0**    | Toast notification system                                 |
| **SweetAlert2 11.26.1**      | Beautiful alert dialogs and notifications                 |
| **React Icons 5.5.0**        | Icon library                                              |
| **AOS 2.3.4**                | Scroll animation library                                  |
| **@tailwindcss/vite 4.1.14** | Tailwind CSS Vite plugin                                  |

---

## 📦 Dependencies

```json
{
  "@tailwindcss/vite": "^4.1.14",
  "aos": "^2.3.4",
  "axios": "^1.12.2",
  "firebase": "^12.4.0",
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "react-hot-toast": "^2.6.0",
  "react-icons": "^5.5.0",
  "react-router": "^7.9.4",
  "sweetalert2": "^11.26.1",
  "swiper": "^12.0.3",
  "tailwindcss": "^4.1.14"
}
```

---

## 🚀 Installation & Setup Guide

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/freshbite.git
cd freshbite
```

### Step 2: Install Dependencies

Using npm:

```bash
npm install
```


Complete install command with all dependencies:

```bash
npm install aos@^2.3.4 axios@^1.12.2 react-hot-toast@^2.6.0 react-icons@^5.5.0 react-router@^7.9.4 sweetalert2@^11.26.1 swiper@^12.0.3 firebase@^12.4.0 tailwindcss@^4.1.14 @tailwindcss/vite@^4.1.14
```


### Step 3: Run Development Server

```bash
npm run dev
```

The application will start at `http://localhost:5173` (or another available port)

### Step 4: Build for Production

```bash
npm run build
```

The optimized production build will be generated in the `dist` folder.

### Step 5: Preview Production Build

```bash
npm run preview
```

---

## 🔧 Available Scripts

In the project directory, you can run:

- `npm run dev` - Start the development server
- `npm run build` - Create an optimized production build
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run linting (if configured)

---

## 🎯 Features in Detail

### Home Page

The landing page features a vibrant hero banner with a call-to-action button, smooth scroll animations, and an introduction to FreshBite's mission. Users are immediately guided to explore the menu.

### Menu Page

Browse all available dishes in a responsive grid layout. The menu includes:
- Dynamic search functionality for quick item lookup
- Advanced filtering options
- Loading states for smooth content rendering
- Beautiful item cards with images and brief descriptions
- "Item Not Found" state with playful illustrations

### Item Details Page

Comprehensive product pages featuring:
- High-quality item images
- Detailed descriptions and ingredient information
- Customer ratings and reviews
- Price information
- Add to Cart and Order Now buttons
- Error handling for invalid item paths

### Shopping Cart

Complete cart management system with:
- View all added items with quantities and prices
- Remove items functionality
- Cart total calculation
- Persistent storage using localStorage
- Proceed to checkout option
- Empty cart state handling

### Order Page

Order placement interface with:
- Order summary and review
- Placeholder for payment integration
- Order confirmation notifications
- Future enhancements for real payment processing

### About Page

Restaurant information page including:
- Company mission and story
- Restaurant values and philosophy
- Engaging content with visual elements
- Team information (ready for expansion)

### Navigation & Layout

- **Responsive Navbar** - Mobile-friendly navigation with dropdown menu
- **Search Bar** - Quick search functionality across the menu
- **Cart Icon** - Live item count indicator
- **Footer** - Company info, quick links, and social media

### Error Handling

- **404 Not Found Page** - Playful design for invalid routes
- **Item Not Found Page** - Friendly message when item doesn't exist
- **Coming Soon Page** - Placeholder for future features

### User Experience Features

- **Smooth Animations** - AOS library for scroll animations and Framer Motion effects
- **Toast Notifications** - React Hot Toast for success/error messages
- **Alert Dialogs** - SweetAlert2 for confirmations and important notifications
- **Loading States** - Skeleton screens and loaders for better UX
- **Responsive Design** - Mobile-first approach with Tailwind CSS

---

## 🔗 Important Links & Resources

### Live Application

- **🌐 Live Website:** https://freshbite---food-delivery.web.app
- **📱 Mobile Responsive:** Works on all devices

### Repository

- **GitHub Repository:** https://github.com/maimuna03134/My-Fresh-bite.git


### Documentation

- **React Documentation:** https://react.dev
- **Firebase Docs:** https://firebase.google.com/docs
- **Tailwind CSS:** https://tailwindcss.com
- **Vite Guide:** https://vitejs.dev/guide/
- **React Router:** https://reactrouter.com
- **Axios Documentation:** https://axios-http.com/
- **SweetAlert2:** https://sweetalert2.github.io/
- **AOS Library:** https://michalsnik.github.io/aos/
- **Swiper JS:** https://swiperjs.com/
- **DaisyUI Components:** https://daisyui.com/
- **React Icons:** https://react-icons.github.io/react-icons/

---


## 🙏 Acknowledgments

- All contributors and supporters
- Firebase for hosting and backend services
- The React.js and open-source community
- Libraries and tools that made this project possible:
  - Tailwind CSS for elegant styling
  - DaisyUI for beautiful components
  - SweetAlert2 for user interactions
  - AOS for smooth animations
  - React Router for seamless navigation

---

## 🚀 Future Enhancements

- Full payment gateway integration (Stripe, PayPal)
- User authentication and personalized accounts
- Order history and tracking
- Wishlists and favorite items
- Customer reviews and ratings system
- Admin panel for menu management
- Email notifications for orders
- Loyalty rewards program
- Multi-language support
- Dark mode theme

---

## 📊 Performance

- Optimized bundle size with Vite
- Lazy loading for images and components
- Caching strategies for better performance
- Mobile-first responsive design
- SEO-friendly structure

---

**Enjoy delicious food ordering with FreshBite! 🥙✨**
