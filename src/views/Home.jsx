import PropTypes from "prop-types";
import { usePizzaContext } from "../context/PizzaContext";
import Card from "../components/Card/Card";

const Home = ({ pizzas }) => {
  if (!pizzas) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <header>
        <h1><span>Pizzaría Mamma Mía!!</span></h1>
        <h5>¡¡ Tenemos las mejores pizzas que podrás encontrar !!</h5>
     </header>

      <main>
        <div className="menu-grid">
          {pizzas.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      </main>
    </>
  );
};

Home.propTypes = {
  pizzas: PropTypes.array,
};

export default () => {
  const { pizzas } = usePizzaContext();
  return <Home pizzas={pizzas} />;
};
