import { Meta, StoryObj } from "@storybook/react";
import dayjs from "dayjs";
import "dayjs/locale/it";

import { Button, EventCard } from "../components";

export default {
  title: "Cards/EventCard",
  component: EventCard,
  tags: ["autodocs"],
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
  render: ({ startDate, endDate, ...args }) => (
    <EventCard startDate={dayjs(startDate)} endDate={dayjs(endDate)} {...args} />
  ),
} as Meta<typeof EventCard>;

type Story = StoryObj<typeof EventCard>;

export const Primary: Story = {
  args: {
    title: "Lorem Ipsum",
    startDate: dayjs(new Date(`january 24, 2023`)),
    endDate: dayjs(new Date(`february 10, 2023`)),
    variant: "primary",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa...",
    children: (
      <Button variant="outline" size="small">
        Get free ticket
      </Button>
    ),
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    variant: "secondary",
  },
};

export const Hero: Story = {
  args: {
    ...Primary.args,
    variant: "hero",
  },
};

export const Translated: Story = {
  args: {
    ...Primary.args,
    startDate: dayjs(new Date(`january 24, 2023`)).locale("it"),
    endDate: dayjs(new Date(`february 10, 2023`)).locale("it"),
  },
};

export const HoverState: Story = {
  ...Primary,
  parameters: {
    pseudo: {
      hover: true,
    },
  },
};
