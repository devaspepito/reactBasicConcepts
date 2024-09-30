import { useState } from "react";
import "./Counter.css";

export const Contador = () => {
  const [contador, setContador] = useState(0);

  const mas = () => {
    setContador(contador + 1);
  };

  const menos = () => {
    setContador(contador - 1);
  };

  return (
    <div className="container">
      <div className="counterContain">
        <button onClick={menos}>-</button>
        <h1 className="counter">Contador: {contador}</h1>
        <button onClick={mas}>+</button>
      </div>
    </div>
  );
};
