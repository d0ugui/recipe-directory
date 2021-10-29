import { useState } from 'react';

import BackCard from './img/cover.png';
import Helmet from './img/helmet.png';
import Potion from './img/potion.png';
import Ring from './img/ring.png';
import Scroll from './img/scroll.png';
import Shield from './img/shield.png';
import Sword from './img/sword.png';

import './App.css';

const cardImages = [
  { src: Helmet },
  { src: Potion },
  { src: Ring },
  { src: Scroll },
  { src: Shield },
  { src: Sword }
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  //* shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  console.log(cards, turns);

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {console.log(cards)}
        {cards.map((card) => (
          <div className="card" key={card.id}>
            <div>
              <img className="front" src={card.src} alt="card Front" />
              <img className="back" src={BackCard} alt="card back" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
