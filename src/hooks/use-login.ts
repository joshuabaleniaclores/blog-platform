import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/api/auth/auth";
import type { ErrorResponse, LoginRequest, LoginResponse } from "@/types/auth";
import { isErrorResponse } from "@/utils/is-error-response";
import { toast } from "sonner";

interface UseLoginResult {
  login: (params: LoginRequest) => Promise<LoginResponse | ErrorResponse | null>;
  data: LoginResponse | ErrorResponse | null;
  loading: boolean;
  error: Error | null;
}

interface UseLoginOptions {
  onSuccess?: () => void;
  onError?: () => void;
}

export function useLogin(options?: UseLoginOptions): UseLoginResult {
  const [data, setData] = useState<LoginResponse | ErrorResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const router = useRouter();

  const executeLogin = async (params: LoginRequest): Promise<LoginResponse | ErrorResponse> => {
    setLoading(true);
    setError(null);
    try {
      const response = await login(params);
      if (!isErrorResponse(response)) {
        setData(response);
        options?.onSuccess?.();
        router.push("/blog")
        return response;
      } else {
        toast.error(response?.data?.message);
        return response;
      }
    } catch (err) {
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
