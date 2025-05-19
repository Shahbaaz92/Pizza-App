import Pizza from "./Pizza";
function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <section className="pizzas">
        <Pizza />
        <Pizza />
        <Pizza />
        <Pizza />
        <Pizza />
        <Pizza />
      </section>
    </main>
  );
}

export default Menu;
