import cn from "classnames";
import { FaYoutube, FaTiktok, FaFacebook, FaInstagram } from "react-icons/fa";
import { TbHours24, TbPhone, TbMail } from "react-icons/tb";
import Link from "next/link";
import styles from "./Contacts.module.scss";
import { ReactNode } from "react";

interface ContactsProp {
  classNameContainer: string;
  classNameMailPhone: string;
  classNameSocialBlock: string;
  children?: ReactNode;
}

const Contacts = ({
  classNameContainer,
  classNameMailPhone,
  classNameSocialBlock,
  children,
}: ContactsProp) => {
  const socialLinks = [
    { id: "1", icon: <FaFacebook />, link: "https://www.facebook.com/patranie.org" },
    { id: "2", icon: <FaYoutube />, link: "https://www.youtube.com/@pohotovostnypatracitim" },
    { id: "3", icon: <FaInstagram />, link: "https://www.instagram.com/patraci_tim" },
    { id: "4", icon: <FaTiktok />, link: "https://www.tiktok.com/@patraci_tim" },
  ] as const;

  return (
    <div className={classNameContainer}>
      <ul className={cn(styles.socialBase, classNameSocialBlock)}>
        {socialLinks.map(({ id, icon, link }) => (
          <li key={id}>
            <Link
              href={link}
              rel="noopener noreferrer"
              target="_blank"
              className={styles.socialLink}
            >
              {icon}
            </Link>
          </li>
        ))}
      </ul>

      <div className={classNameMailPhone}>
        <div className={styles.contact}>
          <TbPhone />
          <TbHours24 />
          <Link
            href={"tel:+0940555959"}
            rel="noopener noreferrer"
            target="_blank"
            className={styles.phone}
          >
            0940 555 959
          </Link>
        </div>

        <div className={styles.contact}>
          <TbMail />
          <Link
            href={"mailto:info@patranie.org"}
            rel="noopener noreferrer"
            target="_blank"
            className={styles.email}
          >
            info@patranie.org
          </Link>
        </div>
      </div>

      {children}
    </div>
  );
};

export { Contacts };
