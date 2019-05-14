const redRegular = "#ff635b";
const redLight = "#ff9c96";
const redDark = "#ff2c1f";
const blackRegular = "#333";
const blackLight = "#707070";
const whiteRegular = "#fff";

export const colors = {
  redRegular,
  redLight,
  redDark,
  blackRegular,
  blackLight,
  whiteRegular
};

export const headingStyle = `
font-size: 5rem;
font-weight: 700;
color: ${redRegular};
text-transform: uppercase;

@media (max-width: 885px) {
  font-size: 4rem;
}

@media (max-width: 711px) {
  font-size: 3rem;
}
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
