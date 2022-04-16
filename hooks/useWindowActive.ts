import { useCallback, useState } from "react";

export type ZValStore = {
    contact: number;
    aboutme: number;
    help: number;
    myworks: number;
};

const useWindowActive = (): [ZValStore, (arg: keyof ZValStore) => void] => {
    let [windowZVal, setWindowZVal] = useState<ZValStore>({
        contact: 1,
        aboutme: 1,
        help: 1,
        myworks: 1,
    });

    const setWindowActive = useCallback<(arg: keyof ZValStore) => void>(
        (name: keyof ZValStore) => {
            setWindowZVal((prev) => {
                let biggestZVal = 0;
                let key: keyof ZValStore;
                for (key in prev) {
                    if (prev[key] > biggestZVal) {
                        biggestZVal = prev[key];
                    }
                }
                return { ...prev, [name]: biggestZVal + 1 };
            });
        },
        [setWindowZVal]
    );

    return [windowZVal, setWindowActive];
};

export default useWindowActive;
