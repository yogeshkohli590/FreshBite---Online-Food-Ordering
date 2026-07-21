[README.md](https://github.com/user-attachments/files/30219325/README.md)
# 🍕 FreshBite - Online Food Ordering Website

> **Free Web Development Internship Online Task | Data Alcott Systems**  
> Task ID: WD-EC-001 | Domain: E-Commerce Food & Restaurant

---

## 📌 Project Overview

FreshBite is a fully functional online food ordering platform where users can browse restaurants, explore menus, add items to cart, and place orders for delivery. Built as part of the **Free Web Development Internship Online** program by **Data Alcott Systems**.

---

## 🌐 Live Demo

🔗 [View Live Website](https://yogeshkohli590.github.io/FreshBite---Online-Food-Ordering/)  
📽️ [Watch Demo Video](https://youtu.be/sM7458Qu4tM?si=N8SFQ1jaCC9O3Gue)

---

## 📸 Screenshots

| Page | Desktop | Mobile |
|------|---------|--------|
| Home | ![Home Desktop](screenshots/home-desktop.png) | ![Home Mobile](screenshots/home-mobile.png) |
| Menu | ![Menu](screenshots/menu.png) | - |
| Cart | ![Cart](screenshots/cart.png) | - |
| Checkout | ![Checkout](screenshots/checkout.png) | - |

---

## ✨ Features

### Core Features
- ✅ Restaurant Categories (Pizza, Burgers, Pasta, Sushi, Desserts, Drinks)
- ✅ Food Menu Display with images and descriptions
- ✅ Add to Cart with quantity adjustment
- ✅ Price calculation with tax and delivery fee
- ✅ Coupon codes system
- ✅ Checkout Process with form validation
- ✅ User Login/Register (Simulated)
- ✅ 10 Pages: Home, Restaurants, Menu, Cart, Checkout, Account, About, Contact

### Bonus Features
- ✅ Dietary Filters (Veg, Non-Veg, Vegan, Gluten-Free)
- ✅ Delivery Time Selection
- ✅ Order Tracking (Simulated with animation)
- ✅ Wishlist
- ✅ Special Offers & Coupon Codes
- ✅ Payment Gateway Simulation
- ✅ Product Detail Modal with nutritional info
- ✅ Search functionality
- ✅ Toast Notifications
- ✅ LocalStorage persistence
- ✅ Responsive Design (Mobile + Desktop)
- ✅ Hamburger menu for mobile
- ✅ Scroll-to-top button
- ✅ Newsletter subscription

---

## 🛠️ Technologies Used

| Technology | Usage |
|------------|-------|
| HTML5 | Structure and semantic markup |
| CSS3 | Styling, animations, responsive design |
| JavaScript (ES6+) | Interactivity, cart logic, DOM manipulation |
| Font Awesome 6 | Icons |
| Google Fonts | Typography |
| localStorage | Data persistence (no database needed) |

---

## 🎨 Design Guidelines

| Criteria | Value |
|----------|-------|
| Primary Color | #FF6B35 (Warm Orange) |
| Background Color | #FFF8F0 (Cream) |
| Dark Color | #2D1B12 (Dark Brown) |
| Font Style | Segoe UI (Playful, Warm) |
| Layout | Clean, modern, food-focused |
| Responsive | Works on all screen sizes |

---

## 📁 Project Structure

```
freshbite/
├── index.html        # Main HTML file (all pages/sections)
├── style.css         # Complete CSS styling
├── script.js         # JavaScript functionality
└── README.md         # Project documentation
```

---

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/freshbite.git
   ```

2. **Navigate to the project folder**
   ```bash
   cd freshbite
   ```

3. **Open in browser**
   - Simply open `index.html` in any modern web browser
   - Or use Live Server in VS Code

---

## 💡 Coupon Codes to Test

| Code | Discount | Min Order |
|------|----------|-----------|
| `PIZZA50` | 50% off | $20 |
| `BOGO` | 50% off | $15 |
| `SWEET30` | 30% off | $10 |
| `FIRST10` | $10 off | No minimum |

---

## 📊 Data Storage Approach

No database required! All data is managed with JavaScript:

```javascript
// Food Items stored in JavaScript array
const foodItems = [
    { id: 1, name: "Margherita Pizza", price: 12.99, ... }
];

// Cart stored in JavaScript array
let cart = [];

// localStorage used for persistence
localStorage.setItem('freshbite_cart', JSON.stringify(cart));
```

---

## 📱 Pages Included

1. **Home Page** - Hero banner, categories, special offers, search
2. **Restaurant Listing** - Grid view with filters
3. **Menu Page** - Food items with dietary filters
4. **Product Detail** - Modal with nutritional info
5. **Shopping Cart** - Items, quantity control, coupons
6. **Checkout** - Address, payment, order summary
7. **User Account** - Login, register, profile, order history, wishlist
8. **About Us** - Story, features, awards
9. **Contact Us** - Contact form, location map

---

## 🧪 Testing Checklist

- [x] All navigation links work
- [x] Add to cart functionality
- [x] Quantity +/- buttons
- [x] Remove from cart
- [x] Coupon code application
- [x] Checkout form validation
- [x] Order placement and tracking simulation
- [x] Login / Register flow
- [x] Wishlist add/remove
- [x] Search functionality
- [x] Dietary filters
- [x] Restaurant filters
- [x] Responsive mobile layout
- [x] Hamburger menu on mobile
- [x] Newsletter subscription
- [x] Contact form

---

## 📚 Learning Outcomes

- HTML5 semantic structure and accessibility
- CSS3 Flexbox and Grid layouts
- CSS animations and transitions
- JavaScript DOM manipulation
- Event-driven programming
- Local Storage for data persistence
- Form validation
- Responsive design with media queries
- UX/UI design principles for food delivery apps

---

## 👨‍💻 Author

**[Yogesh kohli]**  
Free Web Development Internship Online  
Data Alcott Systems | [www.dataalcott.com](http://www.dataalcott.com)

---

## 📄 License

This project is created as part of the Free Web Development Internship Online program.

---

*Made with ❤️ for Data Alcott Systems FreshBite Internship Task*

## blog
link: https://www.freeinternships.in/student/preview_my_blog_post.php?id=107
