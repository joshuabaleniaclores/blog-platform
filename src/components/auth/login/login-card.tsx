import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import LoginForm from "./login-form";

export default function LoginCard() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Card className="w-96 max-w-md">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Welcome back! Log in to access your account and start creating,
            editing, or engaging with blog posts from our community. Enter your
            credentials below to continue your blogging journey.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
        <CardFooter>
          <p className="text-sm text-center">
            Dont have an account?{" "}
            <Link href="/signup" className="text-blue-600 hover:underline">
              Sign up here
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
