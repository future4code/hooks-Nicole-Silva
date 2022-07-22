import React, { useState } from "react";
import Header from "./componentes/Header/Header";
import CharacterDetailsPage from "./Pages/CharacterDetailsPage/CharacterDetailsPage";
import CharacterListPage from "./Pages/CharacterListPage/CharacterListPage";

const App = () => {
  const [currentPage, setCurrentPage] = useState("list");
  const [detailsUrl, setDetailsUrl] = useState("");

  function goToDetailsPage(url) {
    setCurrentPage("details");
    setDetailsUrl(url);
  }

  function goToListPage() {
    setCurrentPage("list");
  }

  function selectPage() {
    if (currentPage === "list") {
      return <CharacterListPage goToDetailsPage={goToDetailsPage} />;
    } else {
      return (
        <CharacterDetailsPage goToListPage={goToListPage} url={detailsUrl} />
      );
    }
  }
  return (
    <div>
      <Header />
      {selectPage()}
    </div>
  );
};

export default App;
