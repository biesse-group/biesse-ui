import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button, IconCard, IconCardProps } from "../components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Cards/IconCard",
  component: IconCard,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 300 }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    controls: {
      exclude: ["action"],
    },
  },
} as ComponentMeta<typeof IconCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof IconCard> = (args) => <IconCard {...args} />;

const defaultArgs: IconCardProps = {
  icon: "sustainability",
  title: "Sustainability",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  action: <Button variant="outline" children="Action" testId="action-button" />,
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  ...defaultArgs,
};
