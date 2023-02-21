import { css } from "styled-components";

const getIconSize = (size?: string) => {
  switch (size) {
    case "small":
      return css`
        width: 30px;
      `;
    case "large":
      return css`
        width: 80px;
      `;
    default:
      return css`
        width: 50px;
      `;
  }
};

export default getIconSize;
