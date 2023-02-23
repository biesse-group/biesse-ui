import iconsMap from "../_Icon/icons-map";

export interface NavIconItemProps {
  /**
   * Small text next to icon
   */
  label: string;
  /**
   * Icon name from gallery
   */
  icon: keyof typeof iconsMap;
  /**
   * Link to the ref page
   */
  url: string;
  /**
   * Transparent background version or colored bg version?
   */
  variant: HeaderProps["variant"];
}

export interface HeaderProps {
  /**
   * Larger img, aligned to left
   */
  logo: () => JSX.Element;
  /**
   * Collection of navigation icons
   */
  navIcons?: Omit<NavIconItemProps, "variant">[];
  /**
   * Collection of navigation links
   * Smaller text, under the main banner
   */
  navLinks?: { label: string; url: string }[];
  /**
   * Transparent background version or colored bg version?
   */
  variant: "transparent" | "colored";
}
