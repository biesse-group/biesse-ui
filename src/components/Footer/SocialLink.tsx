import { FC } from "react";
import styled, { css } from "styled-components";

import { mqUntil } from "../../styles";
import { Icon, IconName } from "../Icon";
import { Text } from "../Text";

export interface SocialLinkProps {
  /**
   * Label next to the social link
   */
  label?: string;
  /**
   * Social network icon
   */
  socialIcon?: IconName | JSX.Element;
  /**
   * External link element, function should wrap the argument as children
   */
  renderLink?: (label: JSX.Element) => JSX.Element;
  className?: string;
}

const SocialWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;

  ${mqUntil(
    "md",
    css`
      flex-direction: row-reverse;
      justify-content: flex-end;
    `
  )}
  ${mqUntil(
    "sm",
    css`
      flex-direction: row;
      justify-content: flex-start;
    `
  )}
`;

const SocialIcon = styled(Icon)`
  margin-left: 15px;

  ${mqUntil(
    "md",
    css`
      margin-left: 0;
      margin-right: 8px;
    `
  )}
  ${mqUntil(
    "sm",
    css`
      margin-left: 15px;
      margin-right: 0;
    `
  )}
`;

export const SocialLink: FC<SocialLinkProps> = ({
  label,
  socialIcon,
  renderLink = (children) => children,
  ...props
}) => {
  const icon =
    typeof socialIcon === "string" ? (
      <SocialIcon name={socialIcon} size="28px" color="white" />
    ) : (
      socialIcon
    );

  return (
    <SocialWrapper {...props}>
      <Text color="light" weight="book">
        {label}
      </Text>
      {icon && renderLink?.(icon)}
    </SocialWrapper>
  );
};
