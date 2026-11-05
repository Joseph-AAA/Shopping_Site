
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../components/Context/CartContext";
import CartItem from "../../components/CartItem/CartItem";
import "./Cart.css";

const Cart = () => {

    const {
        cartItems,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart
    } = useCart();

    // Calculate subtotal
    const subtotal = cartItems.reduce(
        (total, item) => total + Number(item.price) * item.quantity,
        0
    );

    // Shipping cost
    const shipping = 0;

    // Calculate final total
    const total = subtotal + shipping;

    // Empty cart UI
    if (cartItems.length === 0) {
        return (
            <section className="section">
                <div className="container cart-container">

                    <div className="empty-cart">

                        <h1>Your cart is empty</h1>

                        <p>
                            Looks like you haven't added anything
                            to your cart yet.
                        </p>

                        <Link to="/" className="btn-primary">
                            Continue Shopping
                        </Link>

                    </div>

                </div>
            </section>
        );
    }

    return (
        <section className="section">
            <div className="container cart-container">

                {/* Cart header */}
                <div className="cart-header">

                    <h1>Shopping Cart</h1>

                    <button
                        className="clear-btn"
                        onClick={clearCart}
                    >
                        Clear cart
                    </button>

                </div>

                {/* Cart layout */}
                <div className="cart-layout">

                    {/* Cart product list */}
                    <div className="cart-list">

                        {cartItems.map((item) => (

                            <CartItem
                                key={item.id}
                                item={item}
                                increaseQuantity={increaseQuantity}
                                decreaseQuantity={decreaseQuantity}
                                removeFromCart={removeFromCart}
                            />

                        ))}

                    </div>

                    {/* Order summary */}
                    <aside className="cart-summary">

                        <h3>Order Summary</h3>

                        <div className="summary-row">

                            <span>Subtotal</span>

                            <span>
                                ${subtotal.toFixed(2)}
                            </span>

                        </div>

                        <div className="summary-row">

                            <span>Shipping</span>

                            <span>Free</span>

                        </div>

                        <div className="summary-row total">

                            <span>Total</span>

                            <span>
                                ${total.toFixed(2)}
                            </span>

                        </div>

                        <Link
                            to="/checkout"
                            className="checkout-btn"
                        >
                            Proceed to Checkout
                        </Link>

                        <Link to="/" className="continue-link">
                            ← Continue shopping
                        </Link>

                    </aside>

                </div>

            </div>
        </section>
    );
};

export default Cart;
