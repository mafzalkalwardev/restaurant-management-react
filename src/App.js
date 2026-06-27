import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import AdminDashboard from "./pages/AdminDashboard";
import MenuManagement from "./pages/MenuManagement";
import OrderManagement from "./pages/OrderManagement";
import AuditLog from "./pages/AuditLog";
import { useState } from "react";

function App() {
  // Cart state shared across pages
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/menu" element={<MenuManagement />} />
        <Route path="/admin/orders" element={<OrderManagement />} />
        <Route path="/admin/audit" element={<AuditLog />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;