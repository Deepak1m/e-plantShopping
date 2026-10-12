import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();

  // Retrieve cart items from Redux store
  const cartItems = useSelector((state) => state.cart.items);

  // Compute total number of items in the cart
  const totalCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Categorized plant inventory
  const plantsArray = [
    {
      category: 'Air Purifying Plants',
      plants: [
        {
          name: 'Snake Plant',
          image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bf6?auto=format&fit=crop&w=600&q=80',
          description: 'Produces oxygen at night, filters formaldehyde, and thrives on neglect.',
          cost: '$15',
        },
        {
          name: 'Spider Plant',
          image: 'https://images.unsplash.com/photo-1572688484437-18fdff729930?auto=format&fit=crop&w=600&q=80',
          description: 'Resilient and air-filtering plant that safely removes household toxins.',
          cost: '$12',
        },
        {
          name: 'Peace Lily',
          image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e7355?auto=format&fit=crop&w=600&q=80',
          description: 'Elegant white blooms that purify air and enhance indoor humidity.',
          cost: '$18',
        },
        {
          name: 'Boston Fern',
          image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=600&q=80',
          description: 'Lush arching fronds that naturally humidify rooms and eliminate airborne pollutants.',
          cost: '$16',
        },
        {
          name: 'Rubber Plant',
          image: 'https://images.unsplash.com/photo-1617173944883-6ffbd35d584d?auto=format&fit=crop&w=600&q=80',
          description: 'Glossy dark leaves that excel at removing carbon monoxide and airborne mold.',
          cost: '$22',
        },
        {
          name: 'English Ivy',
          image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80',
          description: 'Classic trailing vine celebrated for reducing airborne particulate matter.',
          cost: '$14',
        },
      ],
    },
    {
      category: 'Aromatic & Fragrant Plants',
      plants: [
        {
          name: 'Lavender',
          image: 'https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&w=600&q=80',
          description: 'Soothing floral scent known to reduce stress and induce restful sleep.',
          cost: '$20',
        },
        {
          name: 'Rosemary',
          image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=600&q=80',
          description: 'Invigorating herbal aroma that boosts memory, alertness, and culinary delights.',
          cost: '$15',
        },
        {
          name: 'Mint',
          image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&w=600&q=80',
          description: 'Crisp refreshing fragrance that deters insects and revitalizes mood.',
          cost: '$10',
        },
        {
          name: 'Jasmine',
          image: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?auto=format&fit=crop&w=600&q=80',
          description: 'Sweet nocturnal blossoms whose scent has been clinically linked to calmness.',
          cost: '$24',
        },
      ],
    },
    {
      category: 'Medicinal & Wellness Plants',
      plants: [
        {
          name: 'Aloe Vera',
          image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&w=600&q=80',
          description: 'Succulent leaves rich in healing gel for burns, skin hydration, and wellness.',
          cost: '$14',
        },
        {
          name: 'Tulsi (Holy Basil)',
          image: 'https://images.unsplash.com/photo-1618164436241-4473940d1f5c?auto=format&fit=crop&w=600&q=80',
          description: 'Sacred adaptogenic herb renowned for immune support and respiratory health.',
          cost: '$13',
        },
      ],
    },
    {
      category: 'Low Maintenance & Easy Care',
      plants: [
        {
          name: 'ZZ Plant',
          image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&w=600&q=80',
          description: 'Indestructible foliage that tolerates low light, drought, and neglect effortlessly.',
          cost: '$25',
        },
        {
          name: 'Jade Plant',
          image: 'https://images.unsplash.com/photo-1509223197845-458d87318791?auto=format&fit=crop&w=600&q=80',
          description: 'Beloved symbol of prosperity with fleshy, hardy leaves requiring minimal watering.',
          cost: '$16',
        },
      ],
    },
  ];

  // Check if an item is currently present in the cart
  const isItemInCart = (plantName) => {
    return cartItems.some((item) => item.name === plantName);
  };

  // Add plant to cart handler
  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prevState) => ({
      ...prevState,
      [plant.name]: true,
    }));
  };

  // Navigate to Cart view
  const handleCartClick = (e) => {
    if (e) e.preventDefault();
    setShowCart(true);
  };

  // Return to Plant view
  const handleContinueShopping = (e) => {
    if (e) e.preventDefault();
    setShowCart(false);
  };

  return (
    <div className="product-page-root">
      {/* Top Navigation Bar */}
      <nav className="navbar-container">
        <div className="nav-brand-group" onClick={onHomeClick || handleContinueShopping}>
          <div className="nav-logo-icon">🌿</div>
          <div className="nav-title-block">
            <h1 className="nav-company-name">Paradise Nursery</h1>
            <p className="nav-tagline">Where Greenery Meets Serenity</p>
          </div>
        </div>

        <div className="nav-links-group">
          <button
            className={`nav-link-btn ${!showCart ? 'active' : ''}`}
            onClick={handleContinueShopping}
          >
            Plants
          </button>
          {onHomeClick && (
            <button className="nav-link-btn" onClick={onHomeClick}>
              Home
            </button>
          )}

          {/* Cart Icon & Badge */}
          <button
            className="cart-nav-icon-wrapper"
            onClick={handleCartClick}
            aria-label="View shopping cart"
          >
            <svg
              className="cart-svg-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span className="cart-badge-count">{totalCartCount}</span>
          </button>
        </div>
      </nav>

      {/* Main Content: Shows CartItem view or Categorized Plant Catalog */}
      <main className="product-page-main">
        {showCart ? (
          <CartItem onContinueShopping={handleContinueShopping} />
        ) : (
          <div className="catalog-container">
            <header className="catalog-header">
              <span className="catalog-pill">Botanical Collection</span>
              <h2 className="catalog-headline">Explore Our Nursery Plants</h2>
              <p className="catalog-subheadline">
                Each specimen is organically nurtured, sustainably packaged, and guaranteed to thrive.
              </p>
            </header>

            {plantsArray.map((categoryObj) => (
              <section className="category-section" key={categoryObj.category}>
                <div className="category-header">
                  <h3 className="category-title">{categoryObj.category}</h3>
                  <div className="category-divider"></div>
                </div>

                <div className="plants-grid">
                  {categoryObj.plants.map((plant) => {
                    const alreadyAdded = isItemInCart(plant.name) || addedToCart[plant.name];

                    return (
                      <div className="plant-card" key={plant.name}>
                        <div className="plant-image-container">
                          <img
                            src={plant.image}
                            alt={plant.name}
                            className="plant-card-image"
                            loading="lazy"
                          />
                          <span className="plant-price-pill">{plant.cost}</span>
                        </div>

                        <div className="plant-card-body">
                          <h4 className="plant-card-name">{plant.name}</h4>
                          <p className="plant-card-description">{plant.description}</p>
                          <div className="plant-card-footer">
                            <button
                              className={`add-to-cart-btn ${alreadyAdded ? 'added' : ''}`}
                              onClick={() => handleAddToCart(plant)}
                              disabled={alreadyAdded}
                            >
                              {alreadyAdded ? '✓ Added to Cart' : 'Add to Cart'}
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="nursery-footer">
        <p>© 2026 Paradise Nursery Inc. All rights reserved. Cultivating happiness, one leaf at a time.</p>
      </footer>
    </div>
  );
}

export default ProductList;
