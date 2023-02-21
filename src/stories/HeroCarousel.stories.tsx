import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FC } from "react";

import { HeroCarousel, HeroCarouselSlide } from "../components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Slideshow/HeroCarousel",
  component: HeroCarousel,
  parameters: {
    layout: "fullscreen",
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

export const Default = Template.bind(
  {},
  {
    slides: [
      {
        title: "Etiam sit amet orci eget",
        description:
          "Phasellus ullamcorper ipsum rutrum nunc. Sed cursus turpis vitae tortor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
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
    ] as HeroCarouselSlide[],
  }
);
