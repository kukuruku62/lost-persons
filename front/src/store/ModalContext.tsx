"use client";

import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface ModalState {
  isModal: boolean;
  toggleModal: () => void;
}

export const useIsModalMenu = create<ModalState>()(devtools((set) => ({
  isModal: false,
  toggleModal: () => {
    set((state) => ({ isModal: !state.isModal }));
  },
})));


