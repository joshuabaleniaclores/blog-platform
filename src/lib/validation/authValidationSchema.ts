import { z } from "zod";

const messages = {
  email: "Please enter a valid email address.",
  password: "Password must be at least 6 characters.",
  name: "Name must be at least 2 characters.",
};

const emailField = z.string().email({ message: messages.email });
const passwordField = z.string().min(6, { message: messages.password });
const nameField = z.string().min(2, { message: messages.name }).optional();

export const signUpSchema = z
  .object({
    email: emailField,
    password: passwordField,
    name: nameField,
  })
  .strict(); // prevent extra unwanted fields

export const loginSchema = z
  .object({
    email: emailField,
    password: passwordField,
  })
  .strict();

export type SignUpInput = z.infer<typeof signUpSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
