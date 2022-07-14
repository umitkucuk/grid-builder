import { DraggableLocation } from "react-beautiful-dnd";
import { GridMap } from "./GridBuilder.types";

export const reorder = (
  list: any[],
  startIndex: number,
  endIndex: number
): any[] => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export const updateItemWidths = (list: any[]) => {
  const itemCount = list?.length;
  return list.map((listItem: any) => {
    listItem.width = 100 / itemCount;
    return listItem;
  });
};

export const reorderGrids = (
  gridMap: GridMap,
  source: DraggableLocation,
  destination: DraggableLocation
) => {
  const current = [...gridMap[source.droppableId]];
  const next = [...gridMap[destination.droppableId]];
  const target = current[source.index];

  if (source.droppableId === destination.droppableId) {
    const reordered = reorder(current, source.index, destination.index);

    return {
      ...gridMap,
      [source.droppableId]: reordered,
    };
  }

  current.splice(source.index, 1);

  next.splice(destination.index, 0, target);

  const currentList = updateItemWidths(current);
  const nextList = updateItemWidths(next);

  const result = {
    ...gridMap,
    [source.droppableId]: currentList,
    [destination.droppableId]: nextList,
  };

  return result;
};
