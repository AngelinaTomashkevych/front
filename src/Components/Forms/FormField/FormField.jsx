import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Field, connect } from 'formik';
import { useState } from 'react';
import { AiOutlineEyeInvisible } from '@react-icons/all-files/ai/AiOutlineEyeInvisible';
import { AiOutlineEye } from '@react-icons/all-files/ai/AiOutlineEye';

import styles from './FormField.module.scss';

function FormField(props) {
  const { type, name, label, formik } = props;
  const { errors } = formik;

  const [showPassword, setShowPassword] = useState(false);

  const toogleEye = () => {
    setShowPassword(!showPassword);
  };

  const Eye = showPassword ? AiOutlineEyeInvisible : AiOutlineEye;

  const fieldClassName = classNames(styles.field, {
    [styles.field_error]: errors[name],
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
        />
        {type === 'password' && (
          <Eye className={styles.icon} onClick={toogleEye} />
        )}
      </div>
      {errors[name] && <div className={styles.error}>{errors[name]}</div>}
    </div>
  );
}

FormField.propTypes = {
  type: PropTypes.oneOf(['email', 'password', 'text', 'number']),
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
  type: 'text',
  formik: {},
};

export default connect(FormField);
