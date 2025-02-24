import useHydrated from "../../hooks/useHydrated";

const YandexMetrika = () => {
  const isHydrated = useHydrated();

  if (isHydrated) {
    return (
      <>
        <script src="/scripts/yandex_metrika.js"></script>
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/99932894"
              style={{ position: `absolute`, left: `-9999px` }}
              alt=""
            />
          </div>
        </noscript>
      </>
    );
  }
};

export default YandexMetrika;
