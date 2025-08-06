"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  signUpSchema,
  SignUpInput,
} from "@/lib/validation/auth-validation-schema";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useSignup } from "@/hooks/use-signup";
import { toast } from "sonner";
import { isErrorResponse } from "@/utils/is-error-response";

export default function SignupForm() {
  const form = useForm<SignUpInput>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      username: "",
      role: "ADMIN",
    },
  });

  const { control, handleSubmit } = form;

  const { signup, loading, data } = useSignup({
    onSuccess: () => {
      toast.success("Signup successful!");
    },
    onError: () => {
      if (isErrorResponse(data)) {
        toast.error(data.statusText);
      } else {
        toast.error("Signup failed.");
      }
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(signup)} className="space-y-3">
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter your username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={loading} loading={loading}>
          Submit
        </Button>
      </form>
    </Form>
  );
}
