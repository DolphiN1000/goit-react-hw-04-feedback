import PropTypes from 'prop-types';

import styles from './statistics.module.scss';

const Statistics = ({ good, neutral, bad, total, feedbackPercentage }) => {
  return (
    <>
      <p className={styles.value}>Good: {good}</p>
      <p className={styles.value}>Neutral: {neutral}</p>
      <p className={styles.value}>Bad: {bad}</p>
      <p className={styles.value}>Total: {total}</p>
      <p className={styles.value}>Positive feedback: {feedbackPercentage}%</p>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  feedbackPercentage: PropTypes.number.isRequired,
};
