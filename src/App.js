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
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  //* shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  // handle choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  }

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard key={card.id} card={card} handleChoice={handleChoice} />
        ))}
      </div>
    </div>
  );
}

export default App;
