import { useState } from 'react';

import Section from './Section/Section';
import FeedbackVariants from './FeedbackVariants/FeedbackVariants';
import Statistics from './Statistics/Statistics';
import Notification from 'shared/components/Notification/Notification';

import '../../shared/styles/styles.scss';
import styles from './feedback.module.scss';

const feedbackOption = ['good', 'neutral', 'bad'];
const initialState = feedbackOption.reduce((a, v) => ({ ...a, [v]: 0 }), {});
const message = 'There is no feedback';

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState({ ...initialState });

  const leaveFeedback = name => {
    setFeedbacks(prevState => {
      const value = prevState[name];
      return { ...prevState, [name]: value + 1 };
    });
  };

  const countTotalFeedback = () => {
    const values = Object.values(feedbacks);
    return values.reduce((a, v) => a + v, 0);
  };

  const countFeedbackPercentage = propName => {
    const total = countTotalFeedback();
    if (!total) {
      return 0;
    }
    const value = feedbacks[propName];
    const result = ((value / total) * 100).toFixed(2);
    return Number(result);
  };

  const { good, neutral, bad } = feedbacks;
  const total = countTotalFeedback();
  const feedbackPercentage = countFeedbackPercentage('good');

  return (
    <div className={styles.container}>
      <Section title="Please leave feedback">
        <FeedbackVariants
          options={Object.keys(feedbacks)}
          leaveFeedback={leaveFeedback}
        />
      </Section>
      <Section title="Statiatics">
        {total !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            feedbackPercentage={feedbackPercentage}
          />
        ) : (
          <Notification message={message} />
        )}
      </Section>
    </div>
  );
};

export default Feedback;
