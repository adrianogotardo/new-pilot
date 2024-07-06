import { useLayoutEffect, useState } from "react";

export default function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    function calculateScreenSize() {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }

    useLayoutEffect(() => {
        calculateScreenSize();
        window.addEventListener('resize', calculateScreenSize);

        return () => window.removeEventListener('resize', calculateScreenSize);
    }, []);

    return windowSize;
}