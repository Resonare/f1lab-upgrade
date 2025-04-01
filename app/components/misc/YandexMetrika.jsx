import { useEffect } from "react";

const YandexMetrika = () => {
  useEffect(() => {
    // Only load Yandex Metrika in production environment
    if (process.env.NODE_ENV === "production") {
      const script = document.createElement("script");
      script.src = `/scripts/yandex_metrika.js`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);

      return () => {
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      };
    }
  }, []);

  return null; // Component doesn't render anything visible
};

export default YandexMetrika;
