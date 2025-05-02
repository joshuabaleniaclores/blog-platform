interface AuthCredentials {
  email: string;
  password: string;
  [key: string]: unknown;
}

interface AuthResponse<T> {
  statusCode: number;
  data: T;
  message: string;
  success: boolean;
}
export interface User {
  _id: string;
  avatar: {
    url: string;
    localPath: string;
    _id: string;
  };
  username: string;
  email: string;
  role: "ADMIN" | "USER" | string; 
  loginType: "EMAIL_PASSWORD" | string;
  isEmailVerified: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export type LoginRequest = AuthCredentials
export type LoginResponse = AuthResponse<User>

export interface SignupRequest extends AuthCredentials {
  role?: string;
  username?: string;
}
export type SignupResponse = AuthResponse<User>
