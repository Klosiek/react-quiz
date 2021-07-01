import { Paper } from "@material-ui/core";
import styled from "styled-components";

export const RegisterContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 500px;
  height: 300px;
`;

export const FormContainer = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 80px;
  padding: 60px;
  height: 600px;

  a {
    text-decoration: none;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  /* width: 520px; */
  h4 {
    font-weight: 800;
  }
  h5 {
    font-weight: 500;
  }
  h6 {
    font-weight: 600;
    a {
      text-decoration: none;
    }
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
`;
