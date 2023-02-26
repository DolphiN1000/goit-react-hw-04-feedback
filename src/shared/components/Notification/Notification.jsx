import PropTypes from 'prop-types';

import styles from './notification.module.scss';

const Notification = ({ message }) => {
  return <p className={styles.message}>{message}</p>;
};

export default Notification;

Notification.defaultProps = {
  message: 'Error',
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
