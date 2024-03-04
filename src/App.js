import Navbar from "./components/Navbar";
import CartPage from "./components/cartPage";
import ProductCart from "./components/productCart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CheckOut from "./components/checkOut";
import FilteredProducts from "./components/filteredProducts/FilteredProducts";
// import ProductCard from "./components/filteredProducts/ProductCard";
import Register from './components/loginRegister/register'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ProductCart />}/>
          <Route exact path="/cart" element={<CartPage />}/>
          <Route exact path="/checkOut" element={<CheckOut />}/>
          <Route exact path="/FilteredProducts/:type" element={<FilteredProducts/>}/>
          <Route exact path="/register" element={<Register/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;           