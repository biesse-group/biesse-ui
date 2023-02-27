import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button, EventCard, Text } from "../components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Cards/EventCard",
  component: EventCard,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 600, height: 315 }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof EventCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof EventCard> = (args) => <EventCard {...args} />;

const defaultArgs = {
  title: "Example card",
  startDate: new Date(`December 17, 1995 03:24:00`),
  endDate: new Date(`March 20, 2022 03:24:00`),
  description: (
    <Text size="md">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
      laudantium, totam rem aperiam eaque ipsa...
    </Text>
  ),
  children: <Button variant="outline" children="Action" testId="action-button" />,
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  ...defaultArgs,
};
