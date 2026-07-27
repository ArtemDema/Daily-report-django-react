import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { RegistrationSchema } from "../../../../utils/validation/validationSchemas.js"
import RegisterStyles from "./Register.module.css"

const RegistrationForm = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '', confirm_password: '' }}
      validationSchema={RegistrationSchema}
      onSubmit={async (values, { setSubmitting, setErrors, resetForm }) => {
            const response = await fetch('http://127.0.0.1:8000/authorization/register/', {
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
          <h1>Создайте свой аккаунт</h1>

          <div className={RegisterStyles.formDiv}>
            <label htmlFor="email">Введите почту:</label>
            <Field name="email" type="email" id="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div className={RegisterStyles.formDiv}>
            <label htmlFor="password">Введите пароль:</label>
            <Field name="password" type="text" id="password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>

          <div className={RegisterStyles.formDiv}>
            <label htmlFor="confirm_password">Подтвердите пароль:</label>
            <Field name="confirm_password" type="text" id="confirm_password" />
            <ErrorMessage name="confirm_password" component="div" className="error" />
          </div>

          <button type="submit">
            Подтвердить
          </button>

          <h5>Уже регистрировались и у вас есть аккаунт?</h5>
          <h6>Перейти к авторизации</h6>
        </Form>
      )
      }
    </Formik>
  );
};

export default RegistrationForm;