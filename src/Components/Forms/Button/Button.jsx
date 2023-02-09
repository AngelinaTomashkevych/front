import PropTypes from 'prop-types';

function Button(props) {
  const { children, type } = props;

  return <button type={type}>{children}</button>;
}

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(['submit', 'button']),
};

Button.defaultProps = {
  children: '',
  type: 'submit',
};

export default Button;
