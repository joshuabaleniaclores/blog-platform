interface AuthCredentials {
  email?: string;
  username?: string;
  password?: string;
}

interface AuthResponse<T> {
  statusCode: number;
  data: T;
  message: string;
  success: boolean;
}
export interface Data {
  user: {
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
  };
  accessToken?: string;
  refreshToken?: string;
}

export type LoginRequest = AuthCredentials;
export type LoginResponse = AuthResponse<Data>;
export type ErrorResponse =  {
  error: true;
  status: number;
  statusText: string;
  data?: unknown;
}
export interface SignupRequest extends AuthCredentials {
  role?: string;
}
export type SignupResponse = AuthResponse<Data>;
