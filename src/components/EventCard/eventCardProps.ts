import dayjs from "dayjs";

export interface EventCardProps {
  /**
   * Optional component class name
   */
  className?: string;
  /**
   * Title locate on top of the card
   */
  title: string;
  /**
   * Starting date of the event
   */
  startDate: dayjs.Dayjs;
  /**
   * Ending date of the event
   */
  endDate: dayjs.Dayjs;
  /**
   * Description located under the title
   */
  description?: string | JSX.Element;
  /**
   * If undefined, no ellipsis will happen
   */
  descriptionMaxCharacters?: number;
  /**
   * Link component overlay on the card left side.
   * If HeroEventCard is being used, it will be applied on the title text.
   */
  renderLink?: (child?: string) => JSX.Element;
  /**
   *
   */
  variant?: "primary" | "secondary" | "hero";
  testId?: string;
}
