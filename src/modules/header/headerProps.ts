import { ReactNode } from "react";

import { IconName } from "../../icons/IconProps";

export interface NavIconItemProps {
  /**
   * Small text next to icon
   */
  label: string;
  /**
   * Icon from gallery
   */
  icon: IconName;
  /**
   * Link to the ref page
   */
  url: string;
  /**
   * Transparent background version or colored bg version?
   */
  version: HeaderProps["version"];
}

export interface HeaderProps {
  /**
   * Larger img, aligned to left
   */
  logo: ReactNode;
  /**
   * Collection of navigation icons
   */
  navIcons?: Omit<NavIconItemProps, "version">[];
  /**
   * Collection of navigation links
   * Smaller text, under the main banner
   */
  navLinks?: { label: string; url: string }[];
  /**
   * Transparent background version or colored bg version?
   */
  version: "transparent" | "colored";
}
