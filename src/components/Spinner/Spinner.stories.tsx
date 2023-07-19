import { type Meta, type StoryObj } from "@storybook/react";
import styled from "styled-components";

import { Spinner } from "./Spinner";

const SpinnerContainer = styled.div`
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: center;
`;

export default {
  title: "Loaders/Spinner",
  component: (props) => (
    <SpinnerContainer>
      <Spinner {...props} />
    </SpinnerContainer>
  ),
} as Meta<typeof Spinner>;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {};

export const CustomProps: Story = {};
CustomProps.args = {
  color: "green",
  thickness: "12px",
  duration: 1500,
};
