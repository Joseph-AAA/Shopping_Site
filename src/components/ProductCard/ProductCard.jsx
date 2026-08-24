import React from "react";
import { Link } from "react-router-dom";
import { products } from "../../data/products";
import StarIcon from "../../assets/icons/StarIcon";
import "./ProductCard.css"
const ProductCard = ({product}) => {
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
                  <button className="add-btn">Add to cart</button>
              </div>
            </div>
         </article>;
};

export default ProductCard;
