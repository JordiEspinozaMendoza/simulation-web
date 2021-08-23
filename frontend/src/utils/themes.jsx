import { main, neutral, yellow, green } from "./colors";
import { primaryFont } from "./typography";
export const defaultTheme = {
  primaryColor: main[100],
  primaryHoverColor: main[200],
  formBackground: neutral[100],
  textFormBackground: neutral[600],
  textColorOnPrimary: neutral[100],
  textColor: neutral[600],
  textColorInverted: neutral[100],
  textOnDisabled: neutral[300],
  primaryFont: primaryFont,
  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: main[100],
    errorColorHover: main[200],
    errorColorActive: main[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300],
  },
};
