import { useState, useEffect } from "react";
import {
  Droppable,
  Draggable,
  DroppableProvided,
  DroppableStateSnapshot,
  DraggableProvided,
  DraggableStateSnapshot,
} from "react-beautiful-dnd";

import Column from "./Column";
import { ColumnType } from "./Column.types";
import { Wrapper, Container, DropZone } from "./Column.style";

export type ColumnListProps = {
  items: ColumnType[];
  listId: string;
  isDraggingRow?: boolean;
};

const ColumnList = ({
  items,
  listId,
  isDraggingRow = false,
}: ColumnListProps): JSX.Element | null => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));

    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <Droppable
      droppableId={listId}
      type="CARD"
      direction="horizontal"
      isCombineEnabled={false}
    >
      {(
        dropProvided: DroppableProvided,
        dropSnapshot: DroppableStateSnapshot
      ) => (
        <Wrapper {...dropProvided.droppableProps}>
          <Container>
            <DropZone ref={dropProvided.innerRef}>
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(
                    dragProvided: DraggableProvided,
                    dragSnapshot: DraggableStateSnapshot
                  ) => (
                    <Column
                      item={item}
                      provided={dragProvided}
                      snapshot={dragSnapshot}
                      isDraggingRow={isDraggingRow}
                    />
                  )}
                </Draggable>
              ))}
              {dropProvided.placeholder}
            </DropZone>
          </Container>
        </Wrapper>
      )}
    </Droppable>
  );
};

export default ColumnList;
