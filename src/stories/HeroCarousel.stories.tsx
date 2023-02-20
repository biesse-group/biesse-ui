import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { CSSProperties } from "react";

import { HeroCarousel, HeroCarouselSlide } from "../modules/HeroCarousel";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Modules/HeroCarousel",
  component: HeroCarousel,
  parameters: {
    layout: "fullscreen",
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" }
  },
} as ComponentMeta<typeof HeroCarousel>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HeroCarousel> = (args) => <HeroCarousel {...args} />;

const style: CSSProperties = {
  width: "100%",
  height: "auto",
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
          <img
            style={style}
            src="https://dummyimage.com/1920x1080/c7c7c7/ffffff.png&text=Slide+1"
            alt="Slide 1"
          />
        ),
      },
      {
        title: "Quisque malesuada placerat nisl",
        description:
          "Suspendisse non nisl sit amet velit hendrerit rutrum. Phasellus volutpat, metus eget egestas mollis, lacus lacus blandit dui, id egestas quam mauris ut lacus. Nunc interdum lacus sit amet orci. Ut leo.",
        renderImage: () => (
          <img
            style={style}
            src="https://dummyimage.com/1920x1080/c7c7c7/ffffff.png&text=Slide+2"
            alt="Slide 2"
          />
        ),
      },
      {
        title: "Fusce vel dui",
        description:
          "Nam at tortor in tellus interdum sagittis. Morbi ac felis. Nam commodo suscipit quam. Fusce fermentum.",
        renderImage: () => (
          <img
            style={style}
            src="https://dummyimage.com/1920x1080/c7c7c7/ffffff.png&text=Slide+3"
            alt="Slide 3"
          />
        ),
      },
    ] as HeroCarouselSlide[],
  }
);
