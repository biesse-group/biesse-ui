export interface IconProps {
  /**
   * Id of the icon you want to use
   */
  name: IconName;
  /**
   * Which from the default sizes of the icon you want to use
   */
  size?: "small" | "medium" | "large";
}

// Must be update each time a new icon is inserted in the library
export type IconName = "search" | "placeholder";
