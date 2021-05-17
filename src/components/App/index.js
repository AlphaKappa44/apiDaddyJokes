// == Import npm
import React, { useState } from 'react';

import Form from 'src/components/Form';
import JokeButton from 'src/components/JokeButton';
import Joke from 'src/components/Joke';

// == Composant
const App = () => {
  const [dadName, setDadName] = useState('Alexandre');

  return (
    <div>
      <Form
        dadName={dadName}
        onInputChange={(event) => {
          setDadName(event.target.value);
        }}
      />
      <JokeButton />
      <Joke
        dadName={dadName}
        joke="Did you hear about the cheese factory that exploded in France? There was nothing left but de Brie."
      />
    </div>
  );
};

// == Export
export default App;
