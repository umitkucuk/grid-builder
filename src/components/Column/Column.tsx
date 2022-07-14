import { DraggableProvided, DraggableStateSnapshot } from "react-beautiful-dnd";

import Icon from "../Icon";
import {
  StyledColumn,
  StyledColumnContent,
  StyledColumnAction,
} from "./Column.style";
import { ColumnType } from "./Column.types";

export type ColumnProps = {
  item: ColumnType;
  provided?: DraggableProvided;
  snapshot?: DraggableStateSnapshot;
  isDraggingRow?: boolean;
};

function getStyle(style: any, snapshot: any) {
  if (!snapshot.isDropAnimating) {
    return style;
  }
  return {
    ...style,
    transitionDuration: `0.001s`,
  };
}

const ColumnAction = ({ provided }: any) => {
  return (
    <StyledColumnAction {...provided?.dragHandleProps}>
      <Icon name="column" />
    </StyledColumnAction>
  );
};

const Column = ({
  item,
  provided,
  snapshot,
  isDraggingRow = false,
}: ColumnProps): JSX.Element => {
  return (
    <StyledColumn
      ref={(ref) => provided?.innerRef(ref)}
      {...provided?.draggableProps}
      style={getStyle(provided?.draggableProps.style, snapshot)}
      width={item.width}
      isDraggingRow={isDraggingRow}
    >
      <ColumnAction provided={provided} />
      <StyledColumnContent>
        <Icon name="plus" />
      </StyledColumnContent>
    </StyledColumn>
  );
};

Column.displayName = "Column";

export default Column;
