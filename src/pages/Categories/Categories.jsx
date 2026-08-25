import { categories } from "../../data/products";
import "./Categories.css";
import CategoryCard from "../../components/CategoryCard/CategoryCard";

function Categories() {
  const productCategory = categories.slice(0,6)
  return (
    <section className="section">
      <div className="container">
        <header className="categories-header">
          <h1 className="section-title">Browse Categories</h1>
          <p className="section-subtitle">
            Find the right gear for your needs — from immersive audio to pro-level gaming.
          </p>
        </header>
        <div className="grid-categories">
            {
              productCategory.map((category)=>{
                return <CategoryCard key={category.id} category={category} />
              })
            }
        </div>
      </div>
    </section>
  );
}

export default Categories;


