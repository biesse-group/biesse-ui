import { Meta, StoryFn } from "@storybook/react";
import dayjs from "dayjs";
import "dayjs/locale/it";

import { Button, EventCard } from "../components";

export default {
  title: "Cards/EventCard",
  component: EventCard,
  argTypes: {
    children: {
      control: false,
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 600 }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof EventCard>;

const Template: StoryFn<typeof EventCard> = (args) => {
  const { startDate, endDate, ...otherArgs } = args;

  return <EventCard startDate={dayjs(startDate)} endDate={dayjs(endDate)} {...otherArgs} />;
};

const defaultArgs = {
  title: "Lorem Ipsum",
  startDate: dayjs(new Date(`january 24, 2023`)),
  endDate: dayjs(new Date(`february 10, 2023`)),
  description:
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa...",
  children: (
    <Button variant="outline" size="small">
      Get free ticket
    </Button>
  ),
};

export const Primary = Template.bind({});
Primary.args = {
  ...defaultArgs,
};

export const Translated = Template.bind({});
Translated.args = {
  ...defaultArgs,
  startDate: dayjs(new Date(`january 24, 2023`)).locale("it"),
  endDate: dayjs(new Date(`february 10, 2023`)).locale("it"),
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

export const Hero = Template.bind({});
Hero.args = {
  ...defaultArgs,
  variant: "hero",
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...defaultArgs,
  variant: "secondary",
};
