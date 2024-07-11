import { FormNewParticipant } from "@/components/FormNewParticipant/FormNewParticipant";
import { Title } from "@/components/UI/Title/Title";
import styles from "./styles.module.scss";

export default function NewMember() {
  return (
    <section className={styles.container}>
      <div className={styles.top}>
        <hgroup className={styles.titleContainer}>
          <Title variant="h1" classNameProp={styles.title}>
            Pomáhaj s nami na pátracích akciách
          </Title>
          <p className={styles.subtitle}>
            Ak máš viac ako 18 rokov, chuť pomáhať, pridaj sa k nám ako dobrovoľník a pomáhaj v
            tvojom meste.
          </p>
        </hgroup>
        <p className={styles.text}>
          Ak budeme potrebovať na pátraciu akciu nasadiť viac ľudí, budeme Ťa kontaktovať. Tento
          formulár slúži na registráciu dobrovoľníkov Pohotovostného pátracieho tímu. Po jeho
          odoslaní príde veliteľovi príslušného kraja notifikácia a ak bude schválená, prídu Ti
          emailom ďalšie inštrukcie. Ďakujeme za Tvoj záujem pomáhať spolu s nami.
        </p>
      </div>
      <FormNewParticipant />


    </section>
  );
}
