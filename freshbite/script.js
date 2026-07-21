// FreshBite - Online Food Ordering Website
// JavaScript Code with Full Functionality

// ===== DATA STORAGE =====

// Restaurants Data
const restaurants = [
    {
        id: 1,
        name: "Pizza Paradise",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400",
        cuisine: "Italian",
        rating: 4.5,
        deliveryTime: "25-30 mins",
        minOrder: "$10",
        tags: ["Pizza", "Pasta", "Fast Delivery"],
        category: "fast"
    },
    {
        id: 2,
        name: "Burger King",
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400",
        cuisine: "American",
        rating: 4.3,
        deliveryTime: "30-35 mins",
        minOrder: "$8",
        tags: ["Burgers", "Fries", "Budget Friendly"],
        category: "budget"
    },
    {
        id: 3,
        name: "Sushi Master",
        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400",
        cuisine: "Japanese",
        rating: 4.8,
        deliveryTime: "35-40 mins",
        minOrder: "$15",
        tags: ["Sushi", "Japanese", "Top Rated"],
        category: "rating"
    },
    {
        id: 4,
        name: "Pasta House",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400",
        cuisine: "Italian",
        rating: 4.6,
        deliveryTime: "20-25 mins",
        minOrder: "$12",
        tags: ["Pasta", "Italian", "Fast Delivery"],
        category: "fast"
    },
    {
        id: 5,
        name: "Taco Fiesta",
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400",
        cuisine: "Mexican",
        rating: 4.4,
        deliveryTime: "30-35 mins",
        minOrder: "$9",
        tags: ["Tacos", "Mexican", "Budget Friendly"],
        category: "budget"
    },
    {
        id: 6,
        name: "Curry Palace",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400",
        cuisine: "Indian",
        rating: 4.7,
        deliveryTime: "35-40 mins",
        minOrder: "$11",
        tags: ["Indian", "Curry", "Top Rated"],
        category: "rating"
    }
];

