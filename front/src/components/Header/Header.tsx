import Image from "next/image";
import Link from "next/link";
import BackgroundImg from "@/public/img/header-img.webp";
import { Menu } from "./components/Menu/Menu";
import { Contacts } from "../Contacts/Contacts";
import { ButtonModalMenu } from "../UI/ButtonModalMenu/ButtonModalMenu";
import { Title } from "../UI/Title/Title";
import { Logo } from "../Logo/Logo";
import styles from "./Header.module.scss";


const Header = () => {
  return (
    <header className={styles.header} id="header">
      <div className={styles.news}>
        <p>Pátracia akcia v Rači so šťastným koncom!</p>
      </div>
      <div className={styles.mainContainer}>
        <Image alt="" src={BackgroundImg} fill={true} className={styles.backgroundImg} priority />

        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.leftPart}>
              <div className={styles.logoAndTitles}>
                <Logo classNameProp={styles.logo} />
                <hgroup className={styles.titlesBlock}>
                  <Title variant="h2" classNameProp={styles.title}>
                    POHOTOVOSTNÝ PÁTRACÍ TÍM
                  </Title>
                  <p>PÁTRANIE PO NEZVESTNÝCH OSOBÁCH</p>
                </hgroup>
              </div>
            </div>

            <div className={styles.rightPart}>
              <Contacts
                classNameContainer={styles.containerContacts}
                classNameMailPhone={styles.containerMailPhone}
                classNameSocialBlock={styles.socialBlock}
              />
            </div>
            <ButtonModalMenu classNameProp={styles.menuButton} />
          </div>

          <Menu />
        </div>
      </div>
      <Link href={"/"} rel="noopener noreferrer" target="_blank" className={styles.alertPerson}>
        <span></span>
        <p>NAHLÁSIŤ NEZVESTNÚ OSOBU</p>
        <span></span>
      </Link>
    </header>
  );
};

export { Header };
