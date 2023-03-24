import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button, IconCard } from "../components";

export default {
  title: "Cards/IconCard",
  component: IconCard,
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
} as ComponentMeta<typeof IconCard>;

const Template: ComponentStory<typeof IconCard> = (args) => <IconCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: "sustainability",
  title: "Sustainability",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  action: <Button variant="outline" children="Action" testId="action-button" />,
};
