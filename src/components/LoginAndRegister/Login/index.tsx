import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFormSchema } from "../../../helpers/validations";
import * as yup from "yup";
import CssTextField from "../../UI/inputOurUI/FormField";
import React, { useEffect, useState } from "react";
import ModalHeading from "../ModalHeading";
import TextField from "@mui/material/TextField";
import Button, { ButtonProps } from "@mui/material/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContextProvider";

type Props = {
  setFormType: any;
};

function Login({ setFormType }: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { login } = useAuth();
  useEffect(() => {
    console.log(username);
  }, [username]);

  function loginUser() {
    let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    login(formData, navigate, username);
  }

  //! Validation
  function setFormRegister() {
    setFormType("register");
  }

  function setFormResetPassword() {
    setFormType("resetPassword");
  }

  const form = useForm({
    mode: "onChange",
    resolver: yupResolver(LoginFormSchema),
  });
  const onSubmit = () => {
    // data => console.log(data)
  };

  return (
    <div className="md:w-[320px] md:h-[440px]">
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col justify-between h-[440px]">
            <div className="flex flex-col md:mb-6">
              <div className="mb-6">
                <ModalHeading>Вход</ModalHeading>
              </div>
              <TextField
                label="Почта"
                id="outlined-size-small"
                defaultValue=""
                size="small"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label="Введите пароль"
                id="outlined-size-small"
                defaultValue=""
                size="small"
                type="password"
              />
              <div className="flex justify-end mb-6">
                <p
                  onClick={setFormResetPassword}
                  className=" text-xs underline cursor-pointer text-[#8E949A] mb-2 w-24">
                  Забыли пароль?
                </p>
              </div>
              <Link to="/profile" className="w-full">
                <Button
                  type="submit"
                  fullWidth
                  color="secondary"
                  variant="contained"
                  size="large"
                  onClick={loginUser}
                  sx={{ textTransform: "capitalize", borderRadius: 2 }}>
                  Войти
                </Button>
              </Link>
            </div>
            <div className="flex mx-auto flex-row justify-end text-xs cursor-default text-ourblue font-bold">
              Нет аккаунта?
              <p
                onClick={setFormRegister}
                className="text-ourred cursor-pointer">
                Зарегистрироваться
              </p>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

export default Login;
