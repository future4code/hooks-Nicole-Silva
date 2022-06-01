import React from 'react'
import Cadastro from './Componentes/Cadastro';
import Lista from './Componentes/Lista';

class App extends React.Component {
  state = {
    telaAtual: "cadastro"
  }
  irCadastro= () => {
    this.setState({telaAtual: "cadastro"})
  }
  irLista= () => {
    this.setState({telaAtual: "lista"})
  }

  escolhaTela= () => {
    switch (this.state.telaAtual) {
      case "cadastro":
        return <Cadastro irLista={this.irLista}/>      
      case "lista":
        return <Lista irCadastro={this.irCadastro}/>
      default:
        return <p>Página não encontrada.</p>
    }
  }
  render() {
  return (
    <div>
      {this.escolhaTela()}
      </div>
  );
}
}
export default App