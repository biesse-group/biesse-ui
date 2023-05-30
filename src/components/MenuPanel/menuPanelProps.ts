export type MenuPanelItem = {
  /**
   * Menu item label
   */
  label?: string;
  /**
   * Menu item icon (shown on the left)
   */
  icon?: JSX.Element;
  onClick?: () => void;
  /**
   * Whether the item is a divider (will not consider other arguments)
   */
  divider?: boolean;
  /**
   * Whether the item has smaller text
   *
   * **Note:** At the moment this is supported only by `dark` menu variant
   */
  small?: boolean;
};

export type MenuPanelProps = {
  className?: string;
  /**
   * Array of menu items
   */
  items: MenuPanelItem[];
  /**
   * Menu color and size variant
   */
  variant?: "primary" | "secondary" | "light" | "white" | "dark";
  /**
   * Menu panel width
   */
  width?: string;
  /**
   * Menu panel items title
   */
  title?: string;
  /**
   * Extra component shown above title and items
   */
  extra?: JSX.Element;
  /**
   * Panel close button click callback
   */
  onClose?: () => void;
};
