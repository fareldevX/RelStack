import { create } from "zustand";

export const useArchivesStore = create((set) => ({
  selectedCategory: "All",
  setSelectedCategory: (category) => set({ selectedCategory: category }),
}));