// Food Menu Items
const foodItems = [
    {
        id: 1,
        name: "Margherita Pizza",
        price: 12.99,
        category: "Pizza",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
        description: "Fresh tomatoes, mozzarella cheese, and basil on a thin crust",
        restaurant: "Pizza Paradise",
        veg: true,
        vegan: false,
        glutenFree: false,
        calories: 250,
        protein: 12,
        carbs: 30,
        fat: 10
    },
    {
        id: 2,
        name: "Pepperoni Pizza",
        price: 15.99,
        category: "Pizza",
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400",
        description: "Classic pepperoni with extra cheese",
        restaurant: "Pizza Paradise",
        veg: false,
        vegan: false,
        glutenFree: false,
        calories: 320,
        protein: 18,
        carbs: 35,
        fat: 16
    },
    {
        id: 3,
        name: "Classic Burger",
        price: 8.99,
        category: "Burgers",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
        description: "Juicy beef patty with lettuce, tomato, and special sauce",
        restaurant: "Burger King",
        veg: false,
        vegan: false,
        glutenFree: false,
        calories: 450,
        protein: 25,
        carbs: 40,
        fat: 22
    },
    {
        id: 4,
        name: "Veggie Burger",
        price: 7.99,
        category: "Burgers",
        image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400",
        description: "Plant-based patty with fresh vegetables",
        restaurant: "Burger King",
        veg: true,
        vegan: true,
        glutenFree: false,
        calories: 320,
        protein: 15,
        carbs: 38,
        fat: 12
    },
    {
        id: 5,
        name: "California Roll",
        price: 13.99,
        category: "Sushi",
        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400",
        description: "Crab, avocado, cucumber rolled in seaweed and rice",
        restaurant: "Sushi Master",
        veg: false,
        vegan: false,
        glutenFree: true,
        calories: 255,
        protein: 9,
        carbs: 38,
        fat: 7
    },
    {
        id: 6,
        name: "Veggie Sushi Roll",
        price: 11.99,
        category: "Sushi",
        image: "https://images.unsplash.com/photo-1617196035796-4d2e0a0a1f46?w=400",
        description: "Fresh vegetables wrapped in rice and seaweed",
        restaurant: "Sushi Master",
        veg: true,
        vegan: true,
        glutenFree: true,
        calories: 180,
        protein: 5,
        carbs: 35,
        fat: 3
    },
    {
        id: 7,
        name: "Spaghetti Carbonara",
        price: 14.99,
        category: "Pasta",
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400",
        description: "Creamy pasta with bacon and parmesan",
        restaurant: "Pasta House",
        veg: false,
        vegan: false,
        glutenFree: false,
        calories: 520,
        protein: 22,
        carbs: 60,
        fat: 24
    },
    {
        id: 8,
        name: "Penne Arrabbiata",
        price: 12.99,
        category: "Pasta",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400",
        description: "Spicy tomato sauce with garlic and chili",
        restaurant: "Pasta House",
        veg: true,
        vegan: true,
        glutenFree: false,
        calories: 380,
        protein: 12,
        carbs: 58,
        fat: 10
    },
    {
        id: 9,
        name: "Chocolate Cake",
        price: 6.99,
        category: "Desserts",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400",
        description: "Rich chocolate cake with ganache frosting",
        restaurant: "Pizza Paradise",
        veg: true,
        vegan: false,
        glutenFree: false,
        calories: 450,
        protein: 5,
        carbs: 58,
        fat: 24
    },
    {
        id: 10,
        name: "Cheesecake",
        price: 7.99,
        category: "Desserts",
        image: "https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=400",
        description: "Creamy New York style cheesecake",
        restaurant: "Pizza Paradise",
        veg: true,
        vegan: false,
        glutenFree: false,
        calories: 420,
        protein: 7,
        carbs: 45,
        fat: 26
    },
    {
        id: 11,
        name: "Coca Cola",
        price: 2.99,
        category: "Drinks",
        image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400",
        description: "Chilled Coca Cola 500ml",
        restaurant: "All Restaurants",
        veg: true,
        vegan: true,
        glutenFree: true,
        calories: 210,
        protein: 0,
        carbs: 54,
        fat: 0
    },
    {
        id: 12,
        name: "Fresh Orange Juice",
        price: 4.99,
        category: "Drinks",
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400",
        description: "Freshly squeezed orange juice",
        restaurant: "All Restaurants",
        veg: true,
        vegan: true,
        glutenFree: true,
        calories: 120,
        protein: 2,
        carbs: 27,
        fat: 0
    },
    {
        id: 13,
        name: "Chicken Tacos",
        price: 9.99,
        category: "Mexican",
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400",
        description: "Three soft tacos with seasoned chicken",
        restaurant: "Taco Fiesta",
        veg: false,
        vegan: false,
        glutenFree: false,
        calories: 350,
        protein: 28,
        carbs: 35,
        fat: 12
    },
    {
        id: 14,
        name: "Butter Chicken",
        price: 16.99,
        category: "Indian",
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400",
        description: "Creamy tomato curry with tender chicken pieces",
        restaurant: "Curry Palace",
        veg: false,
        vegan: false,
        glutenFree: true,
        calories: 480,
        protein: 35,
        carbs: 28,
        fat: 26
    },
    {
        id: 15,
        name: "Paneer Tikka",
        price: 14.99,
        category: "Indian",
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400",
        description: "Grilled cottage cheese cubes with spices",
        restaurant: "Curry Palace",
        veg: true,
        vegan: false,
        glutenFree: true,
        calories: 320,
        protein: 18,
        carbs: 15,
        fat: 22
    }
];

// Cart Array
let cart = [];

// User Data (Simulated)
let currentUser = null;

// Wishlist Array
let wishlist = [];

// Orders Array
let orders = [];

// Coupons Data
const coupons = {
    'PIZZA50': { discount: 0.5, type: 'percentage', minOrder: 20 },
    'BOGO': { discount: 50, type: 'percentage', minOrder: 15 },
    'SWEET30': { discount: 0.3, type: 'percentage', minOrder: 10 },
    'FIRST10': { discount: 10, type: 'fixed', minOrder: 0 }
};

let appliedCoupon = null;

