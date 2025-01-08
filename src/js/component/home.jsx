import React, { useState } from 'react';


function Home() {
  const [color, setColor] = useState("red");

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <div className="traffic-light">
      <div
        className={`light red ${color === 'red' ? 'active' : ''}`}
        onClick={() => changeColor('red')}
      ></div>
      <div
        className={`light yellow ${color === 'yellow' ? 'active' : ''}`}
        onClick={() => changeColor('yellow')}
      ></div>
      <div
        className={`light green ${color === 'green' ? 'active' : ''}`}
        onClick={() => changeColor('green')}
      ></div>

      <button onClick={() => {
        if (color === 'red') setColor('yellow');
        else if (color === 'yellow') setColor('green');
        else setColor('red');
      }}>
        Alternar color
      </button>

      <button onClick={() => alert("¡Has añadido un color púrpura al semáforo!")}>
        Añadir color púrpura
      </button>
    </div>
  );
}



export default Home;
