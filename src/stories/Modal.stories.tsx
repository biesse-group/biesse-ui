import { Meta, StoryObj } from "@storybook/react";
import { FC, useState } from "react";

import { Button, Modal, ModalProps, Text, VideoPlayer } from "../components";

export default {
  title: "Dialogs/Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: false,
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 500 }}>
        <Story />
      </div>
    ),
  ],
  render: (args, context) => (
    <ModalTemplate {...args} buttonLabel={context.parameters.buttonLabel || "Open modal"} />
  ),
} as Meta<typeof Modal>;

const ModalTemplate: FC<ModalProps & { buttonLabel: string }> = ({
  buttonLabel,
  ...modalProps
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)} variant="primary">
        {buttonLabel || "Open modal"}
      </Button>
      <Modal {...modalProps} onCloseAction={() => setOpen(false)} isShown={open} />
    </div>
  );
};

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    children: <Text color="light">I am the modal content</Text>,
  },
};

export const WithVideo: Story = {
  args: {
    children: (
      <VideoPlayer
        variant="fit"
        autoPlay={true}
        url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
      />
    ),
  },
  parameters: {
    buttonLabel: "Play video",
  },
};
