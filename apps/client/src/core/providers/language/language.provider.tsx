import { Language } from "@core/types/base/i18n/language.enum";
import { TranslationStore } from "@core/types/base/i18n/translation/translation-store.type";
import { WithChildren } from "@core/types/common/component.types";
import { getLocale } from "@i18n/locales/locales";
import { createContext, useContext, useEffect, useState } from "react";

const CONTEXT = createContext<LanguageContext>(null!);
const DEFAULT_LANGUAGE = Language.EN_US;

type Props = WithChildren;

export default function LanguageProvider({ children }: Readonly<Props>) {
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);
  const [translations, setTranslations] = useState<TranslationStore>();

  useEffect(() => {
    const updateLoadedLocale = async () => {
      setTranslations({
        ...(await getLocale(language)).default,
      });
    };

    updateLoadedLocale();
  }, [language]);

  if (!translations) return null;

  return (
    <CONTEXT.Provider
      value={{
        language,
        setLanguage,
        translations,
      }}
    >
      {children}
    </CONTEXT.Provider>
  );
}

export const useLanguageContext = () => {
  const context = useContext(CONTEXT);

  if (!context)
    throw new Error(
      "Tried to use useLanguageContext outside the LanguageProvider"
    );

  return context;
};

interface LanguageContext {
  language: Language;
  setLanguage: (language: Language) => void;
  translations: TranslationStore;
}
