import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ConfirmEmailSchema } from "../../../../utils/validation/validationSchemas.js"
import ConfirmEmailStyles from './ConfirmEmail.module.css'

const ConfirmEmailForm = () => {
  return (
    <Formik
      initialValues={{ field_one: '', field_two: '', field_three: '', field_four: '', field_five: '', field_six: '', field_seven: '', field_eight: '' }}
      validationSchema={ConfirmEmailSchema}
      onSubmit={async (values, { setSubmitting, setErrors, resetForm }) => {
            const response = await fetch('http://127.0.0.1:8000/authorization/confirm/', {
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
          <h1 className={ConfirmEmailStyles.confirmText}>Подтверждение почты</h1>
          <h4 className={ConfirmEmailStyles.enderCodeText}>Введите код отправленный вам на почту:</h4>

          <div className={ConfirmEmailStyles.inputDiv}>
            <div className={ConfirmEmailStyles.formDiv}>
              <Field name="field_one" type="text" id="field_one" />
            </div>

            <div className={ConfirmEmailStyles.formDiv}>
              <Field name="field_two" type="text" id="field_two" />
            </div>

            <div className={ConfirmEmailStyles.formDiv}>
              <Field name="field_three" type="text" id="field_three" />
            </div>

            <div className={ConfirmEmailStyles.formDiv}>
              <Field name="field_four" type="text" id="field_four" />
            </div>

            <div className={ConfirmEmailStyles.formDiv}>
              <Field name="field_five" type="text" id="field_five" />
            </div>

            <div className={ConfirmEmailStyles.formDiv}>
              <Field name="field_six" type="text" id="field_six" />
            </div>

            <div className={ConfirmEmailStyles.formDiv}>
              <Field name="field_seven" type="text" id="field_seven" />
            </div>

            <div className={ConfirmEmailStyles.formDiv}>
              <Field name="field_eight" type="text" id="field_eight" />
            </div>

          </div>
          

          <button type="submit">
            Подтвердить
          </button>

          <h5>Вернуться обратно</h5>
        </Form>
      )
      }
    </Formik>
  );
};

export default ConfirmEmailForm;