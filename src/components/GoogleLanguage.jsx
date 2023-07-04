import { useEffect } from "react";

const App = () => {
    const googleTranslateElementInit = () => {
        const translateElement = new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            autoDisplay: false,
          },
          "google_translate_element"
        );

        translateElement.doTranslation(); // Call the desired method
      };

  useEffect(() => {
    const addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  return (
    <>
      <div id="google_translate_element"></div>
      <h4>Start building your app. Happy Coding!</h4>
    </>
  );
};

export default App;

