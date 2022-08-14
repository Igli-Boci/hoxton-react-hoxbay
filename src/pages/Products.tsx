import { useEffect, useState } from "react";

export function Products() {
  const [products, setProducts] = useState([]);

  useEffect (() => {
    fetch('http://localhost:3010/products')
    .then(resp => resp.json())
    .then(productsFromServer => setProducts(productsFromServer))
  }, [])
  return (
    <div>
      <h1>Products</h1>
    </div>
  );
}
