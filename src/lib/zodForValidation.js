import { z } from "zod";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
export const RegistrationSchema = z
  .object({
    first_name: z.string(),
    last_name: z.string(),
    role: z.enum(["admin", "supervisor", "agent"], {
      message:
        'Role must be one of the following "admin", "supervisor", "agent"',
    }),
    phone_number: z
      .string()
      .min(1, { message: "Must be a valid mobile number min lenth is 10" })
      .max(14, { message: "Must be a valid mobile number" }),
    gender: z.enum(["ذكر", "انثي"], {
      message: 'Gender must be one of the following "ذكر", "انثي"',
    }),
    birthdate: z.coerce.date(),
    username: z.string().min(8).max(20),
    email: z.string().email(),
    password: z.string().min(10, "Password must be at least 10 characters"),
    password_confirmation: z.string(),
    profile_photo: z
      .any()
      .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
      .refine(
        (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
        "Only .jpg, .jpeg, .png and .webp formats are supported."
      )
      .optional(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Passwords must match",
    path: ["password_confirmation"],
  });
export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(10, "Password must be at least 10 characters"),
});
