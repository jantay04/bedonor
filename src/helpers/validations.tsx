import * as yup from "yup";

// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const LoginFormSchema = yup.object({
  email: yup.string().email("Неверная почта").required("Почта обьязательная"),
  password: yup
    .string()
    .min(6, "Длина пароля должна быть более 6 строк")
    .required("Пароль обьязательный"),
});

export const RegisterFormSchema = yup
  .object({
    // fullname: yup.string().required("Имя и фамилия обьязательны "),
  })
  .concat(LoginFormSchema);

export const ResetFormSchema = yup.object({
  email: yup.string().email("Неверная почта").required("Почта обьязательная"),
});

export const PersonalAreaFormSchema = yup
  .object({
    name: yup.string().required("Имя обьязательная"),
    surname: yup.string().required("Фамилия обьязательная"),
    patronymic: yup.string(),
    databorm: yup.number().required("Дата рождение обьязательная"),
    phonenumber: yup.string().required("Номер телефон обьязательно"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Пароль должен совподать")
      .required("Пароль должен совподать"),
  })
  .concat(LoginFormSchema);
