import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/url";
import {CharacterCard, Title} from "./Styled"

const CharacterListPage = (props) => {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    getCharacterList()
  }, [])

  function getCharacterList() {
    axios
      .get(`${BASE_URL}/people/`)
      .then((response) =>
        setCharacterList(response.data.results))
      .catch((error) =>
        console.log(error.message))
  }

  const showCharacters = () => {
    return characterList.map((character, index) => {
        return <CharacterCard onClick={() => props.goToDetailsPage(character.url)} key={index}>{character.name}</CharacterCard>
    })
  }  

  return (
    <div>
      <Title>Lista de Personagens</Title>
      {showCharacters()}
    </div>
  );
};

export default CharacterListPage;
