// import { pizzaData } from "../data";

function Pizza({ name, ingredients, price, photoName, soldOut }) {
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`} key={name}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>

        {soldOut ? <span>SOLD OUT</span> : <span>{price}</span>}
      </div>
    </li>
  );
}

export default Pizza;
