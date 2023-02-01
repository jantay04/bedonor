import TextField from "@mui/material/TextField/TextField";
import { styled } from "@mui/system";
import React from "react";
import { useFormContext } from "react-hook-form";

type Props = {
  name: string;
  label: string;
  readOnly?: boolean;
  standard?: boolean;
  large?: boolean;
  type?: "password" | "date";
  value?: any;
  onChange?: any;
};

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

function FormField({ name, label, type, readOnly, standard, large }: Props) {
  const { register, formState } = useFormContext();

  const dateValue = "2000-05-24";

  return (
    <>
      <CssTextField
        {...register(name)}
        name={name}
        size={large ? "medium" : "small"}
        label={label}
        variant={standard ? "standard" : "outlined"}
        color="primary"
        error={!!formState.errors[name]?.message}
        helperText={`${
          formState.errors[name]?.message ? formState.errors[name]?.message : ""
        } `}
        fullWidth
        type={type}
        InputProps={{ readOnly: readOnly }}
        defaultValue={type == "date" ? dateValue : ""}
      />
    </>
  );
}

export default FormField;
