export type MenuPanelItem = {
  label: string;
  icon?: JSX.Element;
  onClick?: () => void;
};

export type MenuPanelProps = {
  className?: string;
  items: MenuPanelItem[];
  variant?: "primary" | "secondary" | "light" | "white" | "dark";
  width?: string;
  title?: string;
  extra?: JSX.Element;
  onClose?: () => void;
};
