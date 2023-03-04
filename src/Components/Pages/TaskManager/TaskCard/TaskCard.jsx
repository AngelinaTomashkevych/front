import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './TaskCard.module.scss';

function TaskCard(props) {
  const { id, title, description, date, completed } = props;

  const cardClassName = classNames(styles.card, {
    [styles.card_completed]: completed,
  });

  return (
    <div className={cardClassName}>
      <div>{title}</div>
      <div>{description}</div>
      <div>{date}</div>
    </div>
  );
}

TaskCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  date: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
};

TaskCard.defaultProps = {
  description: '',
};

export default TaskCard;
