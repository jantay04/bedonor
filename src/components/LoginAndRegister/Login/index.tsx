import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFormSchema } from "../../../helpers/validations";
import * as yup from "yup";
import CssTextField from "../../UI/inputOurUI/FormField";
import React from "react";
import ModalHeading from "../ModalHeading";
import TextField from "@mui/material/TextField/TextField";
import Button, { ButtonProps } from "@mui/material/Button/Button";
import { Link } from "react-router-dom";

type Props = {
  setFormType: any;
};

function Login({ setFormType }: Props) {
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
              <CssTextField label="Введите почту" name="email" />
              <CssTextField
                label="Введите пароль"
                name="password"
                type="password"
              />
              <div className="flex justify-end mb-6">
                <p
                  onClick={setFormResetPassword}
                  className=" text-xs underline cursor-pointer text-[#8E949A] mb-2 w-24">
                  Забыли пароль?
                </p>
              </div>
              <Link to="/personalarea" className="w-full">
                <Button
                  type="submit"
                  fullWidth
                  color="secondary"
                  variant="contained"
                  size="large"
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
