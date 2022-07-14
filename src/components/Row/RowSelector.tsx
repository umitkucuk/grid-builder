import { useState, memo } from "react";
import { nanoid } from "nanoid";

import Icon from "../Icon";
import { ColumnType } from "../Column/Column.types";
import { RowSelectorProps } from "./Row.types";
import {
  RowSelectorContainer,
  RowSelectorContent,
  StyledRowSelectorButton,
  RowButtonsActivator,
  RowSelectorClose,
} from "./Row.style";
import gridData from "../../data/sectiondata.json";

type GridButtonProps = {
  svgattr?: string;
  onClick?: () => void;
};

const RowSelectorButton = ({
  svgattr,
  onClick,
}: GridButtonProps): JSX.Element => {
  return (
    <StyledRowSelectorButton onClick={onClick}>
      <svg
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 100 50"
        fill="currentColor"
      >
        <path d={svgattr} />
      </svg>
    </StyledRowSelectorButton>
  );
};

const RowSelector = ({ addRow }: RowSelectorProps): JSX.Element => {
  const [active, setActive] = useState<boolean>(false);

  const handleAddRow = (row: any) => {
    const columns = row?.kolon?.map((column: ColumnType) => {
      return {
        id: nanoid(10),
        width: column.width,
      };
    });

    addRow?.(columns);
  };

  const toggleSelector = () => setActive(!active);

  return (
    <RowSelectorContainer>
      {active ? (
        <>
          <h4>SELECT ROW LAYOUT</h4>
          <RowSelectorContent>
            {gridData.map((item) => (
              <RowSelectorButton
                key={item.id}
                svgattr={item.svgattr}
                onClick={() => handleAddRow(item)}
              />
            ))}
          </RowSelectorContent>
        </>
      ) : (
        <>
          <RowButtonsActivator onClick={toggleSelector}>
            <Icon name="plus" />
          </RowButtonsActivator>
          <h4>ADD ROW</h4>
        </>
      )}
      {active && (
        <RowSelectorClose onClick={toggleSelector}>
          <Icon name="close" />
        </RowSelectorClose>
      )}
    </RowSelectorContainer>
  );
};

RowSelector.displayName = "RowSelector";

export default memo(RowSelector);
