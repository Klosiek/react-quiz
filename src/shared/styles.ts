import { Button, TextField } from "@material-ui/core";
import styled from "styled-components";

export const Input = styled(TextField)`
  /* width: 200px; */
  .MuiFormHelperText-root {
    color: red;
  }
`;

export const ProviderButton = styled(Button)<{ color?: string }>`
  display: flex;
  justify-content: space-around;
  svg {
    color: ${({ color }) => color};
  }
`;
