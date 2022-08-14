import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Basket } from "./pages/Basket";
import { Categories } from "./pages/Categories";
import { CategoryItems } from "./pages/CategoryItems";
import { PageNotFound } from "./pages/PageNotFound";
import { ProductDetails } from "./pages/ProductDetails";
import { Products } from "./pages/Products";

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
          <Route index element={<Navigate to="/producsts" />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:id" element={<CategoryItems />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
