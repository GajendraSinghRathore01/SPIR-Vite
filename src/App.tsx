// App.tsx
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import MainLayout from "./pages/Layout/MainLayout";
import LandingPage from "./pages/LandingPage";
import Category from "./pages/Category";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductsDetail";
import Error from "./pages/ComminSoon";
import Schemes from "./pages/footerPages/Schemes";
import Protected from "./common/Protected";
import NotFound from "./common/NotFound";
import Membership from "./pages/Membership";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<Protected />}>
        <Route element={<MainLayout />}>
          <Route path="/home" element={<LandingPage />} />
          <Route path="/category" element={<Category />} />
          <Route path="/products" element={<Products />} />
          <Route path="/industrydocumentry" element={<ProductDetail />} />
          <Route path="/comingsoon" element={<Error />} />
          <Route path="/schemes" element={<Schemes />} />
          <Route path="/membership" element={<Membership />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
