import { fetchData } from "@/app/api/fetchData";
import { LoginRequest, LoginResponse, SignupRequest, SignupResponse } from "@/types/auth";

export async function login(params: LoginRequest): Promise<LoginResponse> {
  try {
    const res = await fetchData<LoginRequest, LoginResponse>({
      endpoint: '/auth/login',
      method: 'POST',
      params,
    });
    return res;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
}

export async function signUp(params: SignupRequest): Promise<SignupResponse> {
  try {
    const res = await fetchData<SignupRequest, SignupResponse>({
      endpoint: '/auth/signup',
      method: 'POST',
      params,
    });
    return res;
  } catch (error) {
    console.error('Signup error:', error);
    throw error;
  }
}