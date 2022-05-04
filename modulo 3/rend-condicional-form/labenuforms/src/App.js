import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Etapa1} from "./components/Etapa1";
import {Etapa2} from "./components/Etapa2";
import {Etapa3} from "./components/Etapa3";
import {Final} from "./components/Final";

class App extends React.Component {
  state={
    step:1
  }
  nextbutton= () => {this.setState({step: this.state.step +1});
}

renderizarEtapas = () => {
  switch (this.state.step) {
  case 1 :
    return <Etapa1/>
  case 2 :
    return <Etapa2/>
  case 3 :
    return <Etapa3/>
  case 4:
    return <Final/>
  default: 
    return <Final/>
}
}

render () {
  return (
    <div className="App">
      {this.renderizarEtapas()}
      <button onClick={(this.nextbutton)}>Proxima Etapa </button>
</div>
  )
}
}
export default App
