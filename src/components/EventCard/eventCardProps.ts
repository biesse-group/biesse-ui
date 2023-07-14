import type dayjs from "dayjs";

import type { BaseProps } from "~components/baseProps";
import type { TitleProps } from "~components/Title";

export interface EventCardProps extends BaseProps {
  /**
   * Title locate on top of the card
   */
  title: string | JSX.Element;
  titleTag?: TitleProps["variant"];
  /**
   * Starting date of the event
   */
  startDate: dayjs.Dayjs;
  /**
   * Ending date of the event
   */
  endDate: dayjs.Dayjs;
  /**
   * Event location description
   */
  location?: string;
  /**
   * Description located under the title
   */
  description?: string | JSX.Element;
  /**
   * Card style variant
   */
  variant?: "primary" | "secondary" | "hero";
  onClick?: () => void;
  testId?: string;
}
