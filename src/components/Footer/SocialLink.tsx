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
  link?: JSX.Element;
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
const EXternalLinkWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  z-index: 1;
`;

export const SocialLink: FC<SocialLinkProps> = ({ label, socialIcon, link, ...props }) => {
  return (
    <SocialWrapper {...props}>
      <Text color="light" weight="book">
        {label}
      </Text>
      <div style={{ position: "relative" }}>
        {socialIcon && <Icon name={socialIcon} size="28px" color="light" />}
        <EXternalLinkWrapper>{link}</EXternalLinkWrapper>
      </div>
    </SocialWrapper>
  );
};
