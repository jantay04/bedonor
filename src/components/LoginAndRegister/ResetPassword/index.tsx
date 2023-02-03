import React, { useEffect, useRef, useState } from "react";
import { Formik, Form } from "formik";
import ModalHeading from "../ModalHeading";
import TextField from "@mui/material/TextField/TextField";
import Button, { ButtonProps } from "@mui/material/Button/Button";
import { Link } from "react-router-dom";
import mailSvg from "./assets/mail.svg";
import { styled } from "@mui/system";

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

function ResetPassword({ setFormType }: Props) {
  const initialValues: MyFormValues = {
    login: "",
    password: "",
  };

  function setFormRegister() {
    setFormType("register");
  }

  const [confirmation, setConfirmation] = useState(false);

  const [counter, setCounter] = useState(60);

  // useEffect(() => {
  //   counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  // }, [counter])

  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = true;
      counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }
    if (counter == 0) {
      setConfirmation(false);
    }
  }, [counter]);

  return (
    <div className="w-[320px] pb-[150px]">
      <ModalHeading>
        Восстановление <br /> доступа
      </ModalHeading>
      {!confirmation && (
        <>
          <p className="text-base text-center text-ourblue mt-11">
            Забыли пароль? Введите свой адрес электронной почты и мы вышлем вам
            инструкцию по восстановлению пароля{" "}
          </p>
          <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
              // console.log({ values, actions });
              // alert(JSON.stringify(values, null, 2));
              // actions.setSubmitting(false);
              setConfirmation(true);
            }}>
            <Form className="flex gap-[20px] flex-col mt-11">
              <TextField
                id="mail"
                label="Введите почту"
                variant="outlined"
                color="primary"
                size="small"
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
                <p className="font-semibold text-base">Отправить</p>
              </Button>
            </Form>
          </Formik>
        </>
      )}
      {confirmation && (
        <>
          <p className="text-base text-center text-ourblue mt-11">
            Мы выслали на вашу электронную почту инструкцию по восстановлению
            пароля{" "}
          </p>
          <p className="text-base text-center text-ourblue mt-11">
            Если письмо не пришло, убедитесь, что оно не попало в спам или
            вышлите повторно через {counter} секунд
          </p>
          <div className="flex justify-center mt-9">
            <img src={mailSvg} alt="mailSvg" />
          </div>
        </>
      )}
    </div>
  );
}

export default ResetPassword;
