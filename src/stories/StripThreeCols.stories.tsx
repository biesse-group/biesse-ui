import { ComponentMeta, ComponentStory } from "@storybook/react";
import styled from "styled-components";

import { StripThreeCols } from "../components";
import { BackgroundDecorator } from "./decorators";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Layout/StripThreeCols",
  component: StripThreeCols,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "iphone12",
    },
  },
  decorators: [
    (Story, { args }) => (
      <div style={{ margin: "30px 0" }}>
        {args.variant === "primary-inverted" ? (
          <BackgroundDecorator background="primary">{Story()}</BackgroundDecorator>
        ) : (
          Story()
        )}
      </div>
    ),
  ],
} as ComponentMeta<typeof StripThreeCols>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof StripThreeCols> = (args) => <StripThreeCols {...args} />;

const SampleItem = styled.div`
  height: 300px;
  width: 100%;
  background-color: ${(props) => props.theme.color.lightGray};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Default = Template.bind({});
Default.args = {
  title: "Lorem ipsum dolor",
  items: [
    <SampleItem key={1}>Item 1</SampleItem>,
    <SampleItem key={2}>Item 2</SampleItem>,
    <SampleItem key={3}>Item 3</SampleItem>,
  ],
};

export const MobileScroll = Template.bind({});
MobileScroll.args = {
  title: "Lorem ipsum dolor",
  mobileBehavior: "scroll",
  items: [
    <SampleItem key={1}>Item 1</SampleItem>,
    <SampleItem key={2}>Item 2</SampleItem>,
    <SampleItem key={3}>Item 3</SampleItem>,
  ],
};
