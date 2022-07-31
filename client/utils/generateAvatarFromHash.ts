// @ts-ignore
import tinycolor2 from "tinycolor2";

const getCorrectIndex = (number: number): number =>
  number > 255 ? 255 : number < 0 ? 0 : number;

export default (hash: string) => {
  const [r, g, b] = hash
    .substr(0, 3)
    .split("")
    .map((char) => getCorrectIndex(char.charCodeAt(0)));
  return {
    color: tinycolor2({ r, g, b }).lighten(10).saturate(20).toHexString(),
    colorLighten: tinycolor2({ r, g, b })
      .lighten(40)
      .saturate(20)
      .toHexString(),
  };
};
