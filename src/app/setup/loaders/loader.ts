import { QueryClient } from "@tanstack/react-query";
import { LoaderFunction } from "react-router-dom";

export type Loader = (queryClient: QueryClient) => LoaderFunction;

export type QueryFnParams = {
  token: string;
  signal?: AbortSignal;
};

export type QueryReturn<T, U> = {
  queryKey: T;
  queryFn: (params: QueryFnParams) => Promise<U>;
};
