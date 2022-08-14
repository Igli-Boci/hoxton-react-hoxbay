import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        {/*   
          /products
          /products/:id
          /categories/:id
          /basket
        */}

        <Routes>
          <Route path="/products" element={<h1>Products</h1>} />
          <Route path="/products/:id" element={<h1>Product id</h1>} />
          <Route path="/categories" element={<h1>Categories</h1>} />
          <Route path="/categories/:id" element={<h1>Category id</h1>} />
          <Route path="/basket" element={<h1>Basket</h1>} />
          <Route path="*" element={<h1>Page not found!</h1>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
