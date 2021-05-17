import React from 'react';
import PropTypes from 'prop-types';

import './form.scss';

const Form = ({ dadName, onInputChange }) => (
  <input
    className="input"
    type="text"
    placeholder="Nom de votre papa"
    value={dadName}
    onChange={onInputChange}
  />
);

Form.propTypes = {
  dadName: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Form;
