import { Row,Container } from "react-bootstrap";
import { breakpoints } from "./index";
import styled from "styled-components";

export const ButtonsContainer = styled(Row)`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  [class*="col-"] {
    display: block;
  }
  span {
    display: block;
  }
  @media (max-width: ${breakpoints.small}) {
    [class*="col-"] {
      width: 100%;
      display: contents;
      margin-top: 1rem;
    }
    flex-direction: column;
    margin-top: 0rem;
    width: 100%;

    button {
      width: 70%;
    }
    button {
      margin-bottom: 0.8rem;
    }
  }
`;
export const ContainerStyled = styled(Container)`
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 3rem;
  .table-responsive {
    width: 90%;
  }
  .usecondary-button-box button {
    margin-top: 1rem;
    align-self: flex-start;
  }
  form,
  h1,
  .usecondary-button-box {
    width: 80%;
  }
  label {
    margin-top: 1rem;
  }
  form {
    button {
      margin-top: 1.5rem;
    }
  }
`;
