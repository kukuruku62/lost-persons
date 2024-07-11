import cn from "classnames";
import { FieldError, UseFormRegister } from "react-hook-form";
import { FormData } from "../types/FormData";
import styles from "./FormField.module.scss";

interface FormFieldProps {
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
  type: "text" | "email" | "tel";
  autocomplete: "on" | "off" | "email";
  field: "name" | "surname" | "age" | "email" | "tel";
  labelText: "Meno:" | "Priezvisko:" | "Vek:" | "Email:" | "Tel:";
  hasInputValue: boolean;
}

export const FormField = ({
  register,
  error,
  type,
  autocomplete,
  field,
  labelText,
  hasInputValue,
}: FormFieldProps) => {
  return (
    <div className={styles.formField}>
      <div className={styles.inputContainer}>
        <input
          type={type}
          autoComplete={autocomplete}
          {...register(field)}
          className={cn(
            hasInputValue && error && styles.error,
            hasInputValue && !error && styles.active
          )}
        />
        <label aria-label={labelText}>{labelText}</label>
      </div>
      {error && <span className={styles.errorMessage}>{error.message}</span>}
    </div>
  );
};
