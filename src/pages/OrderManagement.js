import React, { useState } from "react";
import "../App.css";

export default function OrderManagement() {
  const [orders, setOrders] = useState([
    { id: 1, item: "Burger", status: "Pending" },
    { id: 2, item: "Pizza", status: "Completed" },
  ]);

  const toggleStatus = (id) => {
    setOrders(
      orders.map((o) =>
        o.id === id ? { ...o, status: o.status === "Pending" ? "Completed" : "Pending" } : o
      )
    );
  };

  return (
    <div className="page-container">
      <h2>Order Management</h2>

      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Status</th>
            <th>Toggle</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((o) => (
            <tr key={o.id}>
              <td>{o.item}</td>
              <td>{o.status}</td>
              <td>
                <button className="toggle" onClick={() => toggleStatus(o.id)}>
                  Change
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
