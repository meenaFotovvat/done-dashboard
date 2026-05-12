import { create } from "zustand";

type TableStore = {
  rowSelection: Record<string, boolean>;

  setRowSelection: (value: Record<string, boolean>) => void;

  clearSelection: () => void;
};

export const useTableStore = create<TableStore>((set) => ({
  rowSelection: {},

  setRowSelection: (value) =>
    set({
      rowSelection: value,
    }),

  clearSelection: () =>
    set({
      rowSelection: {},
    }),
}));