// ===== INITIALIZATION =====

document.addEventListener('DOMContentLoaded', function() {
    loadFromLocalStorage();
    displayRestaurants();
    displayMenu();
    updateCartCount();
    updateCartDisplay();
    setupEventListeners();
    handleNavigation();
    checkUserLogin();
});

// Load data from localStorage
function loadFromLocalStorage() {
    const savedCart = localStorage.getItem('freshbite_cart');
    if (savedCart) cart = JSON.parse(savedCart);
    
    const savedUser = localStorage.getItem('freshbite_user');
    if (savedUser) currentUser = JSON.parse(savedUser);
    
    const savedWishlist = localStorage.getItem('freshbite_wishlist');
    if (savedWishlist) wishlist = JSON.parse(savedWishlist);
    
    const savedOrders = localStorage.getItem('freshbite_orders');
    if (savedOrders) orders = JSON.parse(savedOrders);
}

// Save to localStorage
function saveToLocalStorage() {
    localStorage.setItem('freshbite_cart', JSON.stringify(cart));
    localStorage.setItem('freshbite_user', JSON.stringify(currentUser));
    localStorage.setItem('freshbite_wishlist', JSON.stringify(wishlist));
    localStorage.setItem('freshbite_orders', JSON.stringify(orders));
}

// ===== NAVIGATION =====

function setupEventListeners() {
    // Hamburger menu
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });
    }
    
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            // Hide all sections first
            hideAllSections();
            
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.style.display = 'block';
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
            
            // Close mobile menu
            navLinks.classList.remove('open');
        });
    });
    
    // Scroll to top button
    const scrollTopBtn = document.getElementById('scroll-top');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Checkout form
    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', handleCheckoutSubmit);
    }
}

function hideAllSections() {
    const sections = ['cart', 'checkout', 'account'];
    sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
            section.style.display = 'none';
        }
    });
}

function handleNavigation() {
    // Show home section by default
    const hash = window.location.hash;
    if (!hash || hash === '#home') {
        document.getElementById('home').style.display = 'block';
    }
}

// ===== RESTAURANTS =====

