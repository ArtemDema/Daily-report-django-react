import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { SignupSchema } from "../../../utils/validation/validationSchemas.js"

const RegistrationForm = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '', confirm_password: '' }}
      validationSchema={SignupSchema}
      onSubmit={async (values, { setSubmitting, setErrors, resetForm }) => {
            const response = await fetch('http://127.0.0.1:8000/authorization/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(values),
            });
            console.log('Отправляемые данные:', values);
            resetForm();
            }
        }
    >
      {
      () => (
        <Form>
          <div>
            <label htmlFor="email">Email:</label>
            <Field name="email" type="email" id="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="password">Пароль:</label>
            <Field name="password" type="text" id="password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="confirm_password">Подтвердите пароль:</label>
            <Field name="confirm_password" type="text" id="confirm_password" />
            <ErrorMessage name="confirm_password" component="div" className="error" />
          </div>

          <button type="submit">
            Подтвердить
          </button>
        </Form>
      )
      }
    </Formik>
  );
};

export default RegistrationForm;