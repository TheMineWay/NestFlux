import NetworkProvider from "@providers/network/network.provider.tsx";
import ThemeProvider from "@providers/theme/theme.provider.tsx";
import UIProviders from "@providers/ui/ui.providers.tsx";
import { WithChildren } from "@ts-types/common/component.types";

export default function Providers({ children }: Readonly<WithChildren>) {
  return (
    <ThemeProvider>
      <UIProviders>
        <NetworkProvider>{children}</NetworkProvider>
      </UIProviders>
    </ThemeProvider>
  );
}