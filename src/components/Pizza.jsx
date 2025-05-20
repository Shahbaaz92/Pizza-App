// import { pizzaData } from "../data";

function Pizza({ name, ingredients, price, photoName, soldOut }) {
  return (
    <li className={soldOut ? "pizza sold-out" : "pizza"} key={name}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <p>{price}</p>
      </div>
    </li>
  );
}

export default Pizza;
