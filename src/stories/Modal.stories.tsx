import { Meta, StoryObj } from "@storybook/react";

import { Button, Modal, Text, VideoPlayer } from "../components";

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
} as Meta<typeof Modal>;

// const ModalTemplate: FC<ModalProps & { buttonLabel: string }> = ({
//   buttonLabel,
//   ...modalProps
// }) => {
//   const [open, setOpen] = useState(false);
//   return (
//     <div>
//       <Button onClick={() => setOpen(true)} variant="primary">
//         {buttonLabel || "Open modal"}
//       </Button>
//       <Modal {...modalProps} onClose={() => setOpen(false)} isOpen={open} />
//     </div>
//   );
// };

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    renderTrigger: (props) => (
      <Button variant="primary" {...props}>
        Open modal
      </Button>
    ),
    children: <Text color="light">I am the modal content</Text>,
  },
};

export const WithVideo: Story = {
  args: {
    renderTrigger: (props) => (
      <Button variant="primary" {...props}>
        Play video
      </Button>
    ),
    children: (
      <VideoPlayer
        variant="fit"
        autoPlay={true}
        url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
      />
    ),
  },
};
