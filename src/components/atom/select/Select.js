import React from 'react';
import PropTypes from 'prop-types';
import RSelect from 'react-select';

import classNames from 'classnames';
import css from './Select.module.scss';

const Select = ({
  dark,
  firstMessage,
  id,
  multiple,
  name,
  onChange,
  noOptionsMessage,
  options,
  placeholder,
  searchable,
  value,
  small,
  icon,
  ...otherProps
}) => {
  let selectClass = 'c-select';

  if (icon && !small && !dark) {
    selectClass = selectClass.concat('--with-icon');
  } else if (icon && small) {
    selectClass = selectClass.concat('--with-icon--small');
  } else if (dark && !small) {
    selectClass = selectClass.concat('--dark');
  } else if (!dark && small) {
    selectClass = selectClass.concat('--small');
  } else if (small && dark) {
    selectClass = selectClass.concat('--small-dark');
  } else {
    selectClass = selectClass.concat('--default');
  }

  const allProps = {
    backspaceRemoves: true,
    inputId: id || name,
    className: css[selectClass],
    classNamePrefix: selectClass,
    deleteRemoves: true,
    isMulti: multiple,
    isSearchable: searchable,
    value,
    name,
    options,
    onChange,
    placeholder,
    noOptionsMessage: ({ inputValue }) =>
      inputValue && inputValue.length ? noOptionsMessage() : firstMessage(),
    ...otherProps
  };

  const classesWrapper = classNames({
    [css['c-select-wrapper']]: true,
    [css['c-select-wrapper__icon']]: !!icon,
    [css['c-select-wrapper__icon--small']]: !!small
  });

  return (
    <div className={classesWrapper}>
      {icon || null}
      <RSelect {...allProps} />
    </div>
  );
};

Select.propTypes = {
  dark: PropTypes.bool,
  firstMessage: PropTypes.func,
  id: PropTypes.string,
  icon: PropTypes.instanceOf(Object),
  multiple: PropTypes.bool,
  name: PropTypes.string,
  noOptionsMessage: PropTypes.func,
  onChange: PropTypes.func,
  options: PropTypes.instanceOf(Array),
  placeholder: PropTypes.string,
  small: PropTypes.bool,
  searchable: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string,
    PropTypes.number
  ])
};

Select.defaultProps = {
  dark: false,
  id: null,
  icon: null,
  firstMessage: () => 'Digite para buscar',
  multiple: false,
  name: null,
  noOptionsMessage: () => 'Nenhuma opção',
  onChange: f => f,
  options: null,
  placeholder: 'Selecionar',
  small: false,
  searchable: true,
  value: null
};

export default Select;
