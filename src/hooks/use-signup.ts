import { useState } from "react";
import { signup } from "@/api/auth/auth";
import type { ErrorResponse, SignupRequest, SignupResponse } from "@/types/auth"; 

interface UseSignupResult {
  signup: (params: SignupRequest) => Promise<SignupResponse | ErrorResponse | null>;
  data: SignupResponse | ErrorResponse | null;
  loading: boolean;
}

interface UseSignupOptions {
  onSuccess?: () => void;
  onError?: () => void;
}

export function useSignup(options?: UseSignupOptions): UseSignupResult {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<SignupResponse | ErrorResponse | null>(null);

  const executeSignup = async (params: SignupRequest) => {
    setLoading(true);

    try {
      const response = await signup(params);
      setData(response);
      options?.onSuccess?.();
      return response;
    } catch (err) {
      options?.onError?.();
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    signup: executeSignup,
    data,
    loading,
  };
}
