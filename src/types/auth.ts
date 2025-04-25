interface AuthCredentials {
  email: string;
  password: string;
  [key: string]: unknown;
}

interface AuthResponse {
  message: string;
}

export type LoginRequest = AuthCredentials
export type LoginResponse = AuthResponse

export interface SignupRequest extends AuthCredentials {
  role?: string;
  username?: string;
}
export type SignupResponse = AuthResponse
