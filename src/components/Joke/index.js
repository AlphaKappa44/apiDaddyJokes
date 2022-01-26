import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/index.scss';

const Joke = ({ dadName, joke }) => (
  <div className="joke-container">
    <h2> {dadName}  </h2>
    <span> 👉🏻 👉🏿 </span>
    {joke}
    <span> 🤡 🤦🏽‍♀️ </span>
  </div>
);

Joke.propTypes = {
  dadName: PropTypes.string.isRequired,
  joke: PropTypes.string.isRequired,
};

export default Joke;
