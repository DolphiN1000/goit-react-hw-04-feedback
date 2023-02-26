import PropTypes from 'prop-types';

import styles from './section.module.scss';

const Section = ({ children, title }) => {
  return (
    <div>
      <h3 className={styles.title}>{title}</h3>
      {children}
    </div>
  );
};

export default Section;

Section.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
};
