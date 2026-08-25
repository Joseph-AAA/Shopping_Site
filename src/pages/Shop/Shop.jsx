import React, { useState } from "react";
import "./Shop.css";
import { categories, products } from "../../data/products";
import ProductCard from "../../components/ProductCard/ProductCard";
const Shop = () => {
    const[search ,setSearch] = useState("");
    const[sort, setSort] = useState("default");
     const[activeCategory, setAcitveCategory] = useState("all");

     let visibleProduct = products.filter((product)=>{
          const matchCategory = activeCategory==="all" || activeCategory === product.category
          const matchSearch = product.title.toLowerCase().includes(search.toLowerCase());
      
          return matchCategory && matchSearch;
     })
     console.log(visibleProduct);
// ****************************************For Sorting**********************************************************
 //shallow copy (sorting လုပ်တဲ့ချိန် ဒီလို copy ကူးပြီး sorting လုပ်တာကောင်းတယ်။ )
     if(sort === 'price-asc'){ 

       visibleProduct = [...visibleProduct].sort((a,b) =>a.price- b.price)

     }else if(sort==='price-desc') {

          visibleProduct = [...visibleProduct].sort((a,b) =>b.price- a.price)

     }else if ( sort === 'rating'){
        visibleProduct = [...visibleProduct].sort((a,b)=>b.rating-a.rating)
     }

  return <section className="section">
              <div className="container">
                  <header className="shop-header">
                     <h1 className="section-title">Shop All Products</h1>
                     <p className="section-subtitle">
                          {visibleProduct.length} products available
                     </p>
                  </header>

{/****************************************Seacrh Input Box**********************************************************/}

                   <div className="shop-toolbar">
                        <input type="text" 
                                value={search}
                                onChange={(event)=>setSearch(event.target.value)}
                                placeholder="Search Products..."
                                className="shop-search"
                        />

{/*******************************************Drop Down****************************************************************/}

                        <select className="shop-sort"
                                  value={sort}
                                  onChange={(event)=>setSort(event.target.value)}>
                            <option value="default">Sort : Default</option>
                            <option value="price-asc">Price : Low to High</option>
                            <option value="price-desc">Price : High to Low</option>
                            <option value="rating">Rating : Higest Rating</option>
                        </select>
                  </div>

{/****************************************Make Active button**********************************************************/}

                   <div className="shop-filters">
                        <button className= {`filter-chip ${activeCategory==="all" ? "active" : ""}`}
                          onClick={()=> setAcitveCategory('all')}>
                          All
                        </button>
                        {
                          categories.map((category)=>{
                           return <button className= {`filter-chip ${activeCategory=== category.id ? "active" : ""}`}
                                key={category.id}
                                onClick={()=> setAcitveCategory(category.id)}>
                                    {category.name}
                            </button>
                          })
                        }
                   </div>

{/*******************************************To Display matched Products************************************************/}
                    {
                      visibleProduct.length === 0 ? (
                        <div className="empty-state">
                          <h3>No Products Fount</h3>
                          <p> Try a different search or category</p>  
                        </div>
                      ) :
                      <div className="grid-products">
                        {
                            visibleProduct.map((product)=>{
                                 return <ProductCard key={product.id} product={product} />     
                            })
                        }
                    </div>
                    }                                
                   </div>
                
         </section>;
};

export default Shop;
