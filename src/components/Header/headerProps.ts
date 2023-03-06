import { IconName } from "../Icon";

export interface NavLink {
  label: string;
  /**
   * Link to the ref page
   */
  renderLink: (children: React.ReactElement) => JSX.Element;
}

export interface NavIconItemProps extends NavLink {
  /**
   * Optional component class name
   */
  className?: string;
  /**
   * Icon name from gallery
   */
  icon: IconName;
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
  navLinks?: NavLink[];
  /**
   * Transparent background version or colored bg version?
   */
  variant: "transparent" | "colored";
  testId?: string;
}
