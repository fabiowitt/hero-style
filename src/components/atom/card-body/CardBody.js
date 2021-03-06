import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './CardBody.module.scss';

const CardBody = ({ className, size, children }) => {
  const classes = classNames({
    [css['c-card__body']]: true,
    [css[`c-card__body--${size}`]]: true,
    [className]: !!className
  });

  return <div className={classes}>{children}</div>;
};

CardBody.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['default', 'small']),
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

CardBody.defaultProps = {
  className: '',
  size: 'default',
  children: null
};

export default CardBody;
