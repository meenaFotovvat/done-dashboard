import { create } from "zustand";

type BulkStore = {
  rowSelection: Record<string, boolean>;

  setRowSelection: (
    value: Record<string, boolean>
  ) => void;

  clear: () => void;
};

export const useBulkStore = create<BulkStore>((set) => ({
  rowSelection: {},

  setRowSelection: (value) =>
    set({
      rowSelection: value,
    }),

  clear: () =>
    set({
      rowSelection: {},
    }),
}));