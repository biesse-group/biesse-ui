import { ComponentMeta, ComponentStory } from "@storybook/react";
import styled from "styled-components";

import { StripThreeCols, StripThreeColsProps } from "../components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Layout/StripThreeCols",
  component: StripThreeCols,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [(Story, { args }) => <div style={{ margin: "30px 0" }}>{Story()}</div>],
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

const items: StripThreeColsProps["items"] = [
  <SampleItem key={1}>Item 1</SampleItem>,
  <SampleItem key={2}>Item 2</SampleItem>,
  <SampleItem key={3}>Item 3</SampleItem>,
];

export const MainItemLarge = Template.bind({});
MainItemLarge.args = {
  title: "Lorem ipsum dolor",
  variant: "2-1-1",
  mobileBehavior: "wrap",
  items,
};

export const MainItemLargeTwoItems = Template.bind({});
MainItemLargeTwoItems.args = {
  title: "Lorem ipsum dolor",
  variant: "2-1-1",
  mobileBehavior: "wrap",
  items: items.slice(0, 2) as StripThreeColsProps["items"],
};

export const SecondaryItemsLarge = Template.bind({});
SecondaryItemsLarge.args = {
  title: "Lorem ipsum dolor",
  variant: "1-2-2",
  mobileBehavior: "wrap",
  items,
};

export const SecondaryItemsLargeTwoItems = Template.bind({});
SecondaryItemsLargeTwoItems.args = {
  title: "Lorem ipsum dolor",
  variant: "1-2-2",
  mobileBehavior: "wrap",
  items: items.slice(0, 2) as StripThreeColsProps["items"],
};

export const EqualSizeItems = Template.bind({});
EqualSizeItems.args = {
  title: "Lorem ipsum dolor",
  variant: "1-1-1",
  mobileBehavior: "wrap",
  items,
};

export const OneItem = Template.bind({});
OneItem.args = {
  title: "Lorem ipsum dolor",
  variant: "1-1-1",
  mobileBehavior: "wrap",
  items: items.slice(0, 1) as StripThreeColsProps["items"],
};

export const TabletWrap = Template.bind({});
TabletWrap.args = {
  title: "Lorem ipsum",
  items,
};
TabletWrap.parameters = {
  viewport: {
    defaultViewport: "ipad",
  },
};

export const MobileWrap = Template.bind({});
MobileWrap.args = {
  title: "Lorem ipsum",
  items,
};
MobileWrap.parameters = {
  viewport: {
    defaultViewport: "iphone12",
  },
};

export const MobileScroll = Template.bind({});
MobileScroll.args = {
  title: "Lorem ipsum",
  mobileBehavior: "scroll",
  items,
};
MobileScroll.parameters = {
  viewport: {
    defaultViewport: "iphone12",
  },
};
