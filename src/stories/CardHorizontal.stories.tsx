import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button, CardHorizontal, Icon } from "../components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Cards/CardHorizontal",
  component: CardHorizontal,
} as ComponentMeta<typeof CardHorizontal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CardHorizontal> = (args) => <CardHorizontal {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  icon: "fast-repair",
  title: "Fast repair",
  description:
    "Lorem ipsum dolor sit amet, con sectetadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  actions: (
    <Button variant="outline" size="small">
      More...
    </Button>
  ),
};
Default.decorators = [
  (Story) => (
    <div style={{ maxWidth: 300 }}>
      <Story />
    </div>
  ),
];

export const WithCustomIcon = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithCustomIcon.args = {
  icon: <Icon name="picture" size="lg" />,
  title: "Fast repair",
  description:
    "Lorem ipsum dolor sit amet, con sectetadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  actions: (
    <Button variant="outline" size="small">
      More...
    </Button>
  ),
};
WithCustomIcon.decorators = [
  (Story) => (
    <div style={{ maxWidth: 300 }}>
      <Story />
    </div>
  ),
];

export const WithImage = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithImage.args = {
  ...Default.args,
  title: "Spare parts",
  icon: "spare-parts",
  image: (
    <div
      style={{
        backgroundImage: 'url("https://dummyimage.com/400x600/c0c0c0/fff")',
        backgroundSize: "cover",
        backgroundPosition: "center center",
        width: "100%",
        height: "100%",
      }}
    />
  ),
};
WithImage.decorators = [
  (Story) => (
    <div style={{ maxWidth: 600 }}>
      <Story />
    </div>
  ),
];

export const HoverState = Template.bind({});
HoverState.decorators = [...WithImage.decorators];
HoverState.args = {
  ...WithImage.args,
};
HoverState.parameters = {
  pseudo: {
    hover: true,
  },
};
