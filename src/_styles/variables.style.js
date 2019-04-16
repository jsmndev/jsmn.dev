export const redRegular = "#ff635b";
export const redLight = "#ff9c96";
export const redDark = "#ff2c1f";
export const blackRegular = "#333";
export const blackLight = "#707070";
export const whiteRegular = "#fff";

export const headingStyle = `
font-size: 5rem;
font-weight: 700;
color: ${redRegular};
text-transform: uppercase;
`;

export const buttonLight = `
border: 2px solid ${redRegular};
border-radius: 3rem;
padding: 1.5rem 2.5rem;
background-color: ${whiteRegular};
color: ${redRegular};

&:hover {
  border-color: ${redRegular};
  background-color: ${redLight};
  color: ${redRegular};
}
`;

export const buttonDark = `
border: 2px solid ${redRegular};
border-radius: 3rem;
padding: 1.5rem 2.5rem;
background-color: ${redRegular};
color: ${whiteRegular};

&:hover {
  border-color: ${redRegular};
  background-color: ${redLight};
  color: ${redRegular};
}
`;
