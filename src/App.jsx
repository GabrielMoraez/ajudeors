import { useEffect, useState } from "react";
import data from "./data.json";
import bandeiraImage from "./assets/bandeira.png";
import Card from "./components/Card/Card";

import "./App.scss";

function App() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setCards(data);
      setLoading(false);
    }, 1000);
  }, []);

  const [phrases, setPhrases] = useState([
    "São mais de 232.000 pessoas desabrigadas",
    "São mais de 1.4 milhão de pessoas afetadas",
    "425 cidades atingidas até agora",
  ]);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentPhrase, setCurrentPhrase] = useState("");
  const [currentPhraseLength, setCurrentPhraseLength] = useState(0);

  // Function to type out the current phrase
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentPhraseLength < phrases[currentPhraseIndex].length) {
        setCurrentPhrase(
          (prevPhrase) =>
            prevPhrase + phrases[currentPhraseIndex].charAt(currentPhraseLength)
        );
        setCurrentPhraseLength((prevLength) => prevLength + 1);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setCurrentPhrase("");
          setCurrentPhraseLength(0);
          setCurrentPhraseIndex((prevIndex) =>
            prevIndex === phrases.length - 1 ? 0 : prevIndex + 1
          );
        }, 2000); // Pause before typing the next phrase
      }
    }, 100); // Typing speed (milliseconds per letter)

    return () => clearInterval(interval);
  }, [currentPhrase, currentPhraseLength, currentPhraseIndex, phrases]);

  return (
    <div className="App">
      <div className="hero">
        <div className="hero__header">
          <h1 className="hero__title">Ajude o RS</h1>
          <p className="hero__subtitle">
            <span>{currentPhrase}</span>
          </p>
        </div>
        <p className="hero__description">
          Este site reune opções de instituições que estão prestando socorro às
          vitimas das enchentes no Rio Grande do Sul. Escolha as causas que você
          quer apoiar e ajude quem está precisando.
        </p>
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
