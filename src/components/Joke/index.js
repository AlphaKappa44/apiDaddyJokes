import React from 'react';
import PropTypes from 'prop-types';

const Joke = ({ dadName, joke }) => (
  <div>
    <span>{dadName} :</span>
    {joke}
  </div>
);

Joke.propTypes = {
  dadName: PropTypes.string.isRequired,
  joke: PropTypes.string.isRequired,
};

export default Joke;
