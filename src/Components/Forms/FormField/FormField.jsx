import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Field, connect } from 'formik';
import { useState } from 'react';
import { AiOutlineEyeInvisible } from '@react-icons/all-files/ai/AiOutlineEyeInvisible';
import { AiOutlineEye } from '@react-icons/all-files/ai/AiOutlineEye';

import { SPECIAL_TYPES, TYPES } from './constants';

import styles from './FormField.module.scss';

function FormField(props) {
  const {
    type,
    name,
    label,
    formik: { errors, touched },
  } = props;

  const [showPassword, setShowPassword] = useState(false);

  const toogleEye = () => {
    setShowPassword(!showPassword);
  };

  const specialType = SPECIAL_TYPES[type];

  const Eye = showPassword ? AiOutlineEyeInvisible : AiOutlineEye;

  const fieldClassName = classNames(styles.field, {
    [styles.field_error]: errors[name] && touched[name],
  });

  return (
    <div key={name} className={styles.fieldWrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <div className={styles.inputWrapper}>
        <Field
          type={showPassword ? 'text' : type}
          name={name}
          className={fieldClassName}
          as={specialType}
        />
        {type === 'password' && (
          <Eye className={styles.icon} onClick={toogleEye} />
        )}
      </div>
      {errors[name] && touched[name] && (
        <div className={styles.error}>{errors[name]}</div>
      )}
    </div>
  );
}

FormField.propTypes = {
  type: PropTypes.oneOf(Object.values({ ...SPECIAL_TYPES, ...TYPES })),
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  errors: PropTypes.object,
  touched: PropTypes.object,
  formik: PropTypes.object,
};

FormField.defaultProps = {
  label: '',
  errors: {},
  touched: {},
  type: TYPES.TEXT,
  formik: {},
};

export default connect(FormField);
