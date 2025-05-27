import { Route, Routes } from "react-router-dom";
import Category from "./pages/Category"
import ProductDetail from "./pages/ProductDetail";
import LandingPage from "./pages/LandingPage";
import Products from "./pages/Products";
import HeaderNavbar from "./common/HeaderNavbar";
import Footer from "./common/Footer";

function App() {
 
  return (
    <>

      <HeaderNavbar/>
        <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/category" element={<Category/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/productdetail" element={<ProductDetail/>} />
    </Routes>
    <Footer/>
    
    </>
  )
}


export default App
