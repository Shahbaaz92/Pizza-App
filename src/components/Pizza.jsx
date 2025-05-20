// import { pizzaData } from "../data";

function Pizza({ key, name, ingredients, price, photoName }) {
  return (
    <li className="pizza" key={key}>
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
