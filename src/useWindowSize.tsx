import React, { createContext, useState, useEffect, useContext } from 'react';

interface WindowSize {
    width: number;
    height: number;
}

interface WindowSizeContextValue {
    windowSize: WindowSize;
}

const WindowSizeContext = createContext<WindowSizeContextValue | undefined>(
    undefined
);

function WindowSizeProvider({ children }: { children: React.ReactNode }) {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener('resize', handleResize);
        window.addEventListener('orientationchange', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('orientationchange', handleResize);
        };
    }, []);

    const value: WindowSizeContextValue = {
        windowSize,
    };

    return (
        <WindowSizeContext.Provider value={value}>
            {children}
        </WindowSizeContext.Provider>
    );
}

function useWindowSize() {
    const context = useContext(WindowSizeContext);

    if (!context) {
        throw new Error('useWindowSize must be used within a WindowSizeProvider');
    }

    return context.windowSize;
}

export { WindowSizeProvider, useWindowSize };