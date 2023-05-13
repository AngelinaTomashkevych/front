import { memo } from 'react';

import { Formik, Form } from 'formik';

interface Props {
  children: JSX.Element;
  validationSchema: object;
  initialValues?: object;
  onSubmit?: () => void;
}

function FormProvider(props: Props): JSX.Element {
  const {
    children,
    initialValues = {},
    validationSchema,
    onSubmit = () => {},
  } = props;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>{children}</Form>
    </Formik>
  );
}

export default memo(FormProvider);
