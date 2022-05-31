import axios from "axios";
import React from "react";

export default  class Playlists extends React.Component {
    state= {
        listaPlaylists: []
    }

    componentDidMount(){
        this.pegarPlaylists()
    }

    pegarPlaylists = () => {
        const url= "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

        const headers= {
            headers: {
            Authorization: "nicole-silva-hooks"
        }

    }
        axios.get(url, headers)
        .then((response) => {
            this.setState({listaPlaylists: response.data})
        }).catch((error) => {
        })

       
    
    }
    render(){
        const playlists = this.state.listaPlaylists.map((playlist) => {
            return(
                <>
                {playlist.name}
                </>
            )
        })

        return(
            <div>
                <button className="trocardetela" onClick={this.props.irParaInicial}>Ir para Tela Inicial</button>
                <h2 className="subTitulo">Playlists</h2>
                {playlists}
            </div>
        )
    }
}