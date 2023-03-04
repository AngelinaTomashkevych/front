import { memo } from 'react';

import TaskCard from './TaskCard';

import { data } from './fakeData';

function TaskManager() {
  return (
    <div>
      {data.map((task) => {
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
  );
}

export default memo(TaskManager);
