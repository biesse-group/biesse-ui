import { FC, useEffect, useState } from "react";
import styled from "styled-components";

import { Text } from "./Text";

export interface Props {
  /**
   * Optional component class name
   */
  className?: string;
  /**
   * Label on the right of the checkbox
   */
  label?: string | JSX.Element;
  /**
   * Triggers at checkbox click
   */
  onCheck?: (isChecked: boolean) => void;
  testId?: string;
}

const Root = styled.div`
  display: inline-flex;
  align-items: center;
`;

const StyledCheckbox = styled.div<{ checked: boolean }>`
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  color: ${({ checked, theme }) => (checked ? theme.color.white : "transparent")};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.color.white};
  font-size: 25px;
  cursor: pointer;
  user-select: none;
`;

export const Checkbox: FC<Props> = ({ testId, onCheck, label, ...props }) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    onCheck && onCheck(isChecked);
  }, [isChecked, onCheck]);

  return (
    <Root {...props}>
      <StyledCheckbox
        data-testid={testId}
        checked={isChecked}
        onClick={() => setIsChecked(!isChecked)}
      >
        ✓
      </StyledCheckbox>
      {typeof label === "string" ? <Text color="light">{label}</Text> : label}
    </Root>
  );
};
