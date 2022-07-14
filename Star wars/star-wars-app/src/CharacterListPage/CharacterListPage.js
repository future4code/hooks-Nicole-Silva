import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import GlobalStateContext from "../componentes/Global/GlobalStateContext";
import GlobalState from "../componentes/Global/GlobalState";
import "./CharacterListPage.css";

const CharacterListPage = () => {
  const {caracter} = useContext(GlobalStateContext);
  const history = useHistory();

  return (

    <><h1 className="Topo">Lista de Personagens</h1>
    
    <ul className="Lista">
      {caracter.map(nome => {
        return (
          <li key={nome.name}>
            <strong>{nome.name}</strong>

          </li>
        );
      })}
    </ul></>
  )
};
export default CharacterListPage;
