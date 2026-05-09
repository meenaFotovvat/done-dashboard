import { create } from "zustand";

type State = {
  selectedIds: string[];
  toggleSelect: (id: string) => void;
  clearSelection: () => void;
};

export const useTableStore = create<State>((set) => ({
  selectedIds: [],

  toggleSelect: (id) =>
    set((state) => ({
      selectedIds: state.selectedIds.includes(id)
        ? state.selectedIds.filter((x) => x !== id)
        : [...state.selectedIds, id],
    })),

  clearSelection: () => set({ selectedIds: [] }),
}));