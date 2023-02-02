import React from "react";

type Props = {
  children: any;
};

function ModalHeading({ children }: Props) {
  return (
    <h2 className="text-ourblue font-bold text-2xl text-center">{children}</h2>
  );
}

export default ModalHeading;
