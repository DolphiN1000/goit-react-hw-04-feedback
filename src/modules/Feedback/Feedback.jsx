import { Component } from 'react';

import Section from './Section/Section';
import FeedbackVariants from './FeedbackVariants/FeedbackVariants';
import Statistics from './Statistics/Statistics';
import Notification from 'shared/components/Notification/Notification';

import '../../shared/styles/styles.scss';
import styles from './feedback.module.scss';

const feedbackOption = ['good', 'neutral', 'bad'];
const initialState = feedbackOption.reduce((a, v) => ({ ...a, [v]: 0 }), {});
const message = 'There is no feedback';

class Feedback extends Component {
  state = initialState;

  // feedbackOptions = () => {
  //   const feedbackOptions = Object.keys(this.state);
  //   return feedbackOptions;
  // };

  incraseValue = name => {
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countFeedbackPercentage(propName) {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    const value = this.state[propName];
    const result = ((value / total) * 100).toFixed(2);
    return Number(result);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const feedbackPercentage = this.countFeedbackPercentage('good');
    // const feedbackOptions = this.feedbackOptions();

    return (
      <div className={styles.container}>
        <Section title="Please leave feedback">
          <FeedbackVariants
            options={Object.keys(this.state)}
            leaveFeedback={this.incraseValue}
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
  }
}
export default Feedback;
