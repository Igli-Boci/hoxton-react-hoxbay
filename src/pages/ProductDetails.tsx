import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Product } from "../types";

export function ProductDetails() {
  const [product, setProduct] = useState<Product | null>(null);
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:3010/products/${params.id}`)
      .then((resp) => resp.json())
      .then((productFromServer) => setProduct(productFromServer));
  }, []);

  const navigate = useNavigate();

  if (product === null) return <h2>Loading...</h2>;

  return (
    <section className="product-detail main-wrapper">
      <img src={product.image} alt={product.title} />
      <div
        className="product-detail__side"
        style={{ borderColor: "var(--yellow)" }}
      >
        <h3></h3>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>£{product.price}</p>
        <button
          onClick={() => {
            fetch(`http://localhost:3010/basket?productId=${product.id}`)
              .then((resp) => resp.json())
              .then((results) => {
                if (results.length === 0) {
                  fetch(`http://localhost:3010/basket`, {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      productId: product.id,
                      quantity: 1,
                    }),
                  });
                } else {
                  fetch(`http://localhost:3010/basket/${results[0].id}`, {
                    method: "PATCH",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ quantity: results[0].quantity + 1 }),
                  });
                }
              })
              .then(() => {
                navigate("/basket");
              });
          }}
        >
          Add to basket
        </button>
      </div>
    </section>
  );
}
