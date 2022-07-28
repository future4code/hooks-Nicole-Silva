import React from "react";
import {Button, Title2} from "./Styled"

const CharacterDetailsPage = (props) => {
  
  return (
    <>
      <Title2>Detalhes do Personagem</Title2>
      <p>{props.url}</p>
      <Button onClick={props.goToListPage}>Voltar para lista de personagens</Button>
      </>
  );
};

export default CharacterDetailsPage;
