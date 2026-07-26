import * as yup from 'yup';

export const SignupSchema = yup.object().shape({
  email: yup.string()
    .email('Неверный формат email')
    .required('Введите почту. Это обязательное поле'),
  password: yup.string()
    .min(4, 'Минимум 4 символа')
    .required('Пароль - это обязательное поле'),
  confirm_password: yup.string()
    .min(4, 'Минимум 4 символа')
    .required('Вы должны подтвержить пароль'),
});