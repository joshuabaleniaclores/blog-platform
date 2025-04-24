interface AuthCredentials {
  email: string;
  password: string;
}

interface AuthResponse {
  token: string;
  message: string;
}

export type LoginRequest = AuthCredentials
export type LoginResponse = AuthResponse

export interface SignupRequest extends AuthCredentials {
  name?: string;
}
export type SignupResponse = AuthResponse
