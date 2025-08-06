import { z } from "zod";

//#region Common Messages
const messages = {
  email: "Please enter a valid email address.",
  password: "Invalid password.",
  username: "Name must be at least 2 characters.",
  usernameRequired: "Username is required.", 
};
//#endregion

//#region Signup
const emailField = z.string().email({ message: messages.email });
const passwordField = z.string().min(6, { message: messages.password });
const usernameField = z.string().min(2, { message: messages.username }).optional();
const roleField = z.string();

export const signUpSchema = z
  .object({
    email: emailField,
    password: passwordField,
    username: usernameField,
    role: roleField
  })
  .strict(); // prevent extra unwanted fields
//#endregion

//#region Login
export const loginSchema = z
  .object({
    username: z.string().min(2, { message: messages.usernameRequired }), 
    password: usernameField,
  })
  .strict();
//#endregion

//#region Export Infer
export type SignUpInput = z.infer<typeof signUpSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
//#endregion