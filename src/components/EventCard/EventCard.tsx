import { type FC, type PropsWithChildren } from "react";

import { type EventCardProps } from "./eventCardProps";
import { HeroEventCard } from "./HeroEventCard";
import { PrimaryEventCard } from "./PrimaryEventCard";
import { SecondaryEventCard } from "./SecondaryEventCard";

const renderCardVariant = (
  variant: EventCardProps["variant"],
  props: Omit<EventCardProps, "variant">
) => {
  switch (variant) {
    case "hero":
      return <HeroEventCard {...props} />;
    case "secondary":
      return <SecondaryEventCard {...props} />;
    default:
      return <PrimaryEventCard {...props} />;
  }
};

export const EventCard: FC<PropsWithChildren<EventCardProps>> = ({ variant, ...props }) => {
  return renderCardVariant(variant, { ...props });
};
