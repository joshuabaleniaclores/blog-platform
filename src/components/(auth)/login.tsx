"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { LoginInput, loginSchema } from "@/lib/validation/authValidationSchema";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
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
import { useLogin } from "@/hooks/useLogin";

export default function LoginForm() {
  const form = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const { login, loading } = useLogin({
    onSuccess: () => {
      toast.success("Login successful!");
    },
    onError: () => {
      toast.error("Login failed. Please check your credentials.");
    },
  });

  const onSubmit = async (formData: LoginInput) => {
    try {
      const response = await login(formData);
      console.log("Login success:", response);
      // Save token to cookies/localStorage or redirect
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
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

        <FormField
          control={form.control}
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

        <Button type="submit" disabled={loading} loading={loading}>
          Submit
        </Button>
      </form>
    </Form>
  );
}
