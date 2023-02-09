import FormProvider from 'Components/Forms/FormProvider';
import FormField from 'Components/Forms/FormField';
import Button from 'Components/Forms/Button';

import authApi from 'redux/queries/auth';

import { FIELD_NAMES } from '../constants';
import { schema } from '../schema';

function LoginForm() {
  const initialValues = { [FIELD_NAMES.EMAIL]: '', [FIELD_NAMES.PASSWORD]: '' };

  const { useLoginMutation } = authApi;
  const [login, loginOpts] = useLoginMutation();

  const onSubmit = (event, actions) => {
    login(event);
  };

  return (
    <FormProvider
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      <FormField
        type="email"
        name={FIELD_NAMES.EMAIL}
        label="Enter email"
        key={FIELD_NAMES.EMAIL}
      />
      <FormField
        type="password"
        name={FIELD_NAMES.PASSWORD}
        key={FIELD_NAMES.PASSWORD}
        label="Enter password"
      />
      <Button type="submit" key={1}>
        Submit
      </Button>
    </FormProvider>
  );
}

export default LoginForm;
