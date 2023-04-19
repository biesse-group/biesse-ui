import { Meta, StoryObj } from "@storybook/react";
import styled from "styled-components";

import { StripThreeCols, StripThreeColsProps } from "../components";

export default {
  title: "Layout/StripThreeCols",
  component: StripThreeCols,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [(Story) => <div style={{ margin: "30px 0" }}>{Story()}</div>],
} as Meta<typeof StripThreeCols>;

type Story = StoryObj<typeof StripThreeCols>;

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

export const MainItemLarge: Story = {
  args: {
    title: "Lorem ipsum dolor",
    variant: "2-1-1",
    mobileBehavior: "wrap",
    items,
  },
};

export const MainItemLargeTwoItems: Story = {};
MainItemLargeTwoItems.args = {
  ...MainItemLarge.args,
  items: items.slice(0, 2) as StripThreeColsProps["items"],
};

export const SecondaryItemsLarge: Story = {};
SecondaryItemsLarge.args = {
  ...MainItemLarge.args,
  variant: "1-2-2",
};

export const SecondaryItemsLargeTwoItems: Story = {};
SecondaryItemsLargeTwoItems.args = {
  ...SecondaryItemsLarge.args,
  items: items.slice(0, 2) as StripThreeColsProps["items"],
};

export const EqualSizeItems: Story = {};
EqualSizeItems.args = {
  ...MainItemLarge.args,
  variant: "1-1-1",
};

export const OneItem: Story = {};
OneItem.args = {
  ...EqualSizeItems.args,
  items: items.slice(0, 1) as StripThreeColsProps["items"],
};

export const TabletWrap: Story = {
  ...MainItemLarge,
  parameters: {
    viewport: {
      defaultViewport: "ipad",
    },
  },
};

export const TabletMaintain: Story = {
  ...TabletWrap,
  args: {
    ...TabletWrap.args,
    tabletBehavior: "maintain-proportion",
  },
};

export const MobileWrap: Story = {
  ...TabletWrap,
  parameters: {
    viewport: {
      defaultViewport: "iphone12",
    },
  },
};

export const MobileScroll: Story = {
  ...MobileWrap,
  args: {
    ...MobileWrap.args,
    mobileBehavior: "scroll",
  },
};
