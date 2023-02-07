import React, { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContextProvider";
import ModalHeading from "../ModalHeading";
import TextField from "@mui/material/TextField/TextField";
import Button, { ButtonProps } from "@mui/material/Button/Button";
import { styled } from "@mui/system";
import { MenuItem } from "@mui/material";
import { useNavigate } from "react-router";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from "formik";

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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [blood, setBlood] = useState("");
  const [lastName, setLastName] = useState("");
  const [genderid, setGender] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const { register } = useAuth();
  useEffect(() => {
    console.log(blood);
  }, [blood]);

  const navigate = useNavigate();

  function createUser() {
    if (
      !email ||
      !password ||
      !passwordConfirm ||
      !username ||
      !blood ||
      !lastName ||
      !genderid
    ) {
      alert("You have empty inputs!");
      return;
    }

    let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    formData.append("password_confirm", passwordConfirm);
    formData.append("email", email);
    register(formData, navigate("/"));
  }

  const initialValues: MyFormValues = {
    login: "",
    password: "",
  };

  function setFormLogin() {
    setFormType("login");
  }

  return (
    <div className="w-[320px] pb-[50px]">
      <ModalHeading>Регистрация</ModalHeading>
      <Formik
        onSubmit={(values, actions) => {
          // console.log({ values, actions });
          // alert(JSON.stringify(values, null, 2));
          // actions.setSubmitting(false);
        }}
        initialValues={initialValues}>
        <Form className="flex gap-[14px] flex-col mt-5">
          <TextField
            id="mail"
            label="Введите почту"
            variant="outlined"
            color="secondary"
            size="small"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="name"
            label="Введите имя"
            variant="outlined"
            color="secondary"
            size="small"
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            id="lastname"
            label="Введите фамилию"
            variant="outlined"
            color="secondary"
            size="small"
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            id="outlined-select-currency"
            select
            label="Выберите свою гуппу крови"
            color="secondary"
            defaultValue=""
            size="small">
            {bloodType.map((option) => (
              <MenuItem
                key={option.value}
                value={option.value}
                onClick={(e) => setBlood(option.value)}
                sx={{background: "white"}}
                >
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-select-currency"
            select
            label="Укажите пол"
            defaultValue=""
            color="secondary"
            size="small">
            {gender.map((option) => (
              <MenuItem
                key={option.value}
                value={option.value}
                onClick={(e) => setGender(option.value)}>
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
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            id="password2"
            label="Повторите пароль"
            variant="outlined"
            color="secondary"
            size="small"
            type="password"
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            sx={{
              textTransform: "capitalize",
              borderRadius: 2,
              height: "50px",
            }}
            onClick={createUser}>
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
