import useVuelidate from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  maxLength,
  numeric,
} from "@vuelidate/validators";

export function useForm(form) {
  const rules = {
    name: {
      required,
    },
    bio: {
      max: maxLength(200),
    },
    phone: {
      numeric,
    },
    email: {
      required,
      email,
    },
    password: {
      required,
      min: minLength(6),
    },
    confirmPassword: {
      required,
    },
  };

  const v$ = useVuelidate(rules, form);

  return v$;
}
