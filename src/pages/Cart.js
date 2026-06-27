import React from "react";
import "../App.css";
import "../styles/Cart.css";

export default function Cart({ cart, removeFromCart }) {
  const totalPrice = cart.reduce((t, i) => t + i.price, 0);

  return (
    <div className="page-container">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {cart.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>
                  <button className="delete" onClick={() => removeFromCart(index)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}

            <tr>
              <td><strong>Total</strong></td>
              <td><strong>${totalPrice}</strong></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}
