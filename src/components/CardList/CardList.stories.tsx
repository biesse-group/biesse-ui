import { type Meta, type StoryObj } from "@storybook/react";

import { CardList } from "./CardList";
import { CardListItem, type CardListItemProps } from "./CardListItem";

const meta: Meta<typeof CardList> = {
  title: "Cards/CardList",
  component: CardList,
  decorators: [(Story) => <div style={{ maxWidth: 500 }}>{Story()}</div>],
};

export default meta;

type Story = StoryObj<typeof CardList>;

const props: Omit<CardListItemProps, "title"> = {
  image: (
    <div
      style={{
        background: `url(${"https://dummyimage.com/600x600/dedede/aaa.png"})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        width: "100%",
        height: "100%",
      }}
    />
  ),
  buttonLabel: "Read more",
  preTitle: "January 10, 2023, Location",
};

export const Default: Story = {
  args: {
    title: "Related articles",
    children: (
      <>
        <CardListItem title="Pellentesque auctor neque nec urna" {...props} />
        <CardListItem title="Duis leo. Donec mollis hendrerit risus" {...props} />
        <CardListItem
          title="Morbi ac felis. Aliquam eu nunc. Vivamus consectetuer hendrerit lacus"
          {...props}
        />
      </>
    ),
  },
};
