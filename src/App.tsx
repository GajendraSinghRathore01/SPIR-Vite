// App.tsx
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import MainLayout from "./pages/Layout/MainLayout";
import Home from "./pages/navBarPages/Home";
import IndustrialSolution from "./pages/sideBarPages/IndustrialSloution";
import Products from "./pages/sideBarPages/industrialSolution/Products";
import ProductDetail from "./pages/sideBarPages/industrialSolution/ProductDetail";
import ComingSoon from "./common/ComingSoon";
import Schemes from "./pages/navBarPages/Schemes";
import Protected from "./common/Protected";
import NotFound from "./common/NotFound";
import Membership from "./pages/sideBarPages/Membership";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<Protected />}>
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/IndustrialSolution" element={< IndustrialSolution/>} />
          <Route path="/products" element={<Products />} />
          <Route path="/industryDocumentary" element={<ProductDetail />} />
          <Route path="/comingSoon" element={<ComingSoon/>} />
          <Route path="/schemes" element={<Schemes />} />
          <Route path="/membership" element={<Membership />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
