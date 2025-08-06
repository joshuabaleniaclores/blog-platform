import { makeApiRequest } from "../make-api-request";
import { ErrorResponse, LoginRequest, LoginResponse, SignupRequest, SignupResponse } from "@/types/auth";

export async function login(params: LoginRequest): Promise<LoginResponse | ErrorResponse> {
  try {
    const res = await makeApiRequest<LoginRequest, LoginResponse>({
      endpoint: '/v1/users/login',
      method: 'POST',
      params,
    });
    return res;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
}

export async function signup(params: SignupRequest): Promise<SignupResponse | ErrorResponse> {
  try {
    const res = await makeApiRequest<SignupRequest, SignupResponse>({
      endpoint: '/v1/users/register',
      method: 'POST',
      params,
    });
    return res;
  } catch (error) {
    console.error('Signup error:', error);
    throw error;
  }
}