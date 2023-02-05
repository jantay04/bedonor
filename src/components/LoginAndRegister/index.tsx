import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import ResetPassword from "./ResetPassword";
import authpic from "./assets/picauth.svg";

type Props = {};

function LoginAndRegister({ }: Props) {
  const [formType, setFormType] = useState<"login" | "register" | "resetPassword">("login");

  return (
    <>
      <div className="container mx-auto flex flex-row justify-evenly p-0 mt-12 max-md:flex-col">
        <img src={authpic} alt="" />
        <div className="flex items-center justify-center ">
          {formType == "login" && (
            <div className="outline outline-2 outline-offset-0 outline-ourred rounded-2xl p-14 pb-10 mb-10">
              <Login setFormType={setFormType} />
            </div>
          )}
          {formType == "register" && (
            <div className="outline outline-2 outline-offset-0 outline-ourred rounded-2xl p-14 pb-10 mb-10">
              <Register setFormType={setFormType} />
            </div>
          )}
          {formType == "resetPassword" && (
            <div className="outline outline-2 outline-offset-0 outline-ourred rounded-2xl p-14 pb-10 mb-10">
              <ResetPassword setFormType={setFormType} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default LoginAndRegister;
