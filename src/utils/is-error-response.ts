import { ErrorResponse } from "@/types/auth";

export function isErrorResponse(res: unknown): res is ErrorResponse {
  return (
    typeof res === "object" &&
    res !== null &&
    "error" in res &&
    (res as ErrorResponse).error === true
  );
}