function displayRestaurants(filter = 'all') {
    const grid = document.getElementById('restaurants-grid');
    if (!grid) return;
    
    let filteredRestaurants = restaurants;
    
    if (filter !== 'all') {
        filteredRestaurants = restaurants.filter(r => r.category === filter);
    }
    
    grid.innerHTML = filteredRestaurants.map(r => `
        <div class="restaurant-card" onclick="showRestaurantMenu(${r.id})">
            <img src="${r.image}" alt="${r.name}" class="restaurant-image" 
                 onerror="this.src='https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400'">
            <div class="restaurant-info">
                <h3 class="restaurant-name">${r.name}</h3>
                <div class="restaurant-details">
                    <span class="rating">⭐ ${r.rating}</span>
                    <span><i class="fas fa-clock"></i> ${r.deliveryTime}</span>
                    <span>Min: ${r.minOrder}</span>
                </div>
                <div class="restaurant-tags">
                    ${r.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

function filterRestaurants(filter) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    displayRestaurants(filter);
}

function showRestaurantMenu(restaurantId) {
    const restaurant = restaurants.find(r => r.id === restaurantId);
    if (!restaurant) return;
    
    // Filter menu items to this restaurant
    const restaurantItems = foodItems.filter(item => 
        item.restaurant === restaurant.name || item.restaurant === 'All Restaurants'
    );
    
    // Scroll to menu section
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
    
    showToast(`Showing menu for ${restaurant.name}`);
}

// ===== MENU =====

function displayMenu(filter = 'all', searchQuery = '') {
    const grid = document.getElementById('menu-grid');
    if (!grid) return;
    
    let items = foodItems;
    
    // Dietary filter
    if (filter === 'veg') {
        items = items.filter(item => item.veg && !item.vegan);
    } else if (filter === 'nonveg') {
        items = items.filter(item => !item.veg);
    } else if (filter === 'vegan') {
        items = items.filter(item => item.vegan);
    } else if (filter === 'glutenfree') {
        items = items.filter(item => item.glutenFree);
    }
    
    // Search filter
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        items = items.filter(item => 
            item.name.toLowerCase().includes(query) ||
            item.category.toLowerCase().includes(query) ||
            item.restaurant.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query)
        );
    }
    
    if (items.length === 0) {
        grid.innerHTML = '<p style="text-align:center; width:100%; padding:40px; color:#666;">No items found. Try a different filter!</p>';
        return;
    }
    
    grid.innerHTML = items.map(item => {
        const isInWishlist = wishlist.includes(item.id);
        let badge = '';
        if (item.vegan) {
            badge = `<span class="diet-badge badge-vegan">Vegan</span>`;
        } else if (item.veg) {
            badge = `<span class="diet-badge badge-veg">Veg</span>`;
        } else {
            badge = `<span class="diet-badge badge-nonveg">Non-Veg</span>`;
        }
        if (item.glutenFree) {
            badge += `<span class="diet-badge badge-glutenfree" style="top:50px;">GF</span>`;
        }
        
        return `
            <div class="menu-item">
                ${badge}
                <button class="wishlist-btn ${isInWishlist ? 'active' : ''}" 
                        onclick="toggleWishlist(${item.id})" 
                        title="${isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}">
                    <i class="fas fa-heart"></i>
                </button>
                <img src="${item.image}" 
                     alt="${item.name}" 
                     class="menu-image" 
                     onclick="showProductDetail(${item.id})"
                     onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400'">
                <div class="menu-info">
                    <h3 class="menu-item-name">${item.name}</h3>
                    <p class="menu-description">${item.description}</p>
                    <p style="font-size:12px; color:#999; margin-bottom:10px;">
                        <i class="fas fa-store"></i> ${item.restaurant}
                    </p>
                    <div class="menu-footer">
                        <span class="menu-price">$${item.price.toFixed(2)}</span>
                        <button class="btn-add-cart" onclick="addToCart(${item.id})">
                            <i class="fas fa-cart-plus"></i> Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function filterByCategory(category) {
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
    displayMenu('all', category);
    showToast(`Showing ${category} items`);
}

function filterByDiet(filter) {
    document.querySelectorAll('.diet-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    displayMenu(filter);
}

function searchFood() {
    const query = document.getElementById('search-input').value;
    if (!query.trim()) {
        showToast('Please enter a search term');
        return;
    }
    displayMenu('all', query);
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
    showToast(`Showing results for "${query}"`);
}

// Enter key for search
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') searchFood();
        });
    }
});

// ===== PRODUCT DETAIL =====

function showProductDetail(itemId) {
    const item = foodItems.find(i => i.id === itemId);
    if (!item) return;
    
    const modal = document.getElementById('product-modal');
    const content = document.getElementById('product-detail-content');
    
    let dietTag = '';
    if (item.vegan) dietTag = '<span class="diet-badge badge-vegan">Vegan</span>';
    else if (item.veg) dietTag = '<span class="diet-badge badge-veg">Vegetarian</span>';
    else dietTag = '<span class="diet-badge badge-nonveg">Non-Vegetarian</span>';
    
    if (item.glutenFree) dietTag += '<span class="diet-badge badge-glutenfree">Gluten-Free</span>';
    
    content.innerHTML = `
        <div class="product-detail-inner">
            <div>
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="product-detail-info">
                <h2>${item.name}</h2>
                ${dietTag}
                <p class="menu-price">$${item.price.toFixed(2)}</p>
                <p>${item.description}</p>
                <p style="color:#999; font-size:14px;">
                    <i class="fas fa-store"></i> ${item.restaurant}
                </p>
                
                <div class="nutritional-info">
                    <h4>Nutritional Information</h4>
                    <div class="nutrition-grid">
                        <div class="nutrition-item">
                            <strong>${item.calories}</strong>
                            <span>Calories</span>
                        </div>
                        <div class="nutrition-item">
                            <strong>${item.protein}g</strong>
                            <span>Protein</span>
                        </div>
                        <div class="nutrition-item">
                            <strong>${item.carbs}g</strong>
                            <span>Carbs</span>
                        </div>
                        <div class="nutrition-item">
                            <strong>${item.fat}g</strong>
                            <span>Fat</span>
                        </div>
                    </div>
                </div>
                
                <button class="btn btn-primary btn-block" onclick="addToCart(${item.id}); closeProductModal();">
                    <i class="fas fa-cart-plus"></i> Add to Cart - $${item.price.toFixed(2)}
                </button>
            </div>
        </div>
    `;
    
    modal.classList.add('show');
}

