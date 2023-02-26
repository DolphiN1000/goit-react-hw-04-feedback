import PropTypes from 'prop-types';

import Button from '../../../shared/components/Button/Button';

const FeedbackVariants = ({ options, leaveFeedback }) => {
  const elements = options.map(name => (
    <Button key={name} onClick={() => leaveFeedback(name)} type="button">
      {name}
    </Button>
  ));
  return <>{elements}</>;
};

export default FeedbackVariants;

FeedbackVariants.propTypes = {
  options: PropTypes.arrayOf(PropTypes.any).isRequired,
  leaveFeedback: PropTypes.func.isRequired,
};
