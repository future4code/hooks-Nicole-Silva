import axios from "axios";
import React from "react";

class Cadastro extends React.Component {
    state = {
        nome: "",
        email: ""
    }

    handleNome = (event) => {
        this.setState({nome: event.target.value})
    }

    handleEmail = (event) => {
        this.setState({email: event.target.value})
    }

    cadastrar = ()  => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        
        const body = {
            name: this.state.nome,
            email: this.state.email
        }

        const headers = {
            headers: {
                Authorization: "nicole-silva-hooks"
            }
        }

        axios.post(url, body, headers)
        .then((response)=>{  
            alert("Usuário criado com sucesso")
            this.setState({nome: "", email: ""})
        }).catch((error)=>{
            alert("Erro! Nome ou email já cadastrado")
            this.setState({nome: "", email: ""})
        })
    }
    render(){
        return(
            <div>
                <button onClick={this.props.irLista}>Ir para Lista</button>
                <h2>Cadastro</h2>
                <input 
                    placeholder="Nome"
                    value={this.state.nome}
                    onChange={this.handleNome}
                />
                <input 
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleEmail}
                />
                <button onClick={this.cadastrar}>Cadastrar</button>
            </div>
        )
    }
}
export default Cadastro;