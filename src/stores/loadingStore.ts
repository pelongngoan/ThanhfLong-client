import { create } from "zustand";

type LoadingStore = {
  loadingCount: number;
  isLoading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
};

const useLoadingStore = create<LoadingStore>((set, get) => ({
  loadingCount: 0,
  isLoading: false,
  startLoading: () => {
    const newCount = get().loadingCount + 1;
    set({ loadingCount: newCount, isLoading: true });
  },
  stopLoading: () => {
    const newCount = Math.max(get().loadingCount - 1, 0);
    set({
      loadingCount: newCount,
      isLoading: newCount > 0,
    });
  },
}));

export default useLoadingStore;
