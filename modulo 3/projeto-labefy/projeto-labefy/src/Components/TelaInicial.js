import axios from "axios";
import React from "react";

export default class TelaInicial extends React.Component {
    state= {
        nomeDaPlaylist: ""
    }

    handleNome = (event) => {
        this.setState({nomeDaPlaylist: event.target.value})
    }

    criarPlaylist= () =>{
        const url= "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

        const body= {
            name: this.state.nomeDaPlaylist
        }

        const headers = {
            headers: {
                Authorization: "nicole-silva-hooks"
            }
        }
        
        axios.post(url, body, headers)
        .then((response) => {
            alert("Playlist criada com sucesso")
            this.setState({nomeDaPlaylist: ""})
        }).catch((error) =>{
            alert("Erro ao cadastrar Playlist")
            this.setState({nomeDaPlaylist: ""})
        })
    }
    
    render() {
        return(
            <div>
                <><button className="trocardetela" onClick={this.props.irParaPlaylist}>Ir para Playlist</button></>
                <h2 className="subTitulo">Adicionar Playlist</h2>
                <input className="addPlaylist" 
                placeholder="Nome da Playlist"
                value={this.state.nomeDaPlaylist}
                onChange={this.handleNome}/>
                <button className="salvar" onClick={this.criarPlaylist}>Salvar</button>
            </div>
        )

    }
}