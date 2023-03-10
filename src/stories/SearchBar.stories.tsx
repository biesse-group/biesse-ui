import { ComponentMeta, ComponentStory } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";

import { SearchBar } from "../components/SearchBar";
import { BackgroundDecorator } from "./decorators";

export default {
  title: "Inputs/SearchBar",
  component: SearchBar,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story, { parameters }) => (
      <BackgroundDecorator background={parameters.background || "primary"}>
        <Story />
      </BackgroundDecorator>
    ),
  ],
} as ComponentMeta<typeof SearchBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SearchBar> = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: "Search something...",
};

export const DarkBackground = Template.bind({});
DarkBackground.parameters = {
  background: "dark",
};

export const Searched = Template.bind({});
Searched.args = {
  testId: "sample-search",
};
Searched.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.type(canvas.getByTestId("sample-search"), "John Doe", { delay: 100 });
};
