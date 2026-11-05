
import React from "react";
import "./CartItem.css";
const CartItem = ({
    item,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart
}) => {

    return (
        <article className="cart-item">

            {/* Product image */}
            <img
                src={item.image}
                alt={item.title}
                className="cart-item-image"
            />

            {/* Product information */}
            <div className="cart-item-info">

                <h4>{item.title}</h4>

                <span className="cart-item-cat">
                    {item.category}
                </span>

                <p className="cart-item-price">
                    ${Number(item.price).toFixed(2)}
                </p>

            </div>

            {/* Product actions */}
            <div className="cart-item-actions">

                <div className="qty">

                    <button
                        onClick={() => decreaseQuantity(item.id)}
                        disabled={item.quantity === 1}
                    >
                        −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                        onClick={() => increaseQuantity(item.id)}
                    >
                        +
                    </button>

                </div>

                {/* Line total */}
                <span className="line-total">
                    ${(item.price * item.quantity).toFixed(2)}
                </span>

                {/* Remove product */}
                <button
                    className="remove"
                    onClick={() => removeFromCart(item.id)}
                >
                    Remove
                </button>

            </div>

        </article>
    );
};

export default CartItem;
