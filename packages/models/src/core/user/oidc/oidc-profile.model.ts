import { OIDC_PROFILE_INFO_SCHEMA } from "@/core/user/oidc/oidc-profile-info.model";
import { DATE_SCHEMA } from "@/utils";
import z from "zod";

export const OIDC_PROFILE_SCHEMA = z
  .object({
    // Token
    iss: z.string().url(),
    sub: z.string(),
    aud: z.string(),
    exp: DATE_SCHEMA,
    iat: DATE_SCHEMA,
    sid: z.string().nullable(),
  })
  .merge(OIDC_PROFILE_INFO_SCHEMA);

export type OidcProfile = z.infer<typeof OIDC_PROFILE_SCHEMA>;
