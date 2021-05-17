import React from 'react';
import PropTypes from 'prop-types';

import './jokebutton.scss';

const JokeButton = ({ requestJoke }) => (
  <button onClick={requestJoke} className="joke-button" type="button">
    Papa, raconte moi une blague !
  </button>
);

JokeButton.propTypes = {
  requestJoke: PropTypes.func.isRequired,
};

export default JokeButton;
