import { create } from "zustand";

type BulkState = {
  selectedIds: string[];
  setSelected: (ids: string[]) => void;
  clear: () => void;
  markAsActive: () => void;
};

export const useBulkStore = create<BulkState>((set, get) => ({
  selectedIds: [],

  setSelected: (ids) => set({ selectedIds: ids }),

  clear: () => set({ selectedIds: [] }),

  markAsActive: () => {
    const { selectedIds } = get();

    console.log("Mock update for:", selectedIds);

    set({ selectedIds: [] });
  },
}));