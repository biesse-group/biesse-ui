import { type Meta, type StoryObj } from "@storybook/react";
import styled from "styled-components";

import { BackgroundDecorator } from "~stories/decorators";

import { Breadcrumb } from "./Breadcrumb";

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
    items: [
      {
        path: "/",
        label: "Famiglie di prodotto",
      },
      {
        path: "/",
        label: "Elettromandrino ATC",
      },
      {
        path: "/",
        label: "ES3 Line",
      },
      {
        path: "/",
        label: "ES327",
      },
    ],
    renderLink: (path, children) => <Link href={path}>{children}</Link>,
  },
};

export const OnPrimary: Story = {
  ...Default,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <BackgroundDecorator background="primary" maxWidth="100%">
        {Story()}
      </BackgroundDecorator>
    ),
  ],
};

export const OnSecondary: Story = {
  ...OnPrimary,
  decorators: [
    (Story) => (
      <BackgroundDecorator background="secondary" maxWidth="100%">
        {Story()}
      </BackgroundDecorator>
    ),
  ],
};

export const Wrap: Story = {
  ...OnPrimary,
  decorators: [
    (Story) => (
      <BackgroundDecorator background="secondary" maxWidth="380px">
        {Story()}
      </BackgroundDecorator>
    ),
  ],
};
