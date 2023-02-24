import { ComponentMeta, ComponentStory } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";

import { Button, Card, MaterialTag, Text } from "../components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Cards/Card",
  component: Card,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 300 }}>
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
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
      laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto
      beatae vitae dicta sunt, explicabo.
    </Text>
  ),
  imageSrc: "https://dummyimage.com/600x400/ccc/fff.png",
  imageAlt: "Dummy image",
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  ...defaultArgs,
};

export const WithPreTitle = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithPreTitle.args = {
  ...defaultArgs,
  preTitle: "01 gennaio 2023, Location",
};

export const WithButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithButton.args = {
  ...defaultArgs,
  action: <Button variant="outline" children="Action" testId="action-button" />,
};

WithButton.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByTestId("action-button"));
};

export const WithTagAndButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithTagAndButton.args = {
  ...defaultArgs,
  action: <Button variant="outline" children="Action" testId="action-button" />,
  tag: <MaterialTag color="#E1523D" label="pietra" icon="material-stone" border={true} />,
};
