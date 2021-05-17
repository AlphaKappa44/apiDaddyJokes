// == Import npm
import React, { useState } from 'react';

import Form from 'src/components/Form';
import JokeButton from 'src/components/JokeButton';
import Joke from 'src/components/Joke';

// == Composant
const App = () => {
  // state qui contient le prénom de notre papa
  const [dadName, setDadName] = useState('');
  // state qui contient la blague
  const [joke, setJoke] = useState('');

  return (
    <div>
      <Form
        dadName={dadName}
        onInputChange={(event) => {
          setDadName(event.target.value);
        }}
      />
      <JokeButton
        requestJoke={() => {
          setJoke("C'est l'histoire du ptit dej, tu la connais ? Pas de bol.");
        }}
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
