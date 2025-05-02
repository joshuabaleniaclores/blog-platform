import { useState } from "react";
import type { LoginRequest, LoginResponse } from "@/types/auth";
import { login } from "@/app/api/auth/auth";
import { useRouter } from "next/navigation";

interface UseLoginResult {
  login: (params: LoginRequest) => Promise<LoginResponse>;
  data: LoginResponse | null;
  loading: boolean;
  error: Error | null;
}

export function useLogin(): UseLoginResult {
  const [data, setData] = useState<LoginResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const router = useRouter();

  const executeLogin = async (params: LoginRequest): Promise<LoginResponse> => {
    setLoading(true);
    setError(null);

    try {
      const response = await login(params);
      setData(response);
      router.push("/blog")
      return response;
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    login: executeLogin,
    data,
    loading,
    error,
  };
}
