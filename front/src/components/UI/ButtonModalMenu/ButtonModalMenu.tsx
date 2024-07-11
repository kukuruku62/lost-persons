"use client";

import cn from "classnames";
import { MouseEvent } from "react";
import { useIsModalMenu } from "@/store/ModalContext";

interface ButtonModalMenuProp {
  classNameProp: string;
}

export const ButtonModalMenu = ({classNameProp}: ButtonModalMenuProp) => {

  const isModal = useIsModalMenu((state) => state.isModal);
  const toggleModal = useIsModalMenu((state) => state.toggleModal);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    toggleModal();
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={cn(classNameProp)}
        aria-label={isModal ? "kliknutím zatvoríte menu" : "kliknutím otvoríte menu"}
        aria-expanded={!isModal}
        aria-haspopup="menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </>
  );
};
