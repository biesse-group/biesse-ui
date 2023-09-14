import { type Meta, type StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import styled from "styled-components";

import { Icon } from "~components/Icon";
import { BackgroundDecorator } from "~stories/decorators";

import { Input } from "./Input";

export default {
  title: "Inputs/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {},
  },
  argTypes: {
    onChange: {
      control: false,
    },
    error: {
      type: "boolean",
    },
  },
  decorators: [
    (Story, { args }) => (
      <BackgroundDecorator background={args.shadow === "light" ? "light" : "primary"}>
        <Story />
      </BackgroundDecorator>
    ),
  ],
} as Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

export const DarkBackground: Story = {
  args: {
    placeholder: "Name",
    shadow: "dark",
  },
};

export const LightBackground: Story = {
  args: {
    ...DarkBackground.args,
    shadow: "light",
    border: true,
  },
};

export const WithStartDecoration: Story = {
  args: {
    ...DarkBackground.args,
    startDecoration: (
      <Icon color="primary" name="chevron-right" size="xs" style={{ marginLeft: 20 }} />
    ),
  },
};

export const WithEndDecoration: Story = {
  args: {
    ...DarkBackground.args,
    placeholder: "Cosa cerchi?",
    endDecoration: <Icon color="primary" name="search" size="24px" style={{ marginRight: 20 }} />,
  },
};

const StyledSubmitIcon = styled(Icon)`
  margin-right: 10px;
  :hover {
    cursor: pointer;
  }
`;

export const Filled: Story = {
  args: {
    ...DarkBackground.args,
    testId: "input",
    endDecoration: ({ value }) => (
      <StyledSubmitIcon
        data-testId="submit"
        color="primary"
        name="chevron-right"
        size="24px"
        onClick={() => alert(`value is: "${value}"`)}
      />
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByTestId("input"), "John Doe", { delay: 100 });
    await userEvent.click(canvas.getByTestId("submit"));
  },
};

export const WithError: Story = {
  args: {
    ...DarkBackground.args,
    error: true,
    defaultValue: "An invalid value",
  },
};
