import { useEffect, useState } from "react";
import "./Categories.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  // navigate
  const navigate = useNavigate();

  // connect api  & navigate
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
  // navigate
  const showCategory = (category) => {
    console.log(`Selected Category: ${category}`);
    // navigate(`/category/${category}`);
    navigate(`/category/${category.toLowerCase()}`);
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
              <button
                type="button"
                class="bg-[#ee526f] text-white px-6 py-2 rounded flex items-center justify-center"
                disabled
              >
                <svg class="mr-3 size-5 animate-spin ..." viewBox="0 0 24 24">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="white"
                    strokeWidth="4"
                    strokeDasharray="30 10"
                  />
                </svg>
                Processing…
              </button>
            )}
          </ul>
        </div>
      </article>
    </section>
  );
}
