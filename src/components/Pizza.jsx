// import { pizzaData } from "../data";

function Pizza({ name, ingredients, price, photoName }) {
  return (
    <article className="pizza">
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <p>{price}</p>
      </div>
    </article>
  );
}

export default Pizza;
