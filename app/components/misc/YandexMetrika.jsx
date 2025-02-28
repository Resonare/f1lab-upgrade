import { useEffect } from "react";

const YandexMetrika = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `/scripts/yandex_metrika.js`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);
};

export default YandexMetrika;
