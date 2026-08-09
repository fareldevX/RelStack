import { create } from "zustand";

export const useArchivesStore = create((set) => ({
  selectedType: "project",
  setSelectedType: (type) => set({ selectedType: type }),
}));
