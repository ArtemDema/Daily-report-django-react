import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { AuthSchema } from "../../../../utils/validation/validationSchemas.js"
import AuthStyles from "./Auth.module.css"

const AuthForm = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={AuthSchema}
      onSubmit={async (values, { setSubmitting, setErrors, resetForm }) => {
            const response = await fetch('http://127.0.0.1:8000/authorization/auth/', {
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
          <h1>Ввойдите в свой аккаунт</h1>

          <div className={AuthStyles.formDiv}>
            <label htmlFor="email">Введите почту:</label>
            <Field name="email" type="email" id="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div className={AuthStyles.formDiv}>
            <label htmlFor="password">Введите пароль:</label>
            <Field name="password" type="text" id="password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>

          <button type="submit">
            Подтвердить
          </button>

          <h5>Вернуться к регистрации</h5>
        </Form>
      )
      }
    </Formik>
  );
};

export default AuthForm;