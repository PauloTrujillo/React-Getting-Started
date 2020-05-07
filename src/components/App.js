import React, { useState } from 'react';

//Importar componentes
//import Elements from './elementos';
export function App({ initialData }) {
  return (
    <div>
      <h1>{initialData.appName}</h1>
      <Hello />
      <br />
      <br />
      <Button />
      <br />
      <br />
    </div>
  );
}

/**
 * Hola Mundo
 */
function Hello() {
  return ('Tabla de cuadrados'); 
}

/**
 * Boton auto incrementable
 */
function Button() {
  const [counter, setCounter] = useState(0);
  return (
    <button onClick={ () => setCounter(counter+1)}>
      {counter + '^2= ' + counter*counter}
    </button>
  );
}


