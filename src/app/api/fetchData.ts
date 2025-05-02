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
}): Promise<TResponse> {
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

    if (!response.ok) {
      throw new Error(`Error`);
    }

    const data = (await response.json()) as TResponse;
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
