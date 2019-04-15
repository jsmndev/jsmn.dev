// Flexbox custom layout
export const flex = (justify = "flex-start", align = "flex-start") =>
  `display: flex;
  justify-content: ${justify};
  align-items: ${align};`;

export const wrapper = (width = "100%", margin = 0, maxWidth = "1000px") =>
  `
    width: ${width};
    margin: ${margin};
    maxWidth: ${maxWidth}`;
