import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-flexbox-grid';

import css from './FormRow.module.scss';

const FormRow = props => {
  return <Row {...props} className={css['c-form-row']}>
    {props.children}
  </Row>;
};

FormRow.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object
  ]).isRequired
};

export default FormRow;
