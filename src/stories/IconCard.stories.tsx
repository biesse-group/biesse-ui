import { Meta, StoryFn } from "@storybook/react";

import { Button, IconCard } from "../components";

export default {
  title: "Cards/IconCard",
  component: IconCard,
  tags: ["autodocs"],
  argTypes: {
    actions: {
      control: false,
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 300 }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof IconCard>;

const Template: StoryFn<typeof IconCard> = (args) => <IconCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: "sustainability",
  title: "Sustainability",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  action: <Button variant="outline" children="Action" testId="action-button" />,
};
