import { ErrorResponse } from "@/types/auth";

const BASE_URL: string | undefined = process.env.NEXT_PUBLIC_API_URL;


export async function fetchData<
  TParams,
  TResponse = unknown
>({
  endpoint,
  params,
  method,
}: {
  endpoint: string;
  params?: TParams;
  method: "GET" | "POST" | "PUT" | "DELETE";
}): Promise<TResponse | ErrorResponse> {
  try {
    const options: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (method !== "GET" && params) {
      options.body = JSON.stringify(params);
    }

    const response = await fetch(`${BASE_URL}/api${endpoint}`, options);
    const data = await response.json();

    if (!response.ok) {
      return {
        error: true,
        status: response.status,
        statusText: response.statusText,
        data,
      };
    }

    return data as TResponse;
  } catch (error) {
    console.error("Fetch error:", error);
    return {
      error: true,
      status: 500,
      statusText: "Fetch error",
      data: error,
    };
  }
}
