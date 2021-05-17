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
      <Joke />
    </div>
  );
};

// == Export
export default App;
