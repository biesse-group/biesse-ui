import { type Meta, type StoryObj } from "@storybook/react";
import styled from "styled-components";

import { Spinner } from "./Spinner";

const SpinnerContainer = styled.div`
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: center;
`;

const meta: Meta<typeof Spinner> = {
  title: "Loaders/Spinner",
  component: (props) => (
    <SpinnerContainer>
      <Spinner {...props} />
    </SpinnerContainer>
  ),
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {};

export const CustomProps: Story = {};
CustomProps.args = {
  color: "green",
  thickness: "12px",
  duration: 1500,
};
