import { FC } from "react";
import styled from "styled-components";

import { Icon, Text } from "..";
import { NavIconItemProps } from "./headerProps";

const NavIconItemWrapper = styled.div<Pick<NavIconItemProps, "variant">>`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 65px;
  text-align: center;
  height: fit-content;
  letter-spacing: 0;
  color: ${(props) => props.theme.color.white};
  & > span {
    margin-left: 10px;
    display: inline;
    font-size: 15px;
  }
`;

export const NavIconItem: FC<NavIconItemProps> = ({
  label,
  icon,
  renderLink,
  className,
  testId,
  ...props
}) => {
  return (
    <>
      {renderLink(
        <NavIconItemWrapper className={className} data-testid={testId} {...props}>
          <Icon size="sm" name={icon} />
          <Text color="light" weight="book">
            {label}
          </Text>
        </NavIconItemWrapper>
      )}
    </>
  );
};
