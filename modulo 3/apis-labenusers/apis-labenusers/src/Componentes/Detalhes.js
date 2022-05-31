import React from "react";
import styled from "styled-components";
import axios from "axios";

const axiosConfig = {
  headers: {
    Authorization: "nicole-silva-hooks"
  }
};

class Detalhes extends React.Component {
  state = {
    Detalhes: {},
    editarUsuario: "botaoEditar",
    name: "",
    email: ""
  };

  componentDidMount() {
    this.getUserDetail();
  }

  getUserDetail = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${
          this.props.userId
        }`,
        axiosConfig
      )
      .then(response => {
        this.setState({ Detalhes: response.data });
      })
      .catch(err => {
      });
  };

  alterarEdicao = () => {
    if (this.state.editarUsuario === "botaoEditar") {
      this.setState({ editarUsuario: "editarFormulario" });
    } else {
      this.setState({ editarUsuario: "botaoEditar" });
    }
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
    const body = {
      name: this.state.name,
      email: this.state.email
    };

    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${
          this.props.userId
        }`,
        body,
        axiosConfig
      )
      .then(() => {
        this.setState({ name: "", email: "" });
        this.getUserDetail();
        this.changeUserEditionFiel();
        alert(`Usuário ${this.state.name} editado com sucesso!`);
      })
      .catch(error => {
        alert("Erro ao criar o usuário");
      });
  };

  render() {
    const editarUsuario =
      this.state.editarUsuario === "botaoEditar" ? (
        <button onClick={this.changeUserEditionFiel}>Editar usuário</button>
      ) : (
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
          <button onClick={this.criarUsuario}>Salvar</button>
        </div>
      );

    return (
      <div>
        <div>
          <p>{this.state.Detalhes.name}</p>
          <p>{this.state.Detalhes.email}</p>
        </div>
        <div>{editarUsuario}</div>
        <hr />
        <button onClick={this.props.mudarPagina}>
          Voltar para lista de usuários
        </button>
      </div>
    );
  }
}

export default Detalhes;