import React, { useState, useEffect } from "react";
import { Button, Title2, Title3 } from "./Styled";
import { getCharacterDetails, getPlanetDetails } from "../../services/request";

const CharacterDetailsPage = (props) => {
  const [details, setDetails] = useState({});
  const [planet, setPlanet] = useState({});

  useEffect(() => {
    getCharacterDetails(props.url, setDetails);
  }, [props.url]);

  useEffect(() => {
    getPlanetDetails(details.homeworld, setPlanet);
  }, [details.homeworld]);

  return (
    <>
      <Title2>Detalhes do Personagem</Title2>
      {details.name && planet.name ?
        <Title3>
          <p>Nome: {details.name}</p>
          <p>Planeta de origem: {planet.name}</p>
        </Title3> : (
        <></>
      )}
      <Button onClick={props.goToListPage}>
        Voltar para lista de personagens
      </Button>
    </>
  );

        }


export default CharacterDetailsPage;
