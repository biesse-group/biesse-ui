import { type BaseProps } from "~components/baseProps";
import { type IconName } from "~components/Icon";

export interface NavLink {
  label: string;
  /**
   * Link to the ref page
   */
  renderLink: (children: React.ReactNode) => React.ReactNode;
  /**
   * If true, the link label will be shown on mobile hamburger menu
   */
  onMobileMenu?: boolean;
  /**
   * Underline element if true
   */
  isSelected?: boolean;
}

export interface NavIconItemProps extends NavLink, BaseProps {
  /**
   * Icon name from gallery
   */
  icon: IconName;
  /**
   * Transparent background version or colored bg version?
   */
  variant: HeaderProps["variant"];
  /**
   * If true, the icon won't disappear in mobile view
   */
  onMobileHeader?: boolean;
  /**
   * If true, the icon label will be shown on mobile hamburger menu
   */
  onMobileMenu?: boolean;
  testId?: string;
}

export interface HeaderProps extends BaseProps {
  /**
   * Larger img, aligned to left
   */
  logo: React.ReactNode;
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
  /**
   * Called when click on hamburger icon button on mobile
   */
  onOpen?: () => void;
  testId?: string;
}
