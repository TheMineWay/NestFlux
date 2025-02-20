import { ZodSchema } from "zod";

export type EndpointDefinition = {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS" | "HEAD";
  getPath: (params: any) => string;
  dto?: ZodSchema;
  responseDto?: ZodSchema;
};