function closeProductModal() {
    document.getElementById('product-modal').classList.remove('show');
}

// ===== WISHLIST =====

function toggleWishlist(itemId) {
    event.stopPropagation();
    
    if (!currentUser) {
        showToast('Please login to use wishlist');
        window.location.hash = '#account';
        return;
    }
    
    const index = wishlist.indexOf(itemId);
    if (index === -1) {
        wishlist.push(itemId);
        showToast('Added to wishlist');
    } else {
        wishlist.splice(index, 1);
        showToast('Removed from wishlist');
    }
    
    saveToLocalStorage();
    displayMenu(); // Refresh display to update heart icons
    displayWishlist();
}

function displayWishlist() {
    const container = document.getElementById('wishlist-items');
    if (!container) return;
    
    if (wishlist.length === 0) {
        container.innerHTML = '<p class="no-wishlist">No items in wishlist</p>';
        container.className = '';
        return;
    }
    
    const items = foodItems.filter(item => wishlist.includes(item.id));
    container.className = 'menu-grid';
    container.innerHTML = items.map(item => `
        <div class="menu-item">
            <img src="${item.image}" alt="${item.name}" class="menu-image">
            <div class="menu-info">
                <h3 class="menu-item-name">${item.name}</h3>
                <p class="menu-description">${item.description}</p>
                <div class="menu-footer">
                    <span class="menu-price">$${item.price.toFixed(2)}</span>
                    <button class="btn-add-cart" onclick="addToCart(${item.id})">
                        <i class="fas fa-cart-plus"></i> Add
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// ===== CART =====

function addToCart(itemId) {
    const item = foodItems.find(i => i.id === itemId);
    if (!item) return;
    
    const existingItem = cart.find(c => c.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            quantity: 1
        });
    }
    
    updateCartCount();
    updateCartDisplay();
    saveToLocalStorage();
    showToast(`${item.name} added to cart`);
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCartCount();
    updateCartDisplay();
    saveToLocalStorage();
    showToast('Item removed from cart');
}

function updateQuantity(itemId, change) {
    const item = cart.find(c => c.id === itemId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(itemId);
        return;
    }
    
    updateCartCount();
    updateCartDisplay();
    saveToLocalStorage();
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = count;
}

function updateCartDisplay() {
    const itemsContainer = document.getElementById('cart-items');
    const summary = document.getElementById('cart-summary');
    
    if (!itemsContainer) return;
    
    if (cart.length === 0) {
        itemsContainer.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Your cart is empty</p>
                <a href="#menu" class="btn btn-primary">Browse Menu</a>
            </div>
        `;
        summary.style.display = 'none';
        return;
    }
    
    itemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
            </div>
            <div class="cart-item-controls">
                <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span class="qty-number">${item.quantity}</span>
                <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
    
    // Calculate totals
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = 2.99;
    const tax = subtotal * 0.1;
    let discount = 0;
    
    if (appliedCoupon) {
        if (appliedCoupon.type === 'percentage') {
            discount = subtotal * appliedCoupon.discount;
        } else {
            discount = appliedCoupon.discount;
        }
    }
    
    const total = subtotal + deliveryFee + tax - discount;
    
    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('delivery-fee').textContent = `$${deliveryFee.toFixed(2)}`;
    document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
    
    const discountRow = document.getElementById('discount-row');
    if (discount > 0) {
        document.getElementById('discount').textContent = `-$${discount.toFixed(2)}`;
        discountRow.style.display = 'flex';
    } else {
        discountRow.style.display = 'none';
    }
    
    summary.style.display = 'block';
}

