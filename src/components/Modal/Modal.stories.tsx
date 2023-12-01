import { type Meta, type StoryObj } from "@storybook/react";
import { type FC, type PropsWithChildren } from "react";

import { Button } from "~components/Button";
import { Text } from "~components/Text";
import { VideoPlayer } from "~components/VideoPlayer";

import { Modal, type ModalProps } from "./Modal";
import { useModal } from "./useModal";

const ModalContainer: FC<
  PropsWithChildren<ModalProps> & {
    label?: string;
    onClose?: () => void;
    onOpen?: () => void;
  }
> = ({ children, label, onClose, onOpen }) => {
  const { isOpen, open, close } = useModal({ onOpen, onClose });
  return (
    <div style={{ maxWidth: 500 }}>
      <Button variant="primary" onClick={open}>
        {label ?? "Open modal"}
      </Button>
      <Modal isOpen={isOpen} close={close}>
        {children}
      </Modal>
    </div>
  );
};

const meta: Meta<typeof ModalContainer> = {
  title: "Dialogs/Modal",
  component: ModalContainer,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof ModalContainer>;

export const Default: Story = {
  args: {
    children: (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text color="light">I am the modal content</Text>
      </div>
    ),
  },
};

export const WithVideo: Story = {
  args: {
    label: "Play video",
    children: (
      <VideoPlayer
        variant="fit"
        autoPlay={true}
        url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
      />
    ),
  },
};
