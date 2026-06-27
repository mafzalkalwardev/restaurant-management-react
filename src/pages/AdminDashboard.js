import { Link } from "react-router-dom";
import "../App.css";

export default function AdminDashboard() {
  return (
    <div className="page-container">
      <h2>Admin Dashboard</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <Link to="/admin/menu"><button className="add">Menu Management</button></Link>
        <Link to="/admin/orders"><button className="add">Order Management</button></Link>
        <Link to="/admin/audit"><button className="add">Audit Log</button></Link>
      </div>
    </div>
  );
}
