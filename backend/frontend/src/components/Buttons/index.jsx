import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { typeScale, primaryFont } from "../../utils";

export const BUTTON_MODIFIERS = {
  small: () => `
    padding: 10px;
    font-size: ${typeScale.helperText};
    `,
  large: () => `
    padding: 14px 22px;
    font-size: ${typeScale.header5};
`,
  warning: ({ theme }) => `
  background-color: ${theme.status.warningColor}
  color: ${theme.textColorInverted};
  &:hover, &focus: {
    background-color: ${theme.status.warningColorHover};
  }
  &:active{
    background-color: ${theme.status.warningColorActive}
  }
`,
  error: ({ theme }) => `
background-color: ${theme.status.errorColor};
color: ${theme.textColorInverted};
&:hover{
  background-color: ${theme.status.errorColorHover};
}
&:active{
  background-color: ${theme.status.errorColorActive};
}

`,
  success: ({ theme }) => `
  background-color: ${theme.status.successColor};
  color: ${theme.textColorInverted};
  &:hover{
    background-color: ${theme.status.successColorHover};
  }
  &:active{
    background-color: ${theme.status.successColorActive}
  }`,
};
export const Button = styled.button`
  padding: 8px 12px;
  min-width: 100px;
  cursor: pointer;
  font-family: ${primaryFont};
  font-size: ${typeScale.paragraph};
  transition: background-color 0.3s linear, color 0.2s linear;
  &:hover {
    background-color: ${(props) => props.theme.primaryHoverColor};
    color: ${(props) => props.theme.textColorOnPrimary};
  }
  &:focus {
    outline: 3px solid ${(props) => props.theme.primaryHoverColor};
    outline-offset: 2px;
  }
  &:active {
    background-color: ${(props) => props.theme.primaryActiveColor};
    border-color: ${(props) => props.theme.primaryActiveColor};
    color: ${(props) => props.theme.textColorOnPrimary};
  }
`;
export const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.textColorOnPrimary};
  border: 2px solid transparent;
  &:disabled {
    background-color: ${(props) => props.theme.disabled};
    color: ${(props) => props.theme.textOnDisabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
export const SecondaryButton = styled(Button)`
  border: 1px solid ${(props) => props.theme.primaryColor};
  background: none;
  color: ${(props) => props.theme.primaryColor};
  &:disabled {
    background-color: ${(props) => props.theme.disabled};
    color: ${(props) => props.theme.textOnDisabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
export const TertiaryButton = styled(Button)`
  background-color: ${(props) => props.theme.textColorOnPrimary};
  color: ${(props) => props.theme.primaryColor};
  border: 2px solid transparent;
  &:disabled {
    background-color: ${(props) => props.theme.disabled};
    color: ${(props) => props.theme.textOnDisabled};
    cursor: not-allowed;
  }
  &:hover {
    background-color: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.textColorOnPrimary};
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
