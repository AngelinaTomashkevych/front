import { useDispatch } from 'react-redux';

import FormProvider from 'Components/Forms/FormProvider';

import { hideModal } from 'redux/slice/modalSlice';
import { useAddTaskMutation } from 'redux/queries/taskman';

import TaskForm from './TaskForm';

import { getDefaultFormState } from './configs/getDefaultFormState';
import { schema } from './schema';

function TaskModal() {
  const dispatch = useDispatch();
  const [addTask, { isLoading }] = useAddTaskMutation();

  const onSubmit = async (values, { setErrors }) => {
    const { error } = await addTask(values);

    if (error) {
      setErrors(error);
      return;
    }
    dispatch(hideModal());
  };

  return (
    <FormProvider
      initialValues={getDefaultFormState()}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      <TaskForm isLoading={isLoading} />
    </FormProvider>
  );
}

export default TaskModal;
