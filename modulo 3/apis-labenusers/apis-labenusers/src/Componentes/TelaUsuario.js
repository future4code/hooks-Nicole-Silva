import React from "react";
import axios from "axios";

class TelaUsuario extends React.Component {
  state = {
    name: "",
    email: ""
  };

  mudarNome = event => {
    const novoNome = event.target.value;

    this.setState({ name: novoNome });
  };

  mudarEmail = event => {
    const novoEmail = event.target.value;

    this.setState({ email: novoEmail });
  };

  criarUsuario = () => {
    const axiosConfig = {
      headers: {
        Authorization: "nicole-silva-hooks"
      }
    };

    const body = {
      name: this.state.name,
      email: this.state.email
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        axiosConfig
      )
      .then(() => {
        alert(`Usuário ${this.state.name} criado com sucesso!`);
        this.setState({ name: "", email: "" });
      })
      .catch(error => {
        alert("Erro ao criar o usuário");
      });
  };

  render() {
    return (
      <div>
        <input
          placeholder="Nome"
          type="text"
          value={this.state.name}
          onChange={this.mudarNome}
        />
        <input
          placeholder="E-mail"
          type="email"
          value={this.state.email}
          onChange={this.mudarEmail}
        />
        <button onClick={this.criarUsuario}>Novo Usuário</button>
      </div>
    );
  }
}

export default TelaUsuario;