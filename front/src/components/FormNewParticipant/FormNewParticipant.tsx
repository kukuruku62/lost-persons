"use client";

import { ZodType, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormField } from "./components/FormField";
import { FormData } from "./types/FormData";
import styles from "./FormNewParticipant.module.scss";


export const REGIONS_LIST = [
  { id: 1, name: "Bratislavský kraj" },
  { id: 2, name: "Trnavský kraj" },
  { id: 3, name: "Trenčiansky kraj" },
  { id: 4, name: "Nitriansky kraj" },
  { id: 5, name: "Banskobystrický kraj" },
  { id: 6, name: "Žilinský kraj" },
  { id: 7, name: "Košický kraj" },
  { id: 8, name: "Prešovský kraj" },
] as const;


export const FormNewParticipant = () => {
  const schema: ZodType<FormData> = z.object({
    name: z
      .string({ required_error: "povinné pole" })
      .min(2, { message: "min 2 písmená" })
      .max(25, { message: "max 25 písmen" })
      .refine((value) => /^[A-Za-z]+$/.test(value), { message: "povolené len písmena" }),
    surname: z
      .string({ required_error: "povinné pole" })
      .min(2, { message: "min 2 písmená" })
      .max(25, { message: "max 25 písmen" })
      .refine((value) => /^[A-Za-z]+$/.test(value), { message: "povolené len písmena" }),
    age: z.string({ required_error: "povinné pole" }).refine(
      (value) => {
        const num = Number(value);
        return num >= 18 && num <= 70;
      },
      { message: "musí byť vo veku od 18 do 70 rokov" }
    ),
    region: z
      .string({ required_error: "povinné pole" })
      .refine(
        (value) =>
          [
            "Bratislavský kraj",
            "Trnavský kraj",
            "Trenčiansky kraj",
            "Nitriansky kraj",
            "Banskobystrický kraj",
            "Žilinský kraj",
            "Košický kraj",
            "Prešovský kraj",
          ].includes(value),
        { message: "vyberte kraj" }
      ),
    email: z
      .string({
        required_error: "povinné pole",
      })
      .email({ message: "neplatný email" }),
    tel: z
      .string({ required_error: "povinné pole" })
      .refine((value) => /^\+421\d{9,10}$/.test(value), {
        message: "povolené len čísla s prefixom +421 a 9 alebo 10 čísel",
      }),
  });

  const defaultValues: FormData = {
    name: "",
    surname: "",
    age: "",
    region: "",
    email: "",
    tel: "",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, dirtyFields },
  } = useForm<FormData>({ resolver: zodResolver(schema), defaultValues });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    alert("Form has been send");
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
      <FormField
        autocomplete="on"
        type="text"
        error={errors.name}
        field="name"
        register={register}
        labelText="Meno:"
        hasInputValue={!!dirtyFields.name}
      />
      <FormField
        autocomplete="on"
        type="text"
        error={errors.surname}
        field="surname"
        register={register}
        labelText="Priezvisko:"
        hasInputValue={!!dirtyFields.surname}
      />
      <FormField
        autocomplete="off"
        type="text"
        error={errors.age}
        field="age"
        register={register}
        labelText="Vek:"
        hasInputValue={!!dirtyFields.age}
      />
      <FormField
        autocomplete="email"
        type="text"
        error={errors.email}
        field="email"
        register={register}
        labelText="Email:"
        hasInputValue={!!dirtyFields.email}
      />
      <FormField
        autocomplete="on"
        type="tel"
        error={errors.tel}
        field="tel"
        register={register}
        labelText="Tel:"
        hasInputValue={!!dirtyFields.tel}
      />
     
      <div className={styles.formField}>
        <select {...register("region")} className={styles.select}>
          {REGIONS_LIST.map(({ id, name }) => (
            <option key={id}>{name}</option>
          ))}
        </select>
        {errors.region && <span className={styles.errorMessage}>{errors.region.message}</span>}
      </div>
      <button type="submit" className={styles.buttonSubmit}>
        Odoslať
      </button>
    </form>
  );
};
