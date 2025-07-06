import { useEffect, useState } from "react";

const TitleBar = () => {
  const [isMaximized, setIsMaximized] = useState(false);

  useEffect(() => {
    // Listen for window state changes if needed
    const handleResize = () => {
      // You can add logic here to detect if window is maximized
      // For now, we'll manage this through button clicks
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMinimize = () => {
    if (window.electronAPI) {
      window.electronAPI.minimize();
    }
  };

  const handleMaximize = () => {
    if (window.electronAPI) {
      window.electronAPI.maximize();
      setIsMaximized(!isMaximized);
    }
  };

  const handleClose = () => {
    if (window.electronAPI) {
      window.electronAPI.close();
    }
  };

  return (
    <div
      className="h-8 bg-[var(--secondary)] flex items-center justify-between px-4 select-none"
      style={{ WebkitAppRegion: "drag" }}
    >
      {/* Left side - App title */}
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="Logo" className="w-4 h-4" />
        <span className="text-sm font-medium text-[var(--primary2)]">
          Hospital Management System
        </span>
      </div>

      {/* Right side - Window controls */}
      <div className="flex items-center" style={{ WebkitAppRegion: "no-drag" }}>
        {/* Minimize button */}
        <button
          onClick={handleMinimize}
          className="h-8 w-8 flex items-center justify-center hover:bg-[var(--neutral-400)] text-[var(--text-secondary)] hover:text-[var(--primary2)] transition-colors"
          title="Minimize"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M2 6h8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Maximize/Restore button */}
        <button
          onClick={handleMaximize}
          className="h-8 w-8 flex items-center justify-center hover:bg-[var(--neutral-400)] text-[var(--text-secondary)] hover:text-[var(--primary2)] transition-colors"
          title={isMaximized ? "Restore" : "Maximize"}
        >
          {isMaximized ? (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M3 3h6v6H3V3z M1 5v6h6"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          ) : (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <rect
                x="2"
                y="2"
                width="8"
                height="8"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          )}
        </button>

        {/* Close button */}
        <button
          onClick={handleClose}
          className="h-8 w-8 flex items-center justify-center hover:bg-red-500 text-[var(--text-secondary)] hover:text-white transition-colors"
          title="Close"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M2 2l8 8M2 10l8-8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TitleBar;
