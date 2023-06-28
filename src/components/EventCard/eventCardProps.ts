import type dayjs from "dayjs";

import type { BaseProps } from "~components/baseProps";

export interface EventCardProps extends BaseProps {
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
   * Event location description
   */
  location?: string;
  /**
   * Description located under the title
   */
  description?: string | JSX.Element;
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
