import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CharacterDetailPage from "../CharacterDetailPage/CharacterDetailPage";
import CharacterListPage from "../CharacterListPage/CharacterListPage";
import ErrorPage from "../componentes/ErrorPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <CharacterListPage />
        </Route>
        <Route exact path="/detalhes/:name">
          <CharacterDetailPage />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
