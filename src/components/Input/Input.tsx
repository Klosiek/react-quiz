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
  onChange,
}: Types.Props) => {
  const [isVisible, setVisible] = useState(false);
  return (
    <Styles.Input
      id={id}
      name={name}
      label={label}
      type={type}
      size={size}
      helperText={helperText}
      onChange={onChange}
      required={required}
      InputProps={{
        startAdornment: type === "password" && (
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
