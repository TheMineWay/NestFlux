import Auth from "@core/components/auth/sign-in/auth";
import {
  AUTH_CONTEXT,
  AUTH_CONTEXT_INFO_SCHEMA,
  AuthContextInfo,
} from "@core/providers/auth/auth.context";
import { useStoredAccounts } from "@core/providers/auth/stored-account.context";
import { WithChildren } from "@core/types/common/component.types";
import { useState } from "react";

/**
 * Stores in SESSION STORAGE the current auth info.
 * It includes:
 * - Auth token.
 * - User info (USER_SCHEMA).
 */
const SESSION_STORAGE_KEY = "active-auth-info";

export default function AuthProvider({ children }: Readonly<WithChildren>) {
  const [context, setContextState] = useState<AuthContextInfo | null>(
    readCurrentAuthData()
  );
  const { addAccount } = useStoredAccounts();

  const setContext = (info: AuthContextInfo | null) => {
    setCurrentAuthData(info);
    if (info) addAccount(info);
    setContextState(info);
  };

  if (!context) return <Auth setAuthContext={setContext} />;

  return (
    <AUTH_CONTEXT.Provider value={{ context, setContext }}>
      {children}
    </AUTH_CONTEXT.Provider>
  );
}

const readCurrentAuthData = (): AuthContextInfo | null => {
  try {
    const rawData = sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (!rawData) return null;

    const parsed = JSON.parse(rawData);

    return AUTH_CONTEXT_INFO_SCHEMA.parse(parsed);
  } catch {
    return null;
  }
};

const setCurrentAuthData = (data: AuthContextInfo | null) => {
  if (data) sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(data));
  else sessionStorage.removeItem(SESSION_STORAGE_KEY);
};
