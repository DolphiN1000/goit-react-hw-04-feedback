import PropTypes from 'prop-types';

import styles from './button.module.scss';

const Button = ({ children, onClick, type }) => {
  return (
    <button className={styles.button} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;

Button.defaultProps = {
  type: 'submit',
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
};
