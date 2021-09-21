import { useEffect, useState } from 'react';
import './App.css';

const INITIAL_DATA = [...Array(15).keys()].map((item, i) => ({
  isActive: false,
  id: i,
}));

export default function App() {
  let [boxes, setBoxes] = useState(INITIAL_DATA);
  let [activeBoxes, setActiveBoxes] = useState([]);

  function handleClick(id) {
    setActiveBoxes((prevState) => {
      if (prevState.length < 2) {
        return [...prevState, id];
      } else {
        return [...prevState.slice(1), id];
      }
    });
  }

  useEffect(() => {
    setBoxes((prevState) => {
      return prevState.map((box) => {
        if (activeBoxes.includes(box.id)) {
          return { ...box, isActive: true };
        }
        return { ...box, isActive: false };
      });
    });
  }, [activeBoxes]);
  return (
    <div className="App">
      <ul>
        {boxes.map((box) => {
          return (
            <li
              key={box.id}
              className={box.isActive ? 'active' : ''}
              onClick={() => handleClick(box.id)}
            >
              {box.id}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
