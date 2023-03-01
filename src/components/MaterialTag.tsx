import { FC } from "react";
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
  material: keyof typeof biesseTheme.color.material;
  /**
   * Enable border and shadow around the tag
   */
  border?: boolean;
  /**
   * Function used to translate labels in the current language
   */
  translateLabel?: (label: MaterialTagProps["material"]) => string;
  onClick?: () => void;
  testId?: string;
}

const TagLabel = styled(Text)`
  text-transform: uppercase;
  margin-left: 9px;
`;

const TagRoot = styled.div<Pick<MaterialTagProps, "border"> & { BackGroundColor: string }>`
  font-family: ${(props) => props.theme.font.family};
  font-weight: bold;
  border: 0;
  border-radius: ${(props) => props.theme.button.borderRadius};
  line-height: 1;
  transition: all 0.2s ease-out;
  text-transform: uppercase;
  display: inline-flex;
  flex-direction: row;
  padding: 0px 14px 0px 10px;
  height: 30px;
  align-items: center;
  background-color: ${(props) => props.BackGroundColor};

  ${(props) =>
    props.border &&
    css`
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
      border: 1px solid ${(props) => props.theme.color.white};
    `}
`;

const getIconName: (material: MaterialTagProps["material"]) => IconName = (
  material: MaterialTagProps["material"]
) => {
  switch (material) {
    case "wood":
      return "material-wood";
    case "composite":
      return "material-composite";
    case "glass":
      return "material-glass";
    case "metal":
      return "material-metal";
    default:
      return "material-stone";
  }
};

export const MaterialTag: FC<MaterialTagProps> = ({
  material,
  testId,
  translateLabel,
  ...props
}) => {
  const theme = useTheme();
  return (
    <TagRoot data-testid={testId} BackGroundColor={theme.color.material[material]} {...props}>
      <Icon name={getIconName(material)} color={theme.color.white} size="xs" />
      <TagLabel color="light" size="sm">
        {translateLabel ? translateLabel(material) : material}
      </TagLabel>
    </TagRoot>
  );
};
