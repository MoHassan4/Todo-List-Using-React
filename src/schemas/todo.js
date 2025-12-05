import * as Yup from "yup";
import { PRIORITIES } from "../constants/priorities";

export function getTodosSchema({ isNew = false } = {}) {
  const deadlineRule = Yup.date()
    .nullable()
    .typeError("Deadline must be a valid date")
    .transform((value, originalvalue) => (originalvalue === "" ? null : value))

  return Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name Must has at least 3 characters")
      .max(50, "Name Musn't exceeded 50 characters"),
    description: Yup.string()
      .min(3, "Description Must has at least 3 characters")
      .max(200, "Description Musn't exceeded 200 characters"),
    deadline: isNew
      ? deadlineRule.test(
          "is-Future-Date",
          "Deadline can't be date in the past",
          (value) => {
            if (!value) return true;
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            return value >= today;
          }
        )
      : deadlineRule,
    priority: Yup.string()
      .required("Priority is not valid value")
      .oneOf(Object.keys(PRIORITIES), "Priority is not valid value"),
  });
}
