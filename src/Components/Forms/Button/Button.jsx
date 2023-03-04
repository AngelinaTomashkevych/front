import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';

import Loader from 'Components/Forms/Loader';

import styles from './Button.module.scss';

function Button(props) {
  const { children, type, isLoading } = props;

  const buttonRef = useRef(null);

  const [buttonWidth, setButtonWidth] = useState(null);

  useEffect(() => {
    if (buttonRef.current) {
      const { width } = buttonRef.current.getBoundingClientRect();

      setButtonWidth(width);
    }
  }, [buttonRef.current]);

  return (
    <button
      type={type}
      className={styles.button}
      style={{ width: buttonWidth }}
      ref={buttonRef}
    >
      {isLoading ? <Loader /> : <div>{children}</div>}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(['submit', 'button']),
  isLoading: PropTypes.bool,
};

Button.defaultProps = {
  children: '',
  type: 'submit',
  isLoading: false,
};

export default Button;
