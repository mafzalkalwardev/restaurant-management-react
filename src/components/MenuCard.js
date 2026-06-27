import "../styles/MenuCard.css";

export default function MenuCard({ item, addToCart }) {
  return (
    <div className="menu-card">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>${item.price}</p>
      <button className="add" onClick={() => addToCart(item)}>
        Add to Cart
      </button>
    </div>
  );
}
