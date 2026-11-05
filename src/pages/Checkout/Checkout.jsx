
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../components/Context/CartContext.jsx";
import "./Checkout.css";

function Checkout() {

    const {
        cartItems,
        clearCart
    } = useCart();

    // Form state
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        address: "",
        city: "",
        zip: "",
        country: "",
        cardName: "",
        cardNumber: "",
        expiry: "",
        cvc: ""
    });

    // Order confirmation state
    const [orderPlaced, setOrderPlaced] = useState(null);

    // Handle input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // Calculate subtotal
    const subtotal = cartItems.reduce(
        (total, item) =>
            total + Number(item.price) * item.quantity,
        0
    );

    // Shipping cost
    const shipping = 0;

    // Calculate final total
    const total = subtotal + shipping;

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // This is a frontend demo only.
        // No real payment is processed.

        setOrderPlaced({
            name: form.fullName,
            total: total
        });

        // Clear cart after demo order submission
        clearCart();
    };

    // Demo order confirmation
    if (orderPlaced) {
        return (
            <section className="section">
                <div className="container">

                    <div className="order-success">

                        <div className="success-icon">
                            ✓
                        </div>

                        <h1>Order Submitted!</h1>

                        <p>
                            Thank you, {orderPlaced.name}.
                            Your demo order has been submitted successfully.
                        </p>

                        <h3>
                            Order Total: ${orderPlaced.total.toFixed(2)}
                        </h3>

                        <p className="demo-notice">
                            This is a demonstration checkout.
                            No payment was processed.
                        </p>

                        <Link to="/shop" className="btn-primary">
                            Continue Shopping
                        </Link>

                    </div>

                </div>
            </section>
        );
    }

    // Prevent checkout when cart is empty
    if (cartItems.length === 0) {
        return (
            <section className="section">
                <div className="container">

                    <div className="empty-cart">

                        <h1>Nothing to checkout</h1>

                        <p>Your cart is empty.</p>

                        <Link to="/shop" className="btn-primary">
                            Browse Products
                        </Link>

                    </div>

                </div>
            </section>
        );
    }

    return (
        <section className="section">

            <div className="container">

                {/* Checkout header */}
                <h1 className="section-title">
                    Checkout
                </h1>

                <p className="section-subtitle">
                    Complete your order — secure and fast.
                </p>

                <div className="checkout-layout">

                    {/* =====================
                        CHECKOUT FORM
                    ====================== */}

                    <form
                        className="checkout-form"
                        onSubmit={handleSubmit}
                    >

                        {/* Billing Information */}
                        <fieldset>

                            <legend>Billing Information</legend>

                            <div className="form-row">

                                <label>
                                    <span>Full Name</span>

                                    <input
                                        type="text"
                                        name="fullName"
                                        value={form.fullName}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        required
                                    />
                                </label>

                                <label>
                                    <span>Email</span>

                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        required
                                    />
                                </label>

                            </div>

                            <label>
                                <span>Address</span>

                                <input
                                    type="text"
                                    name="address"
                                    value={form.address}
                                    onChange={handleChange}
                                    placeholder="Street address"
                                    required
                                />
                            </label>

                            <div className="form-row form-row-3">

                                <label>
                                    <span>City</span>

                                    <input
                                        type="text"
                                        name="city"
                                        value={form.city}
                                        onChange={handleChange}
                                        placeholder="City"
                                        required
                                    />
                                </label>

                                <label>
                                    <span>ZIP / Postal</span>

                                    <input
                                        type="text"
                                        name="zip"
                                        value={form.zip}
                                        onChange={handleChange}
                                        placeholder="Postal code"
                                        required
                                    />
                                </label>

                                <label>
                                    <span>Country</span>

                                    <input
                                        type="text"
                                        name="country"
                                        value={form.country}
                                        onChange={handleChange}
                                        placeholder="Country"
                                        required
                                    />
                                </label>

                            </div>

                        </fieldset>

                        {/* Payment Details */}
                        <fieldset>

                            <legend>Payment Details</legend>

                            <p className="payment-demo-note">
                                Demo payment form only. Do not enter real card details.
                            </p>

                            <label>
                                <span>Cardholder Name</span>

                                <input
                                    type="text"
                                    name="cardName"
                                    value={form.cardName}
                                    onChange={handleChange}
                                    placeholder="Name on card"
                                    required
                                />
                            </label>

                            <label>
                                <span>Card Number</span>

                                <input
                                    type="text"
                                    name="cardNumber"
                                    value={form.cardNumber}
                                    onChange={handleChange}
                                    placeholder="4242 4242 4242 4242"
                                    inputMode="numeric"
                                    maxLength={19}
                                    pattern="[0-9 ]{13,19}"
                                    title="Enter a demo card number containing 13 to 19 digits."
                                    required
                                />
                            </label>

                            <div className="form-row">

                                <label>
                                    <span>Expiry (MM/YY)</span>

                                    <input
                                        type="text"
                                        name="expiry"
                                        value={form.expiry}
                                        onChange={handleChange}
                                        placeholder="12/27"
                                        maxLength={5}
                                        pattern="(0[1-9]|1[0-2])/[0-9]{2}"
                                        title="Use MM/YY format."
                                        required
                                    />
                                </label>

                                <label>
                                    <span>CVC</span>

                                    <input
                                        type="text"
                                        name="cvc"
                                        value={form.cvc}
                                        onChange={handleChange}
                                        placeholder="123"
                                        inputMode="numeric"
                                        maxLength={4}
                                        pattern="[0-9]{3,4}"
                                        required
                                    />
                                </label>

                            </div>

                        </fieldset>

                        {/* Submit Order */}
                        <button
                            type="submit"
                            className="btn-primary place-order"
                        >
                            Place Demo Order — ${total.toFixed(2)}
                        </button>

                    </form>


                    {/* =====================
                        ORDER SUMMARY
                    ====================== */}

                    <aside className="checkout-summary">

                        <h3>Order Summary</h3>

                        {/* Cart products */}
                        <ul className="summary-items">

                            {cartItems.map((item) => (

                                <li key={item.id}>

                                    <img
                                        src={item.image}
                                        alt={item.title}
                                    />

                                    <div>
                                        <h4>{item.title}</h4>

                                        <span>
                                            Qty: {item.quantity}
                                        </span>
                                    </div>

                                    <strong>
                                        ${(Number(item.price) * item.quantity).toFixed(2)}
                                    </strong>

                                </li>

                            ))}

                        </ul>

                        {/* Subtotal */}
                        <div className="summary-row">

                            <span>Subtotal</span>

                            <span>
                                ${subtotal.toFixed(2)}
                            </span>

                        </div>

                        {/* Shipping */}
                        <div className="summary-row">

                            <span>Shipping</span>

                            <span>
                                {shipping === 0
                                    ? "Free"
                                    : `$${shipping.toFixed(2)}`
                                }
                            </span>

                        </div>

                        {/* Total */}
                        <div className="summary-row total">

                            <span>Total</span>

                            <span>
                                ${total.toFixed(2)}
                            </span>

                        </div>

                        <Link
                            to="/cart"
                            className="back-to-cart"
                        >
                            ← Back to Cart
                        </Link>

                    </aside>

                </div>

            </div>

        </section>
    );
}

export default Checkout;
