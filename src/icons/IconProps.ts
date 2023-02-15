interface IconProps extends Pick<React.SVGProps<SVGSVGElement>, "width"> {
  size?: "small" | "medium" | "large";
}

export const getIconSize = (size?: string) => {
  switch (size) {
    case "small":
      return { width: "25px" };
    case "large":
      return { width: "80px" };
    case "medium":
      return { width: "50px" };
    default:
      return {};
  }
};

export default IconProps;
