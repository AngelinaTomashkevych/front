import { useDispatch } from 'react-redux';
import FormProvider from 'Components/Forms/FormProvider';
import FormField from 'Components/Forms/FormField';
import Button from 'Components/Forms/Button';

import { useLoginMutation } from 'redux/queries/auth';

import { FIELD_NAMES } from './constants';
import { schema } from './schema';
import { getDefaultFormState } from './configs/getDefaultFormState';
import { setAppInfo } from 'redux/slice/appInfo';

function LoginForm() {
  const [login, { isLoading }] = useLoginMutation();

  const dispatch = useDispatch();

  const onSubmit = async (values, { setErrors }) => {
    const { data, error } = await login(values);

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
      <h3>Login</h3>
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

export default LoginForm;
