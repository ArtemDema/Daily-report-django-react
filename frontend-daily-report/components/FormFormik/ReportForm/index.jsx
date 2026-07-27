import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ReportSchema } from "../../../utils/validation/validationSchemas.js"
import ReportsFormStyles from "./ReportForm.module.css"

const ReportsForm = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '', confirm_password: '' }}
      validationSchema={ReportSchema}
      onSubmit={async (values, { setSubmitting, setErrors, resetForm }) => {
            const response = await fetch('http://127.0.0.1:8000/reports/', {
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
        <Form className={ReportsFormStyles.form}>
          <div className={ReportsFormStyles.textInputDiv}>
            <Field className={ReportsFormStyles.textInput} name="text" as="textarea" type="text" id="text" 
            placeholder="Опишите, что с вами сегодня происходило"/>
          </div>

          <div className={ReportsFormStyles.buttons}>
            <input id="photo" name="photo" type="file" accept="image/*"
            placeholder="Добавить фотографии" />

            <button type="submit" className={ReportsFormStyles.saveReportButton}>Сохранить</button>
          </div>
        </Form>
      )
      }
    </Formik>
  );
};

export default ReportsForm;