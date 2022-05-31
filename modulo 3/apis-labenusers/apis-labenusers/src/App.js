import React from "react";
import TelaUsuario from "./Componentes/TelaUsuario";

class App extends React.Component {
  state = {
    paginaInicial: "login"
  };

  mudarPagina = () => {
    if (this.state.paginaAtual === "login") {
      this.setState({ paginaAtual: "usuarios" });
    } else {
      this.setState({ paginaAtual: "login" });
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.mudarPagina}>Mudar de página</button>
        {this.state.paginaAtual === "login" ? <TelaUsuario /> : <usuarios />}
      </div>
    );
  }
}

export default App;