import React from "react";
import styled from "styled-components";
import axios from "axios";
import Detalhes from "./Detalhes";

const BotaoDeletar = styled.span`
  color: red;
  cursor: pointer;
`;

const axiosConfig = {
  headers: {
    Authorization: "nicole-silva-hooks"
  }
};

class Usuarios extends React.Component {
  state = {
    listaUsuario: [],
    paginaAtual: "listaUsuario",
    userId: "",
    name: ""
  };

  componentDidMount() {
    this.buscarUsuarios();
  }

  buscarUsuarios = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        axiosConfig
      )
      .then(response => {
        this.setState({ listaUsuario: response.data });
      });
  };

  excluirUsuario = userId => {
    if (window.confirm("Tem certeza que deseja apagar o usuário?")) {
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
          axiosConfig
        )
        .then(() => {
          alert("Usuário apagado com sucesso!");
          this.buscarUsuarios();
        })
        .catch(e => {
          alert("Erro ao apagar usuário");
        });
    }
  };

  mudarPagina = userId => {
    if (this.state.paginaAtual === "listaUsuario") {
      this.setState({ paginaAtual: "detalhes", userId: userId });
    } else {
      this.setState({ paginaAtual: "listaUsuario", userId: "" });
    }
  };

  mudarNome = event => {
    const novoNome = event.target.value;

    this.setState({ name: novoNome });
  };

  pesquisaUsuário = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${this}`,
        axiosConfig
      )
      .then(response => {
        this.setState({ listaUsuario: response.data });
      })
      .catch(error => {
        alert("Erro ao criar o usuário");
      });
  };

  render() {
    return (
      <div>
        {this.state.paginaAtual === "listaUsuario" ? (
          <div>
            <ul>
              {this.state.listaUsuario.length === 0 && <div>Carregando...</div>}
              {this.state.listaUsuario.map(user => {
                return (
                  <li>
                    <span onClick={() => this.paginaAtual(user.id)}>
                      {user.name}
                    </span>
                    <BotaoDeletar
                      onClick={() => this.excluirUsuario(user.id)}
                    >
                      X
                    </BotaoDeletar>
                  </li>
                );
              })}
            </ul>
            <hr />
            <h4>Procurar usuário</h4>
            <input
              placeholder="Nome para busca"
              type="text"
              value={this.state.name}
              onChange={this.mudarNome}
            />
            <button onClick={this.pesquisaUsuario}>Salvar</button>
          </div>
        ) : (
          <Detalhes userId={this.state.userId} mudarPagina={this.mudarPagina} />
        )}
      </div>
    );
  }
}

export default Usuarios;