import React from "react";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from "formik";
import ModalHeading from "../ModalHeading";
import TextField from "@mui/material/TextField/TextField";
import Button, { ButtonProps } from "@mui/material/Button/Button";
import { styled } from "@mui/system";
import { MenuItem } from "@mui/material";
import { IUserRegister } from "../../../Types/Type";
import { useAppDispatch } from "../../../Hooks/Hook";
import { RegisterUserAsync } from "../../../SlicesRT/UserSlice";

type Props = {
  setFormType: any;
};

interface MyFormValues {
  login: string;
  password: string;
}

const CssTextField = styled(TextField)({
  // "& label.Mui-focused": {
  //   color: "green",
  // },
  // "& .MuiInput-underline:after": {
  //   borderBottomColor: "green",
  // },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgb(42, 85, 115,50%)",
    },
    "&:hover fieldset": {
      borderColor: "rgb(42, 85, 115,50%)",
    },
    // "&.Mui-focused fieldset": {
    //   borderColor: "green",
    // },
  },
});

const bloodType = [
  {
    value: "1",
    label: "О (I) Rh+",
  },
  {
    value: "2",
    label: "A (I) Rh+",
  },
  {
    value: "3",
    label: "B (I) Rh+",
  },
  {
    value: "4",
    label: "AB (I) Rh+",
  },

  {
    value: "5",
    label: "О (I) Rh-",
  },
  {
    value: "6",
    label: "A (I) Rh-",
  },
  {
    value: "7",
    label: "B (I) Rh-",
  },
  {
    value: "8",
    label: "AB (I) Rh-",
  },
];

const gender = [
  {
    value: "man",
    label: "Мужчина",
  },
  {
    value: "woman",
    label: "Женщина",
  },
];



function Register({ setFormType }: Props) {
  const initialValues: IUserRegister = {
    bloodTypeId: 3,
    email: "omurkulovaidin94@gmail.com",
    genderId: 1,
    lastName: "test/lastname",
    name: "test/name",
    password: "1234567",
  };

  function setFormLogin() {
    setFormType("login");
  }

  const dispatch = useAppDispatch();

  return (
    <div className="w-[320px] pb-[50px]">
      <ModalHeading>Регистрация</ModalHeading>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          dispatch(RegisterUserAsync(values));
          console.log(values);
          // alert(JSON.stringify(values, null, 2));
          // actions.setSubmitting(false);
        }}>
        <Form className="flex gap-[14px] flex-col mt-5">
          <TextField
            id="mail"
            label="Введите почту"
            variant="outlined"
            color="secondary"
            size="small"
          />
          <TextField
            id="mail"
            label="Введите имя"
            variant="outlined"
            color="secondary"
            size="small"
          />
          <TextField
            id="mail"
            label="Введите фамилия"
            variant="outlined"
            color="secondary"
            size="small"
          />
          <TextField
            id="outlined-select-currency"
            select
            label="Выберите свою гуппу крови"
            defaultValue=""
            size="small">
            {bloodType.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-select-currency"
            select
            label="Укажите пол"
            defaultValue=""
            size="small">
            {gender.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="password"
            label="Введите пароль"
            variant="outlined"
            color="secondary"
            size="small"
            type="password"
          />
          <TextField
            id="password2"
            label="Повторите пароль"
            variant="outlined"
            color="secondary"
            size="small"
            type="password"
          />
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            sx={{
              textTransform: "capitalize",
              borderRadius: 2,
              height: "50px",
            }}>
            <p className="font-semibold text-base">Зарегистрироваться</p>
          </Button>

          <div className="flex justify-center">
            <p className="text-xs text-center  font-bold text-ourblue">
              Уже есть аккаунт?
            </p>
            <p
              className="text-xs text-center font-bold cursor-pointer text-ourred ml-1"
              onClick={setFormLogin}>
              Войти
            </p>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default Register;
