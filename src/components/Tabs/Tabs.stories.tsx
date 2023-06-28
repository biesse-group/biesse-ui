import { type Meta, type StoryObj } from "@storybook/react";
import { type FC, useState } from "react";

import { Tabs, type TabsProps } from "./Tabs";

const tabs: TabsProps["tabs"] = [
  {
    id: "all",
    label: "Tutte",
  },
  {
    id: "corporate",
    label: "Corporate",
  },
  {
    id: "products",
    label: "Prodotti",
  },
  {
    id: "events",
    label: "Eventi",
  },
  {
    id: "exhibitions",
    label: "Fiere",
  },
];

const TabsWrapper: FC<TabsProps> = (props) => {
  const [selected, setSelected] = useState(tabs[0].id);

  return <Tabs {...props} onSelect={setSelected} selected={selected} />;
};

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  title: "Layout/Tabs",
  tags: ["autodocs"],
  argTypes: {
    selected: {
      control: false,
    },
  },
  render: (args) => <TabsWrapper {...args} />,
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    tabs,
  },
};
