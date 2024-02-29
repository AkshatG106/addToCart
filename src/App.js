import Navbar from "./components/Navbar";
import CartPage from "./components/cartPage";
import ProductCart from "./components/productCart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CheckOut from "./components/checkOut";
import WishList from "./components/wishList";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ProductCart />}/>
          <Route exact path="/cart" element={<CartPage />}/>
          <Route exact path="/checkOut" element={<CheckOut />}/>
          <Route exact path="/wishlist" element={<WishList/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
