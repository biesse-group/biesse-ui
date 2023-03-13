import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Logo, PartnerCarousel, PartnerCarouselProps } from "../components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Slideshow/PartnerCarousel",
  component: PartnerCarousel,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: 3000 }}>
        <Story />
      </div>
    ),
  ],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof PartnerCarousel>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PartnerCarousel> = (args) => <PartnerCarousel {...args} />;

const defaultArgs: PartnerCarouselProps = {
  title: "Partners",
  partners: [
    <Logo name="Kuka" color="#f25c19" width="300px" />,
    <Logo name="Kuka" color="#f25c19" width="300px" />,
    <Logo name="Kuka" color="#f25c19" width="300px" />,
    <Logo name="Kuka" color="#f25c19" width="300px" />,
    <Logo name="Kuka" color="#f25c19" width="300px" />,
    <Logo name="Kuka" color="#f25c19" width="300px" />,
    <Logo name="Kuka" color="#f25c19" width="300px" />,
    <Logo name="Kuka" color="#f25c19" width="300px" />,
    <Logo name="Kuka" color="#f25c19" width="300px" />,
  ],
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  ...defaultArgs,
};
