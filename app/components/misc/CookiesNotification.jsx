import { useEffect, useState } from "react";
import useCookiesStore from "../../store/cookies";

const CookiesNotification = () => {
  const {
    showCookiesNotification,
    cookiesAccepted,
    acceptCookies,
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
        {/* Header */}
        <div className="p-15 border-b border-gray-300">
          <h3 className="font-subtitle text-sm">Файлы Cookie</h3>
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

          {/* Button */}
          <div className="flex">
            <button
              onClick={handleAccept}
              className="w-full bg-f1-light text-gray-400 hover:bg-f1-dark px-15 py-10 text-xs sm:text-xs text-[10px] font-subtitle transition-all duration-300"
            >
              Принять
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiesNotification;
