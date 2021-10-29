import { useState } from 'react';

import Helmet from './img/helmet.png';
import Potion from './img/potion.png';
import Ring from './img/ring.png';
import Scroll from './img/scroll.png';
import Shield from './img/shield.png';
import Sword from './img/sword.png';

import './App.css';
import { SingleCard } from './components/SingleCard';

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
        {cards.map((card) => (
          <SingleCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

export default App;
