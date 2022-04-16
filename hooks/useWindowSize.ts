import { useEffect, useState } from "react";

type windowSize = {
    height: number | undefined;
    width: number | undefined;
};

const useWindowSize = () => {
    let [windowSize, setWindowSize] = useState<windowSize>({
        height: undefined,
        width: undefined,
    });
    useEffect(() => {
        const resize = () => {
            setWindowSize({
                height: window.innerHeight,
                width: window.innerWidth,
            });
        };
        window.addEventListener("resize", resize);

        resize();

        return () => window.removeEventListener("resize", resize);
    }, []);
    return windowSize;
};

export default useWindowSize;
