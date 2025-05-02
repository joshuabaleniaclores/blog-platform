import LoginForm from "@/components/(auth)/login";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "lucide-react";

export default function Login() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Welcome back! Log in to access your account and start creating, editing, or engaging with blog posts from our community. Enter your credentials below to continue your blogging journey.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
      <CardFooter>
        <p className="text-sm text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 hover:underline">
            Log in here
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
