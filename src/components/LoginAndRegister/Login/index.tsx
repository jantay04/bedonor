import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFormSchema } from "../../../helpers/validations";
import CssTextField from "../../UI/inputOurUI/FormField";
import ModalHeading from "../ModalHeading";
import Button, { ButtonProps } from "@mui/material/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAppDispatch } from "../../../Hooks/Hook";
import { LoginUserAsync } from "../../../SlicesRT/UserSlice";

type Props = {
  setFormType: any;
};

function Login({ setFormType }: Props) {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

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
    const objLogin = {
      email: form.getValues().email,
      password: form.getValues().password,
    };
    dispatch(LoginUserAsync(objLogin));
    console.log(objLogin);
    navigate("/profile");
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
              {/* <Link to="/profile" className="w-full"> */}
              <Button
                type="submit"
                fullWidth
                color="secondary"
                variant="contained"
                size="large"
                sx={{ textTransform: "capitalize", borderRadius: 2 }}>
                Войти
              </Button>
              {/* </Link> */}
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
