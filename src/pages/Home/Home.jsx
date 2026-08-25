import { Link } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import {products} from "../../data/products";
import ArrowRightIcon from "../../assets/icons/ArrowRightIcon"
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Home.css"
import { categories } from "../../data/products";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
const Home = () => {
    const featuredProducts = products.slice(0,4);
    const newArrivalProducts = products.slice(4,8);
    const categorie = categories.slice(0,4);
   


     console.log(featuredProducts)
  return <div>
            <Hero />   


{/***********************************Featured Products*************************************/}
            <section className="section">
                <div className="container">
                    <div className="section-head">
                        <div>
                            <h2 className="section-title">Featured Products</h2>
                            <p className="section-subtitle">
                                Hand-picked best sellers this week.
                            </p>
                        </div>
                        <Link to="/shop" className="link-accent">
                            View All <ArrowRightIcon />
                        </Link>
                    </div>
                    <div className="grid-products">
                        {
                            featuredProducts.map((product)=>{
                                 return <ProductCard key={product.id} product={product} />     
                            })
                        }
                    </div>
                </div>
            </section>

{/***********************************Shop by Category*************************************/}
            <section className="section">
                <div className="container">
                    <div className="section-head">
                        <div>
                            <h2 className="section-title">Shop by Category</h2>
                            <p className="section-subtitle">
                                Find exactly what you're looking for.
                            </p>
                        </div>
                        <Link to="/categories" className="link-accent">
                             All categories <ArrowRightIcon />
                        </Link>
                    </div>
                    <div className="grid-categories-preview">
                        {
                            categorie.map(( category)=>{
                                 return <CategoryCard key={ category.id} category={category} />     
                            })
                        }
                    </div>
                </div>
            </section>

{/***********************************New Arrivals*************************************/}
              <section className="section">
                <div className="container">
                    <div className="section-head">
                        <div>
                            <h2 className="section-title">New Arrivals</h2>
                            <p className="section-subtitle">
                              Fresh drops from our latest collection.
                            </p>
                        </div>
                        {/* <Link to="/shop" className="link-accent">
                            View All <ArrowRightIcon />
                        </Link> */}
                    </div>
                    <div className="grid-products">
                        {
                            newArrivalProducts.map((product)=>{
                                 return <ProductCard key={product.id} product={product} />     
                            })
                        }
                    </div>
                </div>
            </section>
       
        </div>;
};

export default Home;
