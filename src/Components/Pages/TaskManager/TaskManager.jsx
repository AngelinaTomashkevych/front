import { memo } from 'react';
import { useDispatch } from 'react-redux';

import Button from 'Components/Forms/Button';
import Loader from 'Components/Forms/Loader';

import { showModal } from 'redux/slice/modalSlice';
import { useGetTasksQuery } from 'redux/queries/taskman';
import { LOADER_SIZE } from 'Components/Forms/Loader/constants';
import { MODAL_NAMES } from 'Components/Modals/constants';

import TaskCard from './TaskCard';

import styles from './TaskManager.module.scss';

function TaskManager() {
  const dispatch = useDispatch();

  const { isLoading, data } = useGetTasksQuery();

  const addTaskHandler = () => {
    dispatch(showModal({ name: MODAL_NAMES.TASK_MODAL }));
  };
  return isLoading ? (
    <Loader size={LOADER_SIZE.LARGE} />
  ) : (
    <div>
      <Button onClick={addTaskHandler}>Add task</Button>
      <div className={styles.taskManager}>
        {data &&
          data.map((task) => {
            const { id, title, description, date, completed } = task;

            return (
              <TaskCard
                key={task.id}
                id={id}
                title={title}
                date={date}
                description={description}
                completed={completed}
              />
            );
          })}
      </div>
    </div>
  );
}

export default memo(TaskManager);
