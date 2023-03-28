import { FC, PropsWithChildren } from "react";
import styled, { css, useTheme } from "styled-components";

import { biesseTheme } from "../themes/biesse-theme";
import { Icon, IconName } from "./Icon";
import { Text } from "./Text";

export interface MaterialTagProps {
  /**
   * Optional component class name
   */
  className?: string;
  /**
   * Predefined materials, will infer color, icon and label to the component
   */
  color: keyof typeof biesseTheme.color.material | "primary";
  /**
   * Optional icon
   */
  icon?: IconName;
  /**
   * Enable border and shadow around the tag
   */
  border?: boolean;
  onClick?: () => void;
  testId?: string;
}

const TagLabel = styled(Text)`
  text-transform: uppercase;
`;

const TagIcon = styled(Icon)`
  margin-right: 9px;
`;

const TagRoot = styled.div<Pick<MaterialTagProps, "border" | "color"> & { hasIcon: boolean }>`
  font-family: ${(props) => props.theme.font.family};
  font-weight: bold;
  border: 0;
  border-radius: ${(props) => props.theme.button.borderRadius};
  line-height: 1;
  transition: all 0.2s ease-out;
  text-transform: uppercase;
  display: inline-flex;
  flex-direction: row;
  padding: 0px 14px 0px ${(props) => (props.hasIcon ? "10px" : "14px")};
  height: 30px;
  align-items: center;
  background-color: ${({ theme, color }) =>
    color === "primary" ? theme.color.primary : theme.color.material[color]};

  ${(props) =>
    props.border &&
    css`
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
      border: 1px solid ${(props) => props.theme.color.white};
    `}
`;

export const Tag: FC<PropsWithChildren<MaterialTagProps>> = ({
  icon,
  testId,
  children,
  ...props
}) => {
  const theme = useTheme();
  return (
    <TagRoot data-testid={testId} hasIcon={!!icon} {...props}>
      {icon && <TagIcon name={icon} color={theme.color.white} size="xs" />}
      <TagLabel color="light" size="sm" weight="medium">
        {children}
      </TagLabel>
    </TagRoot>
  );
};
