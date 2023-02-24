import { IconName } from "../Icon";

export interface NavIconItemProps {
  /**
   * Optional component class name
   */
  className?: string;
  /**
   * Small text next to icon
   */
  label: string;
  /**
   * Icon name from gallery
   */
  icon: IconName;
  /**
   * Link to the ref page
   */
  url: string;
  /**
   * Transparent background version or colored bg version?
   */
  variant: HeaderProps["variant"];
  testId?: string;
}

export interface HeaderProps {
  /**
   * Optional component class name
   */
  className?: string;
  /**
   * Larger img, aligned to left
   */
  logo: React.ReactElement;
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
  testId?: string;
}
