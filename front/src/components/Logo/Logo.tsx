import cn from "classnames"
import Logotype from "@/public/img/svg/logo.svg?url";
import Image from "next/image";
import Link from "next/link";
import styles from "./Logo.module.scss"

interface LogoProp {
  classNameProp: string;
}

export const Logo = ({ classNameProp }: LogoProp) => {
  return (
    <Link href="/" className={styles.link}>
      <Image alt="Logo" src={Logotype} className={cn(classNameProp)} />
    </Link>
  );
};
