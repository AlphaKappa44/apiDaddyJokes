// == Import npm
import React, { useEffect, useState } from 'react';

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

  // useEffect avec un tableau vide : appelé au chargement initial du composant.
  useEffect(() => {
    
  }, []); // 2eme param : le tableau de dépendances

  return (
    <div>
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

