import { useState } from "react";
import { signup } from "@/api/auth/auth";
import type { SignupRequest, SignupResponse } from "@/types/auth"; 

export function useSignup() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<SignupResponse | null>(null);

  const executeSignup = async (params: SignupRequest) => {
    setLoading(true);
    setError(null);

    try {
      const response = await signup(params);
      setData(response);
      return response;
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    signup: executeSignup,
    data,
    error,
    loading,
  };
}
