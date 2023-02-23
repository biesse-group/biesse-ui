import { FC } from "react";
import styled, { useTheme } from "styled-components";

import { Icon, Text } from "..";
import { NavIconItemProps } from "./headerProps";

const NavIconItemWrapper = styled.a<Pick<NavIconItemProps, "variant">>`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 65px;
  text-align: center;
  height: fit-content;
  letter-spacing: 0;
  & > span {
    margin-left: 10px;
    display: inline;
  }
`;

export const NavIconItem: FC<NavIconItemProps> = ({ label, icon, url, ...props }) => {
  const theme = useTheme();

  return (
    <NavIconItemWrapper href={url} {...props}>
      <Icon size="small" name={icon} color={theme.color.white} />
      <Text size="xs" color="light">
        {label}
      </Text>
    </NavIconItemWrapper>
  );
};
