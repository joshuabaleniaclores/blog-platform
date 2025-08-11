import { z } from "zod";

//#region Messages
const messages = {
  emailRequired: "Email is required.",
  emailInvalid: "Please enter a valid email address.",
  passwordRequired: "Password is required.",
  passwordMin: "Password must be at least 6 characters.",
  usernameRequired: "Username is required.",
  usernameMin: "Username must be at least 2 characters.",
} as const;
//#endregion

//#region Fields
const emailField = z
  .string()
  .trim()
  .min(1, { message: messages.emailRequired })
  .email({ message: messages.emailInvalid });

const passwordField = z
  .string()
  .trim()
  .min(1, { message: messages.passwordRequired })
  .min(6, { message: messages.passwordMin });

const optionalUsernameField = z
  .string()
  .trim()
  .min(2, { message: messages.usernameMin })
  .optional();

const requiredUsernameField = z
  .string()
  .trim()
  .min(1, { message: messages.usernameRequired })
  .min(2, { message: messages.usernameMin });

const roleField = z.string().trim();
//#endregion

//#region Signup
export const signUpSchema = z
  .object({
    email: emailField,
    password: passwordField,
    username: optionalUsernameField,
    role: roleField,
  })
  .strict(); // prevent extra unwanted fields
//#endregion

//#region Login
export const loginSchema = z
  .object({
    username: requiredUsernameField,
    password: passwordField,
  })
  .strict();
//#endregion

//#region Export Infer
export type SignUpInput = z.infer<typeof signUpSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
//#endregion