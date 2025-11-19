import { useEffect, useState } from "react";
import useCookiesStore from "../../store/cookies";

const CookiesNotification = () => {
  const {
    showCookiesNotification,
    cookiesAccepted,
    acceptCookies,
    dismissNotification,
    initializeFromStorage,
  } = useCookiesStore();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Initialize from localStorage on component mount
    initializeFromStorage();
  }, [initializeFromStorage]);

  useEffect(() => {
    // Only show notification if cookies haven't been accepted and notification should be shown
    if (showCookiesNotification && !cookiesAccepted) {
      // Small delay to allow for smooth animation
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [showCookiesNotification, cookiesAccepted]);

  const handleAccept = () => {
    setIsVisible(false);
    setTimeout(() => {
      acceptCookies();
    }, 300);
  };

  const handleDismiss = () => {
    setIsVisible(false);
    setTimeout(() => {
      dismissNotification();
    }, 300);
  };

  if (!showCookiesNotification || cookiesAccepted) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-20 left-20 sm:left-20 left-10 z-50 max-w-sm sm:max-w-sm max-w-[calc(100vw-40px)] transform transition-all duration-500 ease-in-out ${
        isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      }`}
    >
      <div className="bg-gray-400 text-f1-light border-2 border-f1-light shadow-2xl overflow-hidden">
        {/* Header with close button */}
        <div className="flex items-center justify-between p-15 border-b border-gray-300">
          <h3 className="font-subtitle text-sm">Файлы Cookie</h3>
          <button
            onClick={handleDismiss}
            className="text-gray-200 hover:text-f1-light transition-colors duration-200 p-5"
            aria-label="Закрыть"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <path d="M6.707 6l4.147-4.146a.5.5 0 00-.708-.708L6 5.293 1.854 1.146a.5.5 0 00-.708.708L5.293 6 1.146 10.146a.5.5 0 00.708.708L6 6.707l4.146 4.147a.5.5 0 00.708-.708L6.707 6z" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-15">
          <p className="text-xs sm:text-xs text-[10px] leading-relaxed text-gray-100 mb-15">
            Мы используем файлы cookie для улучшения работы сайта и анализа
            трафика.{" "}
            <a
              href="/privacy_policy_f1lab.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-f1-light hover:text-f1-dark underline transition-colors duration-200"
            >
              Подробнее
            </a>
          </p>

          {/* Buttons */}
          <div className="flex sm:flex-row flex-col gap-10">
            <button
              onClick={handleAccept}
              className="flex-1 bg-f1-light text-gray-400 hover:bg-f1-dark px-15 py-10 text-xs sm:text-xs text-[10px] font-subtitle transition-all duration-300"
            >
              Принять
            </button>
            <button
              onClick={handleDismiss}
              className="px-15 py-10 text-xs sm:text-xs text-[10px] font-subtitle text-gray-200 hover:text-f1-light border border-gray-300 hover:border-f1-light transition-all duration-300"
            >
              Отклонить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiesNotification;
