export const randomCharGenerator = () => {
  const str = "qwertyuiopasdfghjklzxcvbnm";
  const num = Math.floor(Math.random() * str.length);

  return str[num];
};
