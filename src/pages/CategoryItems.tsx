import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Product } from "../types";

export function CategoryItems() {
  const [products, setProducts] = useState<Product[]>([]);
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:3010/products?categoryId=${params.id}`)
      .then((resp) => resp.json())
      .then((productsFromServer) => setProducts(productsFromServer));
  }, []);
  return (
    <section className="products-container main-wrapper">
      <ul className="products-container__list">
        {products.map((product) => (
          <li>
            <Link to={`/products/${product.id}`}>
              <article className="product-item">
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
