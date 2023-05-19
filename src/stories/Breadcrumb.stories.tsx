import { Meta, StoryObj } from "@storybook/react";
import styled from "styled-components";

import { Breadcrumb } from "../components";
import { BackgroundDecorator } from "./decorators";

const meta: Meta<typeof Breadcrumb> = {
  title: "Layout/Breadcrumb",
  component: Breadcrumb,
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

const Link = styled.a`
  color: inherit;
  display: inline-flex;
`;

export const Default: Story = {
  args: {
    items: ["Famiglie di prodotto", "Elettromandrino ATC", "ES3 Line", "ES327"],
    renderLink: (children) => <Link href="/">{children}</Link>,
  },
};

export const OnPrimary: Story = {
  ...Default,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => <BackgroundDecorator background="primary">{Story()}</BackgroundDecorator>,
  ],
};

export const OnSecondary: Story = {
  ...OnPrimary,
  decorators: [
    (Story) => <BackgroundDecorator background="secondary">{Story()}</BackgroundDecorator>,
  ],
};
