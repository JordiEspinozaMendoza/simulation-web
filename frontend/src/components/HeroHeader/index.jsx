import React from "react";
import { Row, Col } from "react-bootstrap";
import {
  main,
  neutral,
  typeScale,
  breakpoints,
  ButtonsContainer,
} from "../../utils";
import styled from "styled-components";
import { TertiaryButton } from "../index";
import { useHistory } from "react-router-dom";
const HeroHeaderStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 95vh;
  flex-direction: column;
  width: 1;
  background-color: ${neutral[600]};
  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-position: top;
    background-size: 100% 100%;
    background-position: center;
    background-image: url("https://images.unsplash.com/photo-1555303121-74cc166bd54d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=890&q=80");
    opacity: 0.25;
  }
  h1,
  span,
  Button {
    position: relative;
  }
  h1 {
    color: #fff;
    font-size: ${typeScale.heroHeader};
  }
  span {
    color: #fff;
    font-size: ${typeScale.paragraph};
  }
  @media (max-width: ${breakpoints.small}) {
    h1 {
      font-size: ${typeScale.smallHeroHeader};
    }
    span {
      font-size: ${typeScale.helperText};
      margin-bottom: 1rem;
      width: 70%;
      text-align: center;
    }
  }
`;
export const HeroHeader = ({}) => {
  const history = useHistory();
  const [largeButton, setLargeButton] = React.useState(false);
  const [dimensions, setDimensions] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  React.useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);
  React.useEffect(() => {
    if (`${dimensions.width}px` < breakpoints.small) {
      setLargeButton(true);
    } else {
      setLargeButton(false);
    }
  }, [dimensions]);
  return (
    <HeroHeaderStyled>
      <h1>Simulación</h1>
      <span>Generador de números pseudoaleatorios y pruebas.</span>
      <ButtonsContainer>
        <Col sm={4}>
          <TertiaryButton
            modifiers={[largeButton && "large"]}
            onClick={() => history.push("/exercises/tests/smirnov")}
          >
            Smirnov
          </TertiaryButton>
        </Col>
        <Col sm={4}>
          <TertiaryButton
            modifiers={[largeButton && "large"]}
            onClick={() => history.push("exercises/generator")}
          >
            Generador
          </TertiaryButton>
        </Col>
        <Col sm={4}>
          <TertiaryButton
            modifiers={[largeButton && "large"]}
            onClick={() => history.push("exercises/tests/frequency")}
          >
            Frecuencia
          </TertiaryButton>
        </Col>
      </ButtonsContainer>
    </HeroHeaderStyled>
  );
};
