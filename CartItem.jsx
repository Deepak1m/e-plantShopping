import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

function CartItem({ onContinueShopping }) {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Parse numerical value from cost string (e.g. "$15" -> 15 or 15 -> 15)
  const parseCost = (cost) => {
    if (typeof cost === 'number') return cost;
    if (typeof cost === 'string') {
      const parsed = parseFloat(cost.replace(/[^0-9.]/g, ''));
      return isNaN(parsed) ? 0 : parsed;
    }
    return 0;
  };

  // Calculate total amount for all products in the shopping cart
  const calculateTotalAmount = () => {
    const total = cartItems.reduce((acc, item) => {
      const unitCost = parseCost(item.cost);
      return acc + unitCost * item.quantity;
    }, 0);
    return total.toFixed(2);
  };

  // Calculate total number of plant items across all products
  const calculateTotalQuantity = () => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  };

  // Calculate total subtotal cost for an individual item
  const calculateTotalCost = (item) => {
    const unitPrice = parseCost(item.cost);
    return (unitPrice * item.quantity).toFixed(2);
  };

  // Increment item quantity
  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({
        name: item.name,
        quantity: item.quantity + 1,
      })
    );
  };

  // Decrement item quantity (if quantity becomes 0, remove item)
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          name: item.name,
          quantity: item.quantity - 1,
        })
      );
    } else {
      dispatch(removeItem(item.name));
    }
  };

  // Remove item completely from the cart
  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  // Continue shopping button action
  const handleContinueShopping = (e) => {
    if (e) e.preventDefault();
    if (onContinueShopping) {
      onContinueShopping(e);
    }
  };

  // Checkout button handler
  const handleCheckoutShopping = () => {
    alert('Thank you for ordering with Paradise Nursery! Checkout functionality will be coming soon.');
  };

  return (
    <div className="cart-container">
      <div className="cart-header-section">
        <h2 className="cart-title">Your Plant Shopping Cart</h2>
        <p className="cart-subtitle">
          Review your botanical selections and proceed to checkout
        </p>
      </div>

      {cartItems.length === 0 ? (
        <div className="empty-cart-view">
          <div className="empty-cart-icon">🛒🌿</div>
          <h3>Your cart is empty!</h3>
          <p>You haven't added any lovely plants to your garden cart yet.</p>
          <button className="continue-shopping-btn" onClick={handleContinueShopping}>
            Browse Our Plant Collection
          </button>
        </div>
      ) : (
        <div className="cart-content-wrapper">
          <div className="cart-items-list">
            {cartItems.map((item) => (
              <div className="cart-item-card" key={item.name}>
                <div className="cart-item-image-wrapper">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                </div>

                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <div className="cart-item-unit-price">
                    Unit Price: <span className="price-tag">{item.cost}</span>
                  </div>

                  <div className="cart-item-controls">
                    <span className="qty-label">Quantity:</span>
                    <div className="quantity-counter">
                      <button
                        className="qty-btn decrement-btn"
                        onClick={() => handleDecrement(item)}
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="quantity-value">{item.quantity}</span>
                      <button
                        className="qty-btn increment-btn"
                        onClick={() => handleIncrement(item)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="cart-item-subtotal">
                    Subtotal: <strong>${calculateTotalCost(item)}</strong>
                  </div>
                </div>

                <div className="cart-item-action">
                  <button
                    className="delete-item-btn"
                    onClick={() => handleRemove(item)}
                    aria-label={`Remove ${item.name}`}
                  >
                    🗑️ Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary-card">
            <h3 className="summary-title">Order Summary</h3>
            <div className="summary-row">
              <span>Total Plant Varieties:</span>
              <span>{cartItems.length}</span>
            </div>
            <div className="summary-row">
              <span>Total Plant Units:</span>
              <span>{calculateTotalQuantity()}</span>
            </div>
            <div className="summary-row">
              <span>Eco-friendly Shipping:</span>
              <span className="free-shipping">FREE</span>
            </div>
            <hr className="summary-divider" />
            <div className="summary-row total-row">
              <span>Total Cart Amount:</span>
              <span className="total-amount">${calculateTotalAmount()}</span>
            </div>

            <div className="cart-actions-group">
              <button
                className="checkout-btn"
                onClick={handleCheckoutShopping}
              >
                Proceed to Checkout (${calculateTotalAmount()})
              </button>
              <button
                className="continue-shopping-btn-outline"
                onClick={handleContinueShopping}
              >
                ← Continue Shopping
              </button>
            </div>

            <div className="eco-guarantee">
              <span>🌱 100% Healthy Plant Guarantee Upon Arrival</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartItem;
