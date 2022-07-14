import axios from "axios";
import React, { useEffect, useState } from "react";
import GlobalStateContext from "./GlobalStateContext";
import { BASE_URL } from "../url";

const GlobalState = (props) => {
  const [caracterName, setCaracterName] = useState([]);
  const [caracter, setCaracter] = useState([]);

  console.log(caracter);

  useEffect(() => {
    getCaracterName();
  }, []);

  useEffect(() => {
    const newList = [];
    caracterName.forEach((item) => {
      axios
        .get(item.url)
        .then((response) => {
          newList.push(response.data);
          if (newList.length === 10) {
            setCaracter(newList);
          }
        })
        .catch((error) => console.log(error.message));
    });
  }, [caracterName]);

  const getCaracterName = () => {
    axios
      .get(`${BASE_URL}/people`)
      .then((response) => setCaracterName(response.data.results))
      .catch((error) => console.log(error.message));
  };

  const data = {caracter, setCaracter}

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
