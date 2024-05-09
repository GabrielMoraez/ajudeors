import { useEffect, useState } from "react";
import "./App.css";
import data from "./data.json";
import bandeiraImage from "./assets/bandeira.png";
import Card from "./components/Card/Card";

function App() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
          <Card campaing={card} key={card.id} />
        ))}
        {loading && <p>Loading...</p>}
      </div>
    </div>
  );
}

export default App;
