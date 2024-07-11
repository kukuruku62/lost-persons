"use client";

import Link from "next/link";
import { Logo } from "@/components/Logo/Logo";
import { MouseEvent, useEffect, useRef } from "react";
import { hrefsMenu } from "@/constants/hrefs";
import { useIsModalMenu } from "@/store/ModalContext";
import { ButtonModalMenu } from "@/components/UI/ButtonModalMenu/ButtonModalMenu";
import styles from "./ModalMenu.module.scss";


export const ModalMenu = () => {
  
  const isModal = useIsModalMenu((state) => state.isModal);
  const toggleModal = useIsModalMenu((state) => state.toggleModal);
  const dialogRef = useRef<HTMLDialogElement>(null);


  useEffect(() => {
    if (isModal) {
      dialogRef.current?.showModal();
      document.body.classList.add(`${styles.lock}`);
    }

    return () => {
      document.body.classList.remove(`${styles.lock}`);
      dialogRef.current?.close();

    }
  }, [isModal]);

  const handleAncorClick = (e: MouseEvent<HTMLDialogElement>) => {
    e.preventDefault();
    if (e.target instanceof HTMLAnchorElement) {
      toggleModal();
    }
  };

  return (
    <dialog ref={dialogRef} onClick={handleAncorClick}>
      <ButtonModalMenu classNameProp={styles.menuButtonActive} />
      <nav className={styles.container}>
        <Logo classNameProp={styles.logo} />
        <ul className={styles.list}>
          {hrefsMenu.map(({ id, link, name }) => (
            <li key={id}>
              <Link href={link}>{name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </dialog>
  );
};
