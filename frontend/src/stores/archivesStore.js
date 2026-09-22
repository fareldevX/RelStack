import { create } from "zustand";

export const archivesStore = create((set) => ({
  selectedType: "project",
  setSelectedType: (type) => set({ selectedType: type }),
}));
