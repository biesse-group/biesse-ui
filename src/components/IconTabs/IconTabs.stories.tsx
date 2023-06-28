import { type Meta, type StoryObj } from "@storybook/react";
import { type FC, useState } from "react";

import { IconTabs, type IconTabsProps } from "./IconTabs";

const tabs: IconTabsProps["tabs"] = [
  {
    id: "all",
    ariaLabel: "Tutte",
    icon: "picture",
  },
  {
    id: "corporate",
    ariaLabel: "Corporate",
    icon: "video-pill",
  },
];

const IconTabsWrapper: FC<IconTabsProps> = (props) => {
  const [selected, setSelected] = useState(tabs[0].id);

  return <IconTabs {...props} onSelect={setSelected} selected={selected} />;
};

const meta: Meta<typeof IconTabs> = {
  component: IconTabs,
  title: "Layout/IconTabs",
  tags: ["autodocs"],
  argTypes: {
    selected: {
      control: false,
    },
  },
  render: (args) => <IconTabsWrapper {...args} />,
};

export default meta;

type Story = StoryObj<typeof IconTabs>;

export const Vertical: Story = {
  args: {
    tabs,
    variant: "vertical",
  },
};

export const Horizontal: Story = {
  ...Vertical,
  args: {
    ...Vertical.args,
    variant: "horizontal",
  },
};
