import React, { Component, useState } from 'react';

//Clase del componente
class Elementos extends Component {
  /**
   * Render del componente
   */
  render() {
    const [counter, setCounter] = useState(0);
    return <button>{Math.random()}</button>;
  }
}

export default Elementos;
