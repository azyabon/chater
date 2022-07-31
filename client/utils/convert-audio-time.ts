export default (number: number): string => {
  const mins = Math.floor(number / 60);
  const secs = number.toFixed();
  return `${mins < 10 ? "0" : ""}${mins}:${+secs < 10 ? "0" : ""}${secs}`;
};
