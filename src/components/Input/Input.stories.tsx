import { type Meta, type StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import styled from "styled-components";

import { Icon } from "~components/Icon";
import { BackgroundDecorator } from "~stories/decorators";

import { Input } from "./Input";

const meta: Meta<typeof Input> = {
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
};

export default meta;

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
    endDecoration: (
      <StyledSubmitIcon data-testId="submit" color="primary" name="chevron-right" size="24px" />
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
