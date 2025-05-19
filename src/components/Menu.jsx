import Pizza from "./Pizza";
import { pizzaData } from "../data";
function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <section className="pizzas">
        <Pizza
          name={pizzaData[0].name}
          ingredients={pizzaData[0].ingredients}
          photoName={pizzaData[0].photoName}
          price={pizzaData[0].price}
        />
        <Pizza
          name={pizzaData[1].name}
          ingredients={pizzaData[1].ingredients}
          photoName={pizzaData[1].photoName}
          price={pizzaData[1].price}
        />
        <Pizza
          name={pizzaData[2].name}
          ingredients={pizzaData[2].ingredients}
          photoName={pizzaData[2].photoName}
          price={pizzaData[2].price}
        />
        <Pizza
          name={pizzaData[3].name}
          ingredients={pizzaData[3].ingredients}
          photoName={pizzaData[3].photoName}
          price={pizzaData[3].price}
        />
        <Pizza
          name={pizzaData[4].name}
          ingredients={pizzaData[4].ingredients}
          photoName={pizzaData[4].photoName}
          price={pizzaData[4].price}
        />
        <Pizza
          name={pizzaData[5].name}
          ingredients={pizzaData[5].ingredients}
          photoName={pizzaData[5].photoName}
          price={pizzaData[5].price}
        />
      </section>
    </main>
  );
}

export default Menu;
