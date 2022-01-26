import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/index.scss';

const JokeButton = ({ requestJoke }) => (
  <button onClick={requestJoke} className="joke-button" type="button">
    🤪 Dad!? Make me laugh ! 🥳
  </button>
);

JokeButton.propTypes = {
  requestJoke: PropTypes.func.isRequired,
};

export default JokeButton;
