import React, { useState } from 'react';

//Importar componentes
//import Elements from './elementos';
export function App() {
  const [counter, setCounter] = useState(1);
  return (
    <div>
      <Titulo />
      <Button onClickFunction={ () => setCounter(counter + 1) }/>
      <Display message={counter}/>
    </div>
  );
}

/**
 * Boton auto incrementable
 */
function Button(props) {
  //const handleClick = () => setCounter(counter+1);
  return (
    <button onClick={ props.onClickFunction }>
      +1
    </button>
  );
}

/**
 * Retorna mensaje con variable incremental
 * @param {*} props 
 */
function Display(props) {
  return (
    <p>{props.message}</p>
  );
}

/**
 * Retorna titulo del programa
 */
function Titulo() {
  return (
    <p>Learning React</p>
  );
}


