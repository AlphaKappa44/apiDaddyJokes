// == Import npm
import React, { useState } from 'react';

import Form from 'src/components/Form';
import JokeButton from 'src/components/JokeButton';
import Joke from 'src/components/Joke';

// == Composant
const App = () => {
  const [dadName, setDadName] = useState('Alexandre');
  // const [joke, setJoke] = useState("blague");
  const [joke, setJoke] = useState(null);


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
        joke={joke}
      />
    </div>
  );
};

// == Export
export default App;
