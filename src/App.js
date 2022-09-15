import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import Home from "./screen/home";
import Contact from "./screen/contact";
import Faq from "./screen/faq";
import ProductDetails from "./screen/product_details";
import Cart from "./screen/cart";
import CheckOut from "./screen/checkout";
import Registration from "./screen/register_login";
import CategoryDetail from "./screen/category_details";

function App() {
  return (
     <BrowserRouter>
        <Routes   basename=''>
          <Route path="techno_store/home" element={<Home/>}/>
          <Route path="techno_store/contact" element={<Contact/>}/>
          <Route path="techno_store/faq" element={<Faq/>}/>
          <Route path="techno_store/product_details" element={<ProductDetails/>}/>
          <Route path="techno_store/shop_cart" element={<Cart/>}/>
          <Route path="techno_store/shop_checkout" element={<CheckOut/>}/>
          <Route path="techno_store/registration" element={<Registration/>}/>
          <Route path="techno_store/category_details" element={<CategoryDetail/>}/>
        </Routes>
      </BrowserRouter>

  );
}

export default App;
