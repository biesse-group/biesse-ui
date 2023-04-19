import { Meta, StoryObj } from "@storybook/react";

import { Button, HorizontalCard, Icon } from "../components";

export default {
  title: "Cards/HorizontalCard",
  component: HorizontalCard,
  tags: ["autodocs"],
  argTypes: {
    actions: {
      control: false,
    },
  },
} as Meta<typeof HorizontalCard>;

type Story = StoryObj<typeof HorizontalCard>;

export const Default: Story = {
  args: {
    icon: "fast-repair",
    title: "Fast repair",
    description:
      "Lorem ipsum dolor sit amet, con sectetadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    actions: (
      <Button variant="outline" size="small">
        More...
      </Button>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 300 }}>
        <Story />
      </div>
    ),
  ],
};

export const WithCustomIcon: Story = {
  args: {
    icon: <Icon name="picture" />,
    title: "Fast repair",
    description:
      "Lorem ipsum dolor sit amet, con sectetadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    actions: (
      <Button variant="outline" size="small">
        More...
      </Button>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 300 }}>
        <Story />
      </div>
    ),
  ],
};

export const WithImage: Story = {
  args: {
    ...Default.args,
    title: "Spare parts",
    icon: "spare-parts",
    image: (
      <div
        style={{
          backgroundImage: 'url("https://dummyimage.com/400x600/c0c0c0/fff")',
          backgroundSize: "cover",
          backgroundPosition: "center center",
          width: "100%",
          height: "100%",
        }}
      />
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 600 }}>
        <Story />
      </div>
    ),
  ],
};

export const HoverState: Story = {
  decorators: [...WithImage.decorators],
  args: WithImage.args,
  parameters: {
    pseudo: {
      hover: true,
    },
  },
};
