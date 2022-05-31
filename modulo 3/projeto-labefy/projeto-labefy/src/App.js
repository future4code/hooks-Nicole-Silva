import React from "react";
import "./App.css";
import Playlist from "./Components/Playlist";
import TelaInicial from "./Components/TelaInicial";

export default class App extends React.Component {
  state= {
    telaAtual: "telaInicial"
  }

  irParaInicial = () => {
    this.setState({telaAtual: "telaInicial"})
  }

  irParaPlaylist = () => {
    this.setState({telaAtual: "playlist"})
  }

  escolheTela = () =>{
    switch (this.state.telaAtual) {
      case "telaInicial":
        return <TelaInicial irParaPlaylist= {this.irParaPlaylist}/>
      case "playlist":
        return <Playlist irParaInicial= {this.irParaInicial}/>
      default:
        return <p>Erro! Página não encontrada.</p>
    }
  }

  render() {
    return (
      <div>
        <h1>Labefy</h1>
        {this.escolheTela()}
        </div>
    );
  }
}