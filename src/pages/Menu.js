import React, { useState } from "react";
import MenuCard from "../components/MenuCard";
import "../styles/Menu.css";
import "../App.css";

export default function Menu({ addToCart }) {
  const [menuItems] = useState([
    { id: 1, name: "Burger", price: 5, image: "/images/burger.jpg" },
    { id: 2, name: "Pizza", price: 8, image: "/images/pizza.jpg" },
    { id: 3, name: "Pasta", price: 7, image: "/images/pasta.jpg" },
    { id: 4, name: "Fries", price: 3, image: "/images/fries.jpg" },
  ]);

  return (
    <div className="page-container">
      <h2>Our Menu</h2>

      <div className="menu-grid">
        {menuItems.map((item) => (
          <MenuCard key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
