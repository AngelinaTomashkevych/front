import classNames from 'classnames';

import { useDeleteTaskMutation } from 'redux/queries/taskman';

import styles from './TaskCard.module.scss';

interface Props {
  id: string;
  title: string;
  completed: boolean;
  description?: string;
}

function TaskCard(props: Props): JSX.Element {
  const { title, description = '', completed, id } = props;

  const [deleteTask] = useDeleteTaskMutation();

  const onDeleteHandler = () => {
    deleteTask(id);
  };

  const cardClassName: string = classNames(styles.card, {
    [styles.card_completed]: completed,
  });

  return (
    <div className={cardClassName}>
      <div>{title}</div>
      <div>{description}</div>
      <button onClick={onDeleteHandler}>delete</button>
    </div>
  );
}

export default TaskCard;
