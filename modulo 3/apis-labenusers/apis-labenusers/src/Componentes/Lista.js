import React from "react";
import axios, {Axios} from "axios";
import styled from "styled-components"

const CardUsuario = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 300px;
    display: flex;
    justify-content: space-between;
`

class Lista extends React.Component {
    state = {
        lista: []
    }

    componentDidMount(){
        this.pegar()
    }

    pegar = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        const headers = {
            headers:{
                Authorization: "nicole-silva-hooks"
            }
        }
        axios.get(url, headers)
            .then((response) =>{
                this.setState({lista: response.data})
            }).catch((error)=>{
                alert("Algo deu errado")
            })
    }

    deletar = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`

        const headers = {
            headers:{
                Authorization: "nicole-silva-hooks"
            }
    }

    axios.delete(url, headers)
        .then((response) =>{
            alert("Usuário deletado com sucesso")
            this.pegar()
        }).catch((error)=>{
            alert(error.response.data.message)
        })

}
    render() {
        const usuario = this.state.lista.map((usuario)=> {
            return(
                <CardUsuario key={usuario.id}>
                    {usuario.name}
                    <button onClick={() => this.deletar(usuario.id)}>Deletar</button>
                </CardUsuario>
            )
        })
        return(
            <div>
                <button onClick={this.props.irCadastro}>Ir para Cadastro</button>
                <h2>Lista</h2>
                {usuario}
            </div>
        )
    }
}
export default Lista;