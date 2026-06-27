import React from "react";
import "../App.css";

export default function AuditLog() {
  const logs = [
    { id: 1, action: "Added Pizza", time: "10:20 AM" },
    { id: 2, action: "Order Completed", time: "11:05 AM" },
  ];

  return (
    <div className="page-container">
      <h2>Audit Log</h2>

      <table>
        <thead>
          <tr>
            <th>Action</th>
            <th>Time</th>
          </tr>
        </thead>

        <tbody>
          {logs.map((l) => (
            <tr key={l.id}>
              <td>{l.action}</td>
              <td>{l.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
