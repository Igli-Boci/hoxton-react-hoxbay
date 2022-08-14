import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRandomColor } from "../helpers";
import { Category } from "../types";

export function Categories() {
  const [categories, setCategories] = useState<Category>([]);

  useEffect(() => {
    fetch("http://localhost:3010/categories")
      .then((resp) => resp.json())
      .then((categoriesFromServer) => setCategories(categoriesFromServer));
  }, []);

  return (
    <section className="categories-container main-wrapper">
      <ul className="categories-container__list">
        {categories.map((category) => (
          <li style={{ backgroundColor: getRandomColor() }}>
            <Link to={`/categories/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
