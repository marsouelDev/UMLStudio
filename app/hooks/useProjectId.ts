"use client";
import { useSearchParams } from "next/navigation";

export function useProjectId(): string | null {
  const searchParams = useSearchParams();
  return searchParams.get("projectId");
}
