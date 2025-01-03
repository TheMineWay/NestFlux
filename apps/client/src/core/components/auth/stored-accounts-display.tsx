import { AuthContextInfo } from "@core/providers/auth/auth.context";
import {
  type StoredAccount,
  useStoredAccounts,
} from "@core/providers/auth/stored-account.context";
import { getGravatarUrl, getUserName } from "@shared/utils";
import { Card } from "antd";
import styles from "./stored-accounts-display.module.pcss";

type Props = {
  onSuccess: (authContext: AuthContextInfo) => void;
};

export default function StoredAccountsDisplay({ onSuccess }: Readonly<Props>) {
  const { accounts } = useStoredAccounts();

  return (
    <div className="grid grid-cols-2 gap-4">
      {Object.values(accounts).map((account) => (
        <Account
          account={account}
          key={account.user.id}
          onPick={() => onSuccess(account)}
        />
      ))}
    </div>
  );
}

const Account = ({
  account,
  onPick,
}: {
  account: StoredAccount;
  onPick: () => void;
}) => {
  const avatarUrl = account.user.email
    ? getGravatarUrl(account.user.email)
    : "https://http.cat/images/102.jpg";

  return (
    <Card
      className={styles.card}
      classNames={{
        body: styles["card-body"],
      }}
      onClick={onPick}
    >
      <img
        className="h-36 w-36 rounded-t-lg object-cover"
        alt="avatar"
        src={avatarUrl}
      />
      <p className="text-center py-2">{getUserName(account.user)}</p>
    </Card>
  );
};
