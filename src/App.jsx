import { useEffect, useState } from "react";
import "./App.css";
import data from "./data.json";
import bandeiraImage from "./assets/bandeira.png";

function App() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data from JSON file
    setTimeout(() => {
      setCards(data);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="App">
      <div className="title">
        <h1>AJUDE O RS!</h1>
        <img src={bandeiraImage} alt="Bandeira" className="bandeira" />
      </div>
      <div className="card-grid">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <img src={card.image} alt={card.title} />
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <small>
              <b>{`PIX: ${card.pixKey}`}</b>
            </small>
          </div>
        ))}
        {loading && <p>Loading...</p>}
      </div>
    </div>
  );
}

export default App;
