import Image from "next/image";
import BackgroundImg from "../../../public/img/footer-img.webp";
import { Contacts } from "../Contacts/Contacts";
import styles from "./Footer.module.scss";

const Footer = () => {
  const bankAccountData = [
    { id: 1, value: "Pohotovostný pátrací tím" },
    { id: 2, value: "IČO: 52367428" },
    { id: 3, value: "FIO banka" },
    { id: 4, value: "SWIFT/BIC: FIOZSKBAXXX" },
    { id: 5, value: "SK32 8330 0000 0021 0164 7689" },
  ] as const;

  const registrationData = [
    { id: 1, value: "Právna forma: občianske združenie" },
    { id: 2, value: "Reg. úrad: Ministerstvo vnútra SR" },
    { id: 3, value: "Reg. číslo: VVS/1-900/90-56433" },
    { id: 4, value: "Zmluva o IZS č.: OU-BA-OKR2-2020/045935-002" },
  ] as const;

  return (
    <footer className={styles.footer}>
      <Image fill={true} alt="" src={BackgroundImg} className={styles.backgroundImg} />
      <div className={styles.container}>

        <div className={styles.contacts}>
          <Contacts
            classNameContainer={styles.containerContacts}
            classNameMailPhone={styles.containerMailPhone}
            classNameSocialBlock={styles.socialBlock}
          >
            <p className={styles.address}>91701, Trnava 1, P.O. BOX 90, Pohotovostný pátrací tím</p>
          </Contacts>
        </div>

        <ul className={styles.listData}>
          {bankAccountData.map(({ id, value }) => (
            <li key={id}>{value}</li>
          ))}
        </ul>

        <ul className={styles.listData}>
          {registrationData.map(({ id, value }) => (
            <li key={id}>{value}</li>
          ))}
        </ul>

      </div>
    </footer>
  );
};

export { Footer };