function applyCoupon() {
    const code = document.getElementById('coupon-code').value.toUpperCase();
    
    if (!code) {
        showToast('Please enter a coupon code');
        return;
    }
    
    const coupon = coupons[code];
    
    if (!coupon) {
        showToast('Invalid coupon code');
        return;
    }
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    if (subtotal < coupon.minOrder) {
        showToast(`Minimum order of $${coupon.minOrder} required`);
        return;
    }
    
    appliedCoupon = coupon;
    updateCartDisplay();
    showToast(`Coupon "${code}" applied successfully!`);
}

function proceedToCheckout() {
    if (cart.length === 0) {
        showToast('Your cart is empty');
        return;
    }
    
    // Show checkout section
    document.getElementById('cart').style.display = 'none';
    document.getElementById('checkout').style.display = 'block';
    
    // Update checkout summary
    updateCheckoutSummary();
    
    document.getElementById('checkout').scrollIntoView({ behavior: 'smooth' });
}

function updateCheckoutSummary() {
    const container = document.getElementById('checkout-items');
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = 2.99;
    const tax = subtotal * 0.1;
    let discount = 0;
    
    if (appliedCoupon) {
        if (appliedCoupon.type === 'percentage') {
            discount = subtotal * appliedCoupon.discount;
        } else {
            discount = appliedCoupon.discount;
        }
    }
    
    const total = subtotal + deliveryFee + tax - discount;
    
    container.innerHTML = cart.map(item => `
        <div class="checkout-item">
            <span>${item.name} x${item.quantity}</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
        </div>
    `).join('');
    
    document.getElementById('checkout-subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('checkout-delivery').textContent = `$${deliveryFee.toFixed(2)}`;
    document.getElementById('checkout-tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('checkout-total').textContent = `$${total.toFixed(2)}`;
}

// ===== CHECKOUT =====

function handleCheckoutSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('customer-name').value;
    const phone = document.getElementById('customer-phone').value;
    const email = document.getElementById('customer-email').value;
    const address = document.getElementById('delivery-address').value;
    const deliveryTime = document.getElementById('delivery-time').value;
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
    
    // Basic validation
    if (!name || !phone || !email || !address) {
        showToast('Please fill all required fields');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showToast('Please enter a valid email address');
        return;
    }
    
    // Phone validation
    const phoneRegex = /^[\d\s\-\+]{10,}$/;
    if (!phoneRegex.test(phone)) {
        showToast('Please enter a valid phone number');
        return;
    }
    
    // Create order
    const orderId = 'FB' + Date.now().toString().slice(-6);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = 2.99;
    const tax = subtotal * 0.1;
    let discount = 0;
    
    if (appliedCoupon) {
        if (appliedCoupon.type === 'percentage') {
            discount = subtotal * appliedCoupon.discount;
        } else {
            discount = appliedCoupon.discount;
        }
    }
    
    const total = subtotal + deliveryFee + tax - discount;
    
    const newOrder = {
        id: orderId,
        items: [...cart],
        customer: { name, phone, email, address },
        deliveryTime,
        paymentMethod,
        subtotal,
        deliveryFee,
        tax,
        discount,
        total,
        date: new Date().toLocaleDateString(),
        status: 'Placed'
    };
    
    orders.push(newOrder);
    
    // Simulate payment processing for card/UPI
    if (paymentMethod === 'card' || paymentMethod === 'upi') {
        showPaymentSimulation(newOrder);
    } else {
        confirmOrder(newOrder);
    }
}

function showPaymentSimulation(order) {
    showToast('Processing payment...');
    
    // Simulate 2-second payment delay
    setTimeout(() => {
        showToast('Payment successful!');
        confirmOrder(order);
    }, 2000);
}

function confirmOrder(order) {
    // Clear cart
    cart = [];
    appliedCoupon = null;
    
    updateCartCount();
    updateCartDisplay();
    saveToLocalStorage();
    
    // Show success modal
    document.getElementById('order-id').textContent = order.id;
    document.getElementById('estimated-time').textContent = order.deliveryTime;
    
    document.getElementById('order-modal').classList.add('show');
    
    // Hide checkout
    document.getElementById('checkout').style.display = 'none';
    
    // Simulate order tracking animation
    simulateOrderTracking();
    
    // Update order history
    if (currentUser) {
        displayOrderHistory();
    }
}

function simulateOrderTracking() {
    const steps = document.querySelectorAll('.tracking-step');
    let currentStep = 0;
    
    const interval = setInterval(() => {
        if (currentStep < steps.length) {
            steps[currentStep].classList.add('active');
            currentStep++;
        } else {
            clearInterval(interval);
        }
    }, 2000);
}

function closeOrderModal() {
    document.getElementById('order-modal').classList.remove('show');
    window.location.hash = '#home';
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
}

// ===== USER ACCOUNT =====

function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    if (!email || !password) {
        showToast('Please enter email and password');
        return;
    }
    
    // Simulated login
    const existingUser = {
        name: email.split('@')[0],
        email: email,
        phone: '9876543210',
        password: password
    };
    
    currentUser = existingUser;
    saveToLocalStorage();
    checkUserLogin();
    showToast(`Welcome back, ${currentUser.name}!`);
}

