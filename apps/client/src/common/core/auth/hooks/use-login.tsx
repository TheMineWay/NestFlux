import { oidcUserManager } from "@common/core/auth/lib/oidc/oidc.manager";
import { useState } from "react";

export const useLogin = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const login = async () => {
    try {
      setIsAuthenticating(true);
      await oidcUserManager.signinRedirect();
    } catch (e) {
      console.error(e);
    } finally {
      setIsAuthenticating(false);
    }
  };

  return {
    login,
    isAuthenticating,
  };
};
