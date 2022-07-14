import { DraggableProvided } from "react-beautiful-dnd";
import { ColumnType } from "../Column/Column.types";

export type RowProps = {
  rowId: string;
  index: number;
  items: ColumnType[];
  onAddColumn?: (id: string) => void;
  onRemove?: (id: string) => void;
};

export type RowActionsProps = {
  provided: DraggableProvided;
  onAddColumn: () => void;
  onRemove: () => void;
};

export type RowSelectorProps = {
  addRow?: (columns: ColumnType[]) => void;
};
