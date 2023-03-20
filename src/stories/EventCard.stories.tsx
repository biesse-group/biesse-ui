import { ComponentMeta, ComponentStory } from "@storybook/react";
import dayjs from "dayjs";
import "dayjs/locale/it";

import { EventCard, Input, Text } from "../components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Cards/EventCard",
  component: EventCard,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 600 }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    controls: {
      exclude: ["children", "description", "renderLink"],
    },
  },
} as ComponentMeta<typeof EventCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof EventCard> = (args) => {
  const { startDate, endDate, ...otherArgs } = args;

  return <EventCard startDate={dayjs(startDate)} endDate={dayjs(endDate)} {...otherArgs} />;
};

const defaultArgs = {
  title: "Lore Ipsum",
  startDate: dayjs(new Date(`december 17, 1995 03:24:00`)),
  endDate: dayjs(new Date(`march 20, 2022 03:24:00`)),
  description:
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa...",
  children: (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Text size="lg" color="primary" weight="bold">
        INPUT TITLE
      </Text>
      <Input type="text" border={true} />
    </div>
  ),
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  ...defaultArgs,
};

export const Translated = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Translated.args = {
  ...defaultArgs,
  startDate: dayjs(new Date(`december 17, 1995 03:24:00`)).locale("it"),
  endDate: dayjs(new Date(`march 20, 2022 03:24:00`)).locale("it"),
};

export const HoverState = Template.bind({});
HoverState.args = {
  ...defaultArgs,
};
HoverState.parameters = {
  pseudo: {
    hover: true,
  },
};
