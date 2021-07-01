import * as Types from "./Input.types";
import * as Styles from "./Input.styles";
import { useState } from "react";
import { IconButton, InputAdornment } from "@material-ui/core";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Input = ({
  id,
  name,
  label,
  size,
  helperText,
  type,
  required,
  autoFocus,
  onChange,
}: Types.Props) => {
  const [isVisible, setVisible] = useState<boolean>("password" === type);
  return (
    <Styles.Input
      id={id}
      name={name}
      label={label}
      type={isVisible ? "password" : "text"}
      size={size}
      helperText={helperText}
      onChange={onChange}
      required={required}
      autoFocus={autoFocus}
      InputProps={{
        endAdornment: type === "password" && (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setVisible(!isVisible)}
              onMouseDown={(event: React.MouseEvent<HTMLButtonElement>) =>
                event.preventDefault()
              }
            >
              {isVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Input;
