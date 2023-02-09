import { cloneElement } from 'react';
import PropTypes from 'prop-types';

import { Formik, Form } from 'formik';

function FormProvider(props) {
  const { children, initialValues, validationSchema, onSubmit } = props;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => {
        return (
          <Form>
            {children.map((element) => {
              return cloneElement(element, {
                errors,
                touched,
                key: element.key,
              });
            })}
          </Form>
        );
      }}
    </Formik>
  );
}

FormProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
    .isRequired,
  validationSchema: PropTypes.object.isRequired,
  initialValues: PropTypes.object,
  onSubmit: PropTypes.func,
};

FormProvider.defaultProps = {
  initialValues: {},
  onSubmit: () => {},
};

export default FormProvider;
