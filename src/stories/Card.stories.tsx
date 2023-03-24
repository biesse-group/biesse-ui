import { ComponentMeta, ComponentStory } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";

import { Button, Card, Tag, Text } from "../components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Cards/Card",
  component: Card,
  argTypes: {
    children: {
      control: false,
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
    (Story) => (
      <div style={{ maxWidth: 500 }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

const defaultArgs = {
  title: "Example card",
  children: (
    <Text size="md">
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
      laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto
      beatae vitae dicta sunt, explicabo."
    </Text>
  ),
  image: <img src="https://dummyimage.com/600x400/ccc/fff.png" alt="dummy" />,
};

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs,
};

export const WithPreTitle = Template.bind({});
WithPreTitle.args = {
  ...defaultArgs,
  preTitle: "01 gennaio 2023, Location",
};

export const WithButton = Template.bind({});
WithButton.args = {
  ...defaultArgs,
  action: <Button variant="outline" children="Action" testId="action-button" />,
};

WithButton.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByTestId("action-button"));
};

export const WithTagsAndButton = Template.bind({});
WithTagsAndButton.args = {
  ...defaultArgs,
  action: <Button variant="outline" children="Action" testId="action-button" />,
  tags: [
    <Tag key="1" color="stone" icon="material-stone" border>
      Stone
    </Tag>,
    <Tag key="2" color="wood" icon="material-wood" border>
      Wood
    </Tag>,
  ],
};
