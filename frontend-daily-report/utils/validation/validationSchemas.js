import * as yup from 'yup';

export const RegistrationSchema = yup.object().shape({
  email: yup.string()
    .email('Неверный формат email')
    .required('Введите почту. Это обязательное поле'),
  password: yup.string()
    .min(4, 'Минимум 4 символа')
    .required('Пароль - это обязательное поле'),
  confirm_password: yup.string()
    .min(4, 'Минимум 4 символа')
    .required('Вы должны подтвердить пароль'),
});

// export const ConfirmEmailSchema = yup.object().shape({
//   field_one: yup.string()
//     .max(1)
//     .required(),
//   field_two: yup.string()
//     .max(1)
//     .required(),
//   field_three: yup.string()
//     .max(1)
//     .required(),
//   field_four: yup.string()
//     .max(1)
//     .required(),
//   field_five: yup.string()
//     .max(1)
//     .required(),
//   field_six: yup.string()
//     .max(1)
//     .required(),
//   field_seven: yup.string()
//     .max(1)
//     .required(),
//   field_eight: yup.string()
//     .max(1)
//     .required()
// });

// export const AuthSchema = yup.object().shape({
//   email: yup.string()
//     .email('Неверный формат email')
//     .required('Введите почту. Это обязательное поле'),
//   password: yup.string()
//     .min(4, 'Минимум 4 символа')
//     .required('Пароль - это обязательное поле')
// });




// export const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png', 'image/webp']

export const ReportSchema = yup.object().shape({
  text: yup.string()
    .max(800, "Максимум 800 символов"),
  // photo: yup.mixed()
  //   .test('fileType', 'Поддерживаются только форматы .jpg, .jpeg, .png, .webp', (value) => {
  //     return value && SUPPORTED_FORMATS.includes(value.type);
  //   }),

});