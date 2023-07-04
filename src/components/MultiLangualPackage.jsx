import { TranslatorProvider, useTranslate } from "react-translate"

let translations = {
  locale: "en",
  Home: {
    "HELLO": "Helloworld!",
    "Sakshi":"Sakshi Joshi"
  }
};

function Home() {
  let t = useTranslate("Home");
  return <><h1> {t("HELLO")} </h1>
  <h1>{t("Sakshi")}</h1>
  </>
}

export function MultiLangual() {
  return (
    <TranslatorProvider translations={translations}>
      <Home />
    </TranslatorProvider>
  )
}
