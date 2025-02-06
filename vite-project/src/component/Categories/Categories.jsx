import { useEffect, useState } from "react";
import "./Categories.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4050/user/get/categories"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategory();
  }, []);

  const showCategory = (category) => {
     console.log(`Selected Category: ${category}`);
    navigate(`/category/${category}`);
  };

  return (
    <section className="main">
      <article className="background-color">
        <div className="categories">
          <h2 className="categories-heading">CATEGORIES</h2>
          <hr className="heading-line" />
          <ul className="categories-list">
            {categories.length > 0 ? (
              categories.map((category, index) => (
                <li key={index}>
                  <button
                    className="category-btn"
                    onClick={() => showCategory(category.name)}
                  >
                    {category.name}
                  </button>
                </li>
              ))
            ) : (
              <p>Loading categories...</p>
            )}
          </ul>
        </div>
      </article>
    </section>
  );
}
