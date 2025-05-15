import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/api/auth/auth";
import type { LoginRequest, LoginResponse } from "@/types/auth";

interface UseLoginResult {
  login: (params: LoginRequest) => Promise<LoginResponse>;
  data: LoginResponse | null;
  loading: boolean;
  error: Error | null;
}

interface UseLoginOptions {
  onSuccess?: () => void;
  onError?: () => void;
}

export function useLogin(options?: UseLoginOptions): UseLoginResult {
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
      options?.onSuccess?.();
      router.push("/blog")
      return response;
    } catch (err) {
      setError(err as Error);
      options?.onError?.();
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
