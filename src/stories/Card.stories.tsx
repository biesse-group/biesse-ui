import { Meta, StoryFn } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";

import { Button, Card, Tag } from "../components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Cards/Card",
  component: Card,
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

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Card> = (args) => <Card {...args} />;

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
const action = <Button variant="outline" children="Action" testId="action-button" />;

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs,
};

export const WithEllipsis = Template.bind({});
WithEllipsis.args = {
  ...defaultArgs,
  titleLines: 3,
  title:
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.",
};

export const WithPreTitle = Template.bind({});
WithPreTitle.args = {
  ...defaultArgs,
  preTitle,
};

export const WithButton = Template.bind({});
WithButton.args = {
  ...defaultArgs,
  action,
};

WithButton.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByTestId("action-button"));
};

export const WithTags = Template.bind({});
WithTags.args = {
  ...defaultArgs,
  tags,
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  ...defaultArgs,
  tags,
  action,
  direction: "horizontal",
};

export const CompleteExample = Template.bind({});
CompleteExample.args = {
  ...defaultArgs,
  preTitle,
  tags,
  action,
};