function handleRegister(e) {
    e.preventDefault();
    
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const phone = document.getElementById('register-phone').value;
    const password = document.getElementById('register-password').value;
    
    if (!name || !email || !phone || !password) {
        showToast('Please fill all fields');
        return;
    }
    
    currentUser = { name, email, phone, password };
    saveToLocalStorage();
    checkUserLogin();
    showToast(`Welcome to FreshBite, ${name}!`);
}

function handleLogout() {
    currentUser = null;
    saveToLocalStorage();
    checkUserLogin();
    showToast('Logged out successfully');
}

function checkUserLogin() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const userProfile = document.getElementById('user-profile');
    
    if (!loginForm || !registerForm || !userProfile) return;
    
    if (currentUser) {
        loginForm.style.display = 'none';
        registerForm.style.display = 'none';
        userProfile.style.display = 'block';
        
        document.getElementById('profile-name').textContent = currentUser.name;
        document.getElementById('profile-email').textContent = currentUser.email;
        document.getElementById('profile-phone').textContent = currentUser.phone;
        
        displayOrderHistory();
        displayWishlist();
    } else {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        userProfile.style.display = 'none';
    }
}

function showLogin() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
}

function showRegister() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
}

function displayOrderHistory() {
    const container = document.getElementById('order-history-list');
    if (!container) return;
    
    if (orders.length === 0) {
        container.innerHTML = '<p class="no-orders">No orders yet</p>';
        return;
    }
    
    container.innerHTML = orders.slice().reverse().map(order => `
        <div class="order-history-card">
            <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                <strong>${order.id}</strong>
                <span style="color:#28A745; font-weight:bold;">✓ ${order.status}</span>
            </div>
            <div style="color:#666; font-size:14px;">
                ${order.items.map(i => `${i.name} x${i.quantity}`).join(', ')}
            </div>
            <div style="display:flex; justify-content:space-between; margin-top:8px;">
                <span style="color:#999;">${order.date}</span>
                <strong style="color:var(--primary-color);">$${order.total.toFixed(2)}</strong>
            </div>
        </div>
    `).join('');
}

// ===== FORMS =====

function handleContactForm(e) {
    e.preventDefault();
    showToast('Message sent! We will get back to you soon.');
    e.target.reset();
}

function handleNewsletter(e) {
    e.preventDefault();
    showToast('Thank you for subscribing!');
    e.target.reset();
}

// ===== TOAST NOTIFICATION =====

function showToast(message) {
    // Remove existing toast
    const existingToast = document.querySelector('.toast');
    if (existingToast) existingToast.remove();
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        if (toast.parentNode) toast.remove();
    }, 3000);
}

// ===== CLOSE MODALS ON OUTSIDE CLICK =====

window.addEventListener('click', function(e) {
    const orderModal = document.getElementById('order-modal');
    const productModal = document.getElementById('product-modal');
    
    if (e.target === orderModal) closeOrderModal();
    if (e.target === productModal) closeProductModal();
});
