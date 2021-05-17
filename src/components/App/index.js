// == Import npm
import React, {useState} from 'react';

import Form from 'src/components/Form';
import JokeButton from 'src/components/JokeButton';
import Joke from 'src/components/Joke';

// == Composant
const App = () => {
  const [dadName, setDadName] = useState('Alexandre');
  return (
  <div>
    <input
        // value : j'insère ma donnée dans l'input HTML
        value={dadName}
        // onChange : lors d'une modification dde l'input, je sauvegarde la saisie
        // dans mon state.
        onChange={(event) => {
          setDadName(event.target.value);
        }}
      />
    <Form />
    <JokeButton />
    <Joke />
  </div>
  );
};

// == Export
export default App;
