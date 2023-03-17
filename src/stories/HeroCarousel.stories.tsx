import { ComponentMeta, ComponentStory } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { FC } from "react";

import { HeroCarousel, HeroCarouselSlide } from "../components";
import { sleep } from "./utils/sleep";

export default {
  title: "Slideshow/HeroCarousel",
  component: HeroCarousel,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    slides: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof HeroCarousel>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HeroCarousel> = (args) => <HeroCarousel {...args} />;

const SlideImage: FC<{ imageUrl: string }> = ({ imageUrl }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    />
  );
};

const slides: HeroCarouselSlide[] = [
  {
    title: "Focus sulla brand awareness",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    renderImage: () => (
      <SlideImage imageUrl="https://dummyimage.com/1920x1080/c7c7c7/ffffff.png&text=Slide+1" />
    ),
  },
  {
    title: "Quisque malesuada placerat nisl",
    description:
      "Suspendisse non nisl sit amet velit hendrerit rutrum. Phasellus volutpat, metus eget egestas mollis, lacus lacus blandit dui, id egestas quam mauris ut lacus. Nunc interdum lacus sit amet orci. Ut leo.",
    renderImage: () => (
      <SlideImage imageUrl="https://dummyimage.com/1920x1080/c7c7c7/ffffff.png&text=Slide+2" />
    ),
  },
  {
    title: "Fusce vel dui",
    description:
      "Nam at tortor in tellus interdum sagittis. Morbi ac felis. Nam commodo suscipit quam. Fusce fermentum.",
    renderImage: () => (
      <SlideImage imageUrl="https://dummyimage.com/1920x1080/c7c7c7/ffffff.png&text=Slide+3" />
    ),
  },
];

export const Default = Template.bind({});
Default.args = {
  slides,
};

export const AutoSlide = Template.bind({});
AutoSlide.args = {
  autoSlide: 5,
  slides,
};

export const Played = Template.bind({});
Played.args = {
  slides,
};
Played.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await sleep(2000);
  await userEvent.click(canvas.getByTestId("prev"));

  await sleep(2000);
  await userEvent.click(canvas.getByTestId("next"));

  await sleep(2000);
  await userEvent.click(canvas.getByTestId("next"));
};
