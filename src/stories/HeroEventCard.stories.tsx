import { ComponentMeta, ComponentStory } from "@storybook/react";
import dayjs from "dayjs";
import "dayjs/locale/it";

import { HeroEventCard } from "../components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Cards/HeroEventCard",
  component: HeroEventCard,
} as ComponentMeta<typeof HeroEventCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HeroEventCard> = (args) => <HeroEventCard {...args} />;

const defaultArgs = {
  title: "Titolo della fiera in arrivo",
  startDate: dayjs(new Date(`december 17, 1995 03:24:00`)),
  endDate: dayjs(new Date(`march 20, 2022 03:24:00`)),
  description: "Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor",
  link: (
    <a href="/">
      <div style={{ height: "100%", width: "100%" }} />
    </a>
  ),
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  ...defaultArgs,
};

export const Translated = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Translated.args = {
  ...defaultArgs,
  startDate: dayjs(new Date(`december 17, 1995 03:24:00`)).locale("it"),
  endDate: dayjs(new Date(`march 20, 2022 03:24:00`)).locale("it"),
};
