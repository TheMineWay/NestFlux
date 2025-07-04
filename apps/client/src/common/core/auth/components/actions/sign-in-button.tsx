import { useLogin } from "@common/core/auth/hooks/use-login";
import { ENV } from "@constants/env/env.constant";
import { useTranslation } from "@i18n/use-translation";
import { Button, type ButtonProps } from "@mantine/core";
import { FiLogIn } from "react-icons/fi";

type Props = {
  onSuccess?: CallableFunction;
  onClick?: CallableFunction;
} & ButtonProps;

export const SignInButton: FC<Props> = ({ onSuccess, onClick, ...props }) => {
  const { interpolated } = useTranslation("auth");
  const { login, isAuthenticating } = useLogin();

  const onAuth = () => {
    login().then(() => onSuccess?.());
  };

  return (
    <Button
      leftSection={<FiLogIn />}
      color={ENV.auth.ui.providerColor}
      loading={isAuthenticating}
      variant="primary"
      onClick={() => {
        onClick?.();
        onAuth();
      }}
      {...props}
    >
      {interpolated((t) => t.actions.Login, {
        name: ENV.auth.ui.providerName,
      })}
    </Button>
  );
};
