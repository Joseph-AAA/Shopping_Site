import React from "react";
import { Link } from "react-router-dom";
import { products } from "../../data/products";
import StarIcon from "../../assets/icons/StarIcon";
import "./ProductCard.css"
import { useCart } from "../Context/CartContext";
const ProductCard = ({product}) => {


    const {addToCart} =useCart();

  return <article>
            <div className="product-image-wrap">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="product-body">
              <span className="product-category">
                  {product.category}
              </span>
              <h3 className="product-title">
                  {product.title}
              </h3>
              <div className="product-rating">
                  <StarIcon className="star-icon-card" /> {product.rating}
              </div>
              <div className="product-footer">
                  <span className="product-price">${product.price}</span>
                  <button onClick={()=>{addToCart}} className="add-btn">Add to cart</button>
              </div>
            </div>
         </article>;
};

export default ProductCard;
