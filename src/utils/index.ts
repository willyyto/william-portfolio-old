const createLogo = (name) =>
  name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

const ToUpper = (name) =>
  name
    .split(" ")
    .join("")
    .toUpperCase();

export { createLogo, ToUpper };
