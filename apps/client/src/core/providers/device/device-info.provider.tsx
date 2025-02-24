import { DEVICE_INFO_CONTEXT } from "@core/providers/device/device-info.context";
import { WithChildren } from "@core/types/common/component.types";
import { useEffect, useState } from "react";

type Props = WithChildren;

export default function DeviceInfoProvider({ children }: Readonly<Props>) {
  // States
  const [windowSizeInfo, setWindowSizeInfo] = useState<
    Pick<Window, "innerWidth" | "innerHeight">
  >({
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
  });

  // State modifiers
  useEffect(() => {
    const handleResize = () => {
      setWindowSizeInfo({
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Build info objects

  const windowInfo = { ...windowSizeInfo };
  const booleans = {
    isMobile: windowSizeInfo.innerWidth < 768,
  };

  return (
    <DEVICE_INFO_CONTEXT.Provider
      value={{
        window: windowInfo,
        ...booleans,
      }}
    >
      {children}
    </DEVICE_INFO_CONTEXT.Provider>
  );
}
