import { useState } from "react";
import {
  DragDropContext,
  Droppable,
  DroppableProvided,
  DropResult,
  DraggableLocation,
} from "react-beautiful-dnd";
import { nanoid } from "nanoid";

import { Row, RowSelector } from "../Row";
import { ColumnType } from "../Column";
import { reorder, reorderGrids, updateItemWidths } from "./GridBuilder.utils";
import { GridMap } from "./GridBuilder.types";
import { Root, Container } from "./GridBuilder.style";

function GridBuilder() {
  const [rowOrder, setRowOrder] = useState<string[]>([]);
  const [gridMap, setGridMap] = useState<GridMap>({});

  const addRow = (columns: ColumnType[]) => {
    const rowId = nanoid(10);
    setGridMap((prev) => ({
      ...prev,
      [`${rowId}`]: [...columns],
    }));
    setRowOrder((prev) => [...prev, rowId]);
  };

  const removeRow = (rowId: string) => {
    const rows = { ...gridMap };
    delete rows[rowId];
    setGridMap(rows);
    setRowOrder(rowOrder.filter((item) => item !== rowId));
  };

  const addColumn = (rowId: string) => {
    const column = {
      id: nanoid(10),
      width: 100,
    };

    const rows = { ...gridMap };
    rows[rowId] = [...updateItemWidths([...rows[rowId], column])];

    setGridMap(rows);
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const source: DraggableLocation = result.source;
    const destination: DraggableLocation = result.destination;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    if (result.type === "ROW") {
      const orderedGrids: string[] = reorder(
        rowOrder,
        source.index,
        destination.index
      );

      setRowOrder(orderedGrids);

      return;
    }

    setGridMap(reorderGrids(gridMap, source, destination));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Root>
        <Droppable droppableId="grid" type="ROW" direction="vertical">
          {(provided: DroppableProvided) => (
            <Container ref={provided.innerRef} {...provided.droppableProps}>
              {rowOrder.map((key: string, index: number) => (
                <Row
                  key={key}
                  index={index}
                  rowId={key}
                  items={gridMap[key]}
                  onRemove={removeRow}
                  onAddColumn={addColumn}
                />
              ))}
              {provided.placeholder}
            </Container>
          )}
        </Droppable>

        <RowSelector addRow={addRow} />
      </Root>
    </DragDropContext>
  );
}

export default GridBuilder;
