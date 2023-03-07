import { FC } from "react";
import styled, { css } from "styled-components";

import { mqUntil } from "../../styles/media-queries";
import { Icon, IconName } from "../Icon";
import { Text } from "../Text";

export interface SocialLinkProps {
  /**
   * Label next to the social link
   */
  label?: string;
  socialIcon?: IconName;
  /**
   * External link element,
   * function should wrap the argument as children
   */
  renderLink?: (label: JSX.Element) => JSX.Element;
}

const SocialWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  > span {
    margin-right: 12px;
  }

  ${mqUntil(
    "md",
    css`
      display: none;
    `
  )}
`;

export const SocialLink: FC<SocialLinkProps> = ({
  label,
  socialIcon,
  renderLink = (children) => children,
  ...props
}) => {
  return (
    <SocialWrapper {...props}>
      <Text color="light" weight="book">
        {label}
      </Text>
      {socialIcon && renderLink?.(<Icon name={socialIcon} size="28px" color="light" />)}
    </SocialWrapper>
  );
};
