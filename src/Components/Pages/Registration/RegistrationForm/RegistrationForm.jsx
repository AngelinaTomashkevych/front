import { useDispatch } from 'react-redux';
import FormProvider from 'Components/Forms/FormProvider';
import FormField from 'Components/Forms/FormField';
import Button from 'Components/Forms/Button';

import { useRegistrationMutation } from 'redux/queries/auth';
import { setAppInfo } from 'redux/slice/appInfo';
import { FIELD_NAMES } from './constants';
import { schema } from './schema';
import { getDefaultFormState } from './config/getDefaultFormState';

function RegistrationForm() {
  const [registration, { isLoading }] = useRegistrationMutation();

  const dispatch = useDispatch();

  const onSubmit = async (values, { setErrors }) => {
    const { error, data } = await registration(values);

    if (error) {
      setErrors(error);
      return;
    }

    dispatch(setAppInfo(data));
  };

  return (
    <FormProvider
      initialValues={getDefaultFormState()}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      <h3>Registration</h3>
      <FormField type="email" name={FIELD_NAMES.EMAIL} label="Enter email" />
      <FormField
        type="password"
        name={FIELD_NAMES.PASSWORD}
        label="Enter password"
      />
      <Button type="submit" isLoading={isLoading}>
        Submit
      </Button>
    </FormProvider>
  );
}

export default RegistrationForm;
