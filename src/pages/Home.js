import "../App.css";

export default function Home() {
  return (
    <div className="page-container">
      <h1>Welcome to Fast Ease Restaurant</h1>
      <p style={{ fontSize: "18px" }}>
        Order your favorite meals, manage restaurant operations, and track everything easily.
      </p>

      <img 
        src="/images/restaurant.jpg" 
        alt="Restaurant" 
        style={{
          width: "100%",
          borderRadius: "15px",
          marginTop: "20px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
        }}
      />
    </div>
  );
}
