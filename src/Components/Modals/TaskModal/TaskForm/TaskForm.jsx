import PropTypes from 'prop-types';

import Button from 'Components/Forms/Button';
import FormField from 'Components/Forms/FormField';

import { FIELD_NAMES } from '../constants';

function TaskForm(props) {
  const { isLoading } = props;

  return (
    <>
      <h3>Create new task</h3>
      <FormField name={FIELD_NAMES.TITLE} label="Task title" />
      <FormField
        type="textarea"
        name={FIELD_NAMES.DESCRIPTION}
        label="Task description"
      />
      <Button type="submit" isLoading={isLoading}>
        Create
      </Button>
    </>
  );
}

TaskForm.propTypes = {
  isLoading: PropTypes.bool,
};

TaskForm.defaultProps = {
  isLoading: false,
};

export default TaskForm;
