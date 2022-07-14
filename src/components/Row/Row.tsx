import {
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
} from "react-beautiful-dnd";

import { ColumnList } from "../Column";
import Icon from "../Icon";
import { RowProps, RowActionsProps } from "./Row.types";
import { StyledRow, StyledRowActions, RowActionButton } from "./Row.style";

const RowActions = ({
  provided,
  onAddColumn,
  onRemove,
}: RowActionsProps): JSX.Element => {
  return (
    <StyledRowActions>
      <RowActionButton onClick={onAddColumn}>
        <Icon name="plus" />
      </RowActionButton>
      <RowActionButton {...provided?.dragHandleProps}>
        <Icon name="drag" />
      </RowActionButton>
      <RowActionButton onClick={onRemove}>
        <Icon name="close" />
      </RowActionButton>
    </StyledRowActions>
  );
};

const Row = ({
  rowId,
  index,
  items,
  onAddColumn,
  onRemove,
}: RowProps): JSX.Element => {
  return (
    <Draggable draggableId={rowId} index={index}>
      {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
        <StyledRow
          ref={provided.innerRef}
          {...provided.draggableProps}
          isDraggingRow={snapshot.isDragging}
        >
          <RowActions
            provided={provided}
            onAddColumn={() => onAddColumn?.(rowId)}
            onRemove={() => onRemove?.(rowId)}
          />
          <ColumnList
            listId={rowId}
            items={items}
            isDraggingRow={snapshot.isDragging}
          />
        </StyledRow>
      )}
    </Draggable>
  );
};

Row.displayName = "Row";

export default Row;
