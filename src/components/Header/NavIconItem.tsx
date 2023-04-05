import { FC } from "react";
import styled, { css } from "styled-components";

import { mqUntil } from "../../styles/media-queries";
import { Icon } from "../Icon";
import { Text } from "../Text";
import { NavIconItemProps } from "./headerProps";

const NavIconItemWrapper = styled.div<{ isMobileVisibile?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  letter-spacing: 0;
  color: ${(props) => props.theme.color.white};
  margin-left: 65px;
  ${mqUntil(
    "md",
    css`
      margin-left: 17px;
    `
  )}

  ${(props) =>
    mqUntil(
      "md",
      !props.isMobileVisibile
        ? css`
            display: none;
          `
        : css``
    )}
`;

const TextWrapper = styled.div`
  & > span {
    margin-left: 10px;
    display: inline;
    font-size: 15px;
  }
  ${mqUntil(
    "md",
    css`
      display: none;
    `
  )}
`;

const IconWrapper = styled.div`
  width: 30px;

  ${mqUntil(
    "md",
    css`
      margin-left: 17px;
      width: 36px;
    `
  )}

  ${mqUntil(
    "sm",
    css`
      width: 20px;
    `
  )}
`;

export const NavIconItem: FC<NavIconItemProps> = ({
  label,
  icon,
  renderLink,
  className,
  testId,
  onMobileHeader,
  ...props
}) => {
  return (
    <>
      {renderLink(
        <NavIconItemWrapper
          className={className}
          data-testid={testId}
          isMobileVisibile={onMobileHeader}
          {...props}
        >
          <IconWrapper>
            <Icon size="100%" name={icon} />
          </IconWrapper>
          <TextWrapper>
            <Text color="light" weight="book">
              {label}
            </Text>
          </TextWrapper>
        </NavIconItemWrapper>
      )}
    </>
  );
};
