import dayjs from "dayjs";

export interface EventCardProps {
  /**
   * Optional component class name
   */
  className?: string;
  /**
   * Title locate on top of the card
   */
  title?: string;
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
   * Link component overlay on the card left side
   */
  link?: JSX.Element;
  /**
   * Current location language
   */
  language?: Intl.LocalesArgument;
  testId?: string;
}
