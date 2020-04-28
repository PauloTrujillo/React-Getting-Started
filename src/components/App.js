import React, { useState } from 'react';

//Importar componentes
//import Elements from './elementos';


export function App({ initialData }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{initialData.appName}</h1>
      Aprendiendo React
      <br />
      <br />
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <br />
      <br />
      <Button />
    </div>
  );
}

/**
 * Muestra un boton
 */
function Button () {
  //const [counter, setCounter] = useState(0);
  return (
    <button>{Math.random()}</button>
  ); 
}









