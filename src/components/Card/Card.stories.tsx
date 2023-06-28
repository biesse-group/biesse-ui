import { type Meta, type StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";

import { Button } from "~components/Button";
import { Tag } from "~components/Tag";

import { Card } from "./Card";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Cards/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    children: {
      type: "string",
    },
    action: {
      control: false,
    },
    image: {
      control: false,
    },
    tags: {
      control: false,
    },
  },
  decorators: [
    (Story, { args }) => (
      <div style={args.direction !== "horizontal" ? { maxWidth: 500 } : undefined}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Card>;

type Story = StoryObj<typeof Card>;

const defaultArgs = {
  title: "Example card",
  children:
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.",
  image: (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: 'url("https://dummyimage.com/1920x1080/ccc/fff.png") center center',
        backgroundSize: "cover",
      }}
    />
  ),
};

const tags = [
  <Tag key="1" color="stone" icon="material-stone" border>
    Stone
  </Tag>,
  <Tag key="2" color="wood" icon="material-wood" border>
    Wood
  </Tag>,
];
const preTitle = "01 gennaio 2023, Location";
const action = (
  <Button variant="outline" testId="action-button">
    Action
  </Button>
);

export const Default: Story = {
  args: defaultArgs,
};

export const WithEllipsis: Story = {
  args: {
    ...defaultArgs,
    titleLines: 3,
    title:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.",
  },
};

export const WithPreTitle: Story = {
  args: {
    ...defaultArgs,
    preTitle,
  },
};

export const WithButton: Story = {
  args: {
    ...defaultArgs,
    action,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId("action-button"));
  },
};

export const WithTags: Story = {
  args: {
    ...defaultArgs,
    tags,
  },
};

export const Horizontal: Story = {
  args: {
    ...defaultArgs,
    tags,
    action,
    direction: "horizontal",
  },
};

export const CompleteExample: Story = {
  args: {
    ...defaultArgs,
    preTitle,
    tags,
    action,
  },
};
