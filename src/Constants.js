export const BREAKPOINTS = {
  tabletMin: 550,
  laptopMin: 1500,
  desktopMin: 1500,
};

export const QUERIES = {
  tabletToUP: `min-width: ${BREAKPOINTS.tabletMin / 16}rem`,
  laptopToUp: `min-width: ${BREAKPOINTS.laptopMin / 16}rem`,
  desktopToUp: `min-width: ${BREAKPOINTS.desktopMin / 16}rem`,
};

export const COLORS = {
  Gray: {
    lightGray: "hsl(0 0 90)",
    buttonLightGray: "hsl(0 0 96)",
    buttonDarkGray: "hsl(0 0 40)",
    mediumGray: "hsl(0 0 65)",
    darkGray: "hsl(0 0 60)",
  },
  font: {
    darkGray: "hsl(0 0 40)",
  },
  primary: "hsl(37 45 54)",
};

export const FONTWEIGHT = {
  one: "100",
  three: "300",
  normal: "400",
  five: "500",
  six: "600",
  bold: "700",
};

export const FONTFAMILY = {
  lato: "Lato, sans-serif",
  lustria: "Lustria, sans-serif",
};

export const FONTSIZE = {
  h1: `${20 / 16}rem`,
  h2: `${18 / 16}rem`,
  h3: `${26 / 16}rem`,
  parag: `${16 / 16}rem`,
  buttonMenu: `${13 / 16}rem`,
  button: `${11 / 16}rem`,

  comments: {
    user: `${14.5 / 16}rem`,
    content: `${13.5 / 16}rem`,
  },
};

export const ICONSIZE = {
  phoneAndUp: "3.3rem",
};
