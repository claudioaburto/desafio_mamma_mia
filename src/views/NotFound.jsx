import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const irAlHome = () => {
    navigate("/");
  };

  return (
    <main>
      <section className="not-found card card-body">
        <img
          src="https://st4.depositphotos.com/13720266/39500/i/450/depositphotos_395000458-stock-photo-delicious-appetizing-pizza-form-sad.jpg"
          alt="sad"
          aria-hidden="true"
        />
        <div>
          <h3>La página que buscas no existe</h3>
          <br />
          <button onClick={irAlHome} className="btn">
            Volver al Home
          </button>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
