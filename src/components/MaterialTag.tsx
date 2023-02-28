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
  translateLanguage?: (label: MaterialTagProps["material"]) => string;
  onClick?: () => void;
  testId?: string;
}

const TagLabel = styled(Text)`
  text-transform: uppercase;
  margin-left: 9px;
`;

const TagRoot = styled.div<Pick<MaterialTagProps, "border"> & { backGroundColor: string }>`
  font-family: ${(props) => props.theme.font.family};
  font-weight: bold;
  border: 0;
  border-radius: ${(props) => props.theme.button.borderRadius};
  line-height: 1;
  transition: all 0.2s ease-out;
  text-transform: uppercase;
  display: flex;
  flex-direction: row;
  padding: 0px 14px 0px 10px;
  height: 30px;
  width: fit-content;
  align-items: center;
  background-color: ${(props) => props.backGroundColor};

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
  translateLanguage,
  ...props
}) => {
  const theme = useTheme();
  console.log(getIconName(material));
  return (
    <TagRoot data-testid={testId} backGroundColor={theme.color.material[material]} {...props}>
      <Icon name={getIconName(material)} color={theme.color.white} size="xs" />
      <TagLabel color="light" size="sm">
        {translateLanguage ? translateLanguage(material) : material}
      </TagLabel>
    </TagRoot>
  );
};
