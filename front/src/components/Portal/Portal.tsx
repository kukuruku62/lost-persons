"use client";

import { useIsModalMenu } from "@/store/ModalContext";
import { ModalMenu } from "../ModalMenu/ModalMenu";
import { createPortal } from "react-dom";


export default function Portal () {
  const isModal = useIsModalMenu((state) => state.isModal);
  return (
    <>
      {isModal && createPortal(<ModalMenu />, document.body)};
    </>
  )
};
