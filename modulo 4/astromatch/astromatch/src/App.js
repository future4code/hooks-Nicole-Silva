import axios from 'axios';
import React, {useState, useEffect} from 'react';

const App = () => {
  const[like, setLike] = useState();
  const[dislike, setDislike] = useState()


  useEffect(() => {
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person')
    .then(response => {
      setLike(response.data.results);
    })
    .catch(err => {
      alert(err)
    });
  }, [])

  const changeLike = (event) => {
    setLike(event.target.value);
  }
  return(
    <div className="App">
    <p>Astro Match</p>
    <select onChange={changeLike}>
      <option value={"like"}></option>
          {like.map((usuario) => {
            return (
              <option key={usuario.name} value={usuario.name}>
                {usuario.name}
              </option>
            );
          })}
        </select>

        {like && <likeCard usuario ={like} />}
        </div>
  )
}

export default App;
