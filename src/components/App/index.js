// == Import npm
import React, { useEffect, useState } from 'react';
import '../../styles/index.scss';
import Form from 'src/components/Form';
import JokeButton from 'src/components/JokeButton';
import Joke from 'src/components/Joke';
import axios from 'axios';

// == Composant
const App = () => {
  // state qui contient le prénom de notre papa
  const [dadName, setDadName] = useState('');
  // state qui contient la blague
  const [joke, setJoke] = useState('');

  // une fonction pour faire la requete
  const getJokeFromApi = () => {
    axios.get('https://icanhazdadjoke.com/',
      {
        headers: {
          // je veux récupérer ma blague en JSON et pas en HTML ->
          // je dois donc le dire à l'API. Faites pas attention :)
          Accept: 'application/json',
        },
      }).then((response) => {
      // lorsque je récupère ma blague
      // je n'ai plus qu'a la ranger dans mon state
      setJoke(response.data.joke);
    });
  };

  // useEffect avec un tableau vide : appelé au chargement initial du composant App
  useEffect(() => {
    getJokeFromApi();
  }, []); // 2eme param : le tableau de dépendances

  // useEffect avec une dépendance : appelé lorsque une variable change
  // ici, on appelle la fonction, quand la variable "dadName" change.
  useEffect(() => {
    getJokeFromApi();
  }, [dadName]); // 2eme param : le tableau de dépendances

  return (

    <div className="form">
      <h1 className="title"> DADDY's CRAPPY JOKES</h1>
      <Form
        dadName={dadName}
        onInputChange={(event) => {
          setDadName(event.target.value);
        }}
      />
      <JokeButton
        requestJoke={getJokeFromApi}
      />
      {/* Si la blague est définie, je l'affiche */}
      {joke && (
        <Joke
          dadName={dadName}
          joke={joke}
        />
      )}
    </div>
  );
};

// == Export
export default App;
