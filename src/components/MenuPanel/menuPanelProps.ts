export interface MenuPanelItem {
  /**
   * Unique item ID
   */
  id: string;
  /**
   * Menu item label
   */
  label?: string;
  /**
   * Menu item icon (shown on the left)
   */
  icon?: React.ReactNode;
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
}

export interface MenuPanelProps {
  className?: string;
  /**
   * Menu active item ID
   */
  activeItem?: string;
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
  extra?: React.ReactNode;
  /**
   * Panel close button click callback
   */
  onClose?: () => void;
  /**
   * Panel back button click callback
   */
  onBack?: () => void;
}
