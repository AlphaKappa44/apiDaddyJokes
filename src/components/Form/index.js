import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/index.scss';

const Form = ({ dadName, onInputChange }) => (
  <input
    className="input"
    type="text"
    placeholder="🤘🏼 Your Daddy's name here 🥸💬🤘🏾"
    value={dadName}
    onChange={onInputChange}
  />
);

Form.propTypes = {
  dadName: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Form;
