import React, { useEffect, useState } from "react";
import style from "../styles/Window.module.scss";
import {
    FiMove,
    FiMaximize,
    FiX,
    FiMinimize,
    FiMinus,
    FiAlignJustify,
    FiPlus,
} from "react-icons/fi";
type coordinate2D = {
    x: number;
    y: number;
};

interface props {
    mouseDownHandler: (
        e:
            | React.MouseEvent<SVGElement | HTMLDivElement>
            | React.TouchEvent<SVGElement | HTMLDivElement>,
        windowName: string
    ) => void;
    mouseUpHandler: (
        e:
            | React.MouseEvent<SVGElement | HTMLDivElement>
            | React.TouchEvent<SVGElement | HTMLDivElement>,
        windowName: string
    ) => void;
    windowPosition: any;
    windowName: string;
    windowClicked: any;
    isWindowOpen: any;
    setIsWindowOpen: any;
    zValue: number;
    setWindowActive: any;
    resizable: boolean;
    initialSize: { height: number; width: number };
    children?: React.ReactNode;
}

const Window: React.FC<props> = ({
    mouseDownHandler,
    mouseUpHandler,
    windowPosition,
    windowName,
    windowClicked,
    isWindowOpen,
    setIsWindowOpen,
    zValue,
    setWindowActive,
    resizable,
    initialSize,
    children,
}) => {
    let [windowSize, setWindowSize] = useState(initialSize);
    let [isFullScreen, setFullScreen] = useState<boolean>(false);
    const closeWindowhandler = (e: any) => {
        setIsWindowOpen((prev: any) => {
            return { ...prev, [windowName]: false };
        });
    };
    const resize = (big: boolean) => {
        const resizeBySize = 0.8;
        if (big) {
            setWindowSize((prev) => {
                return {
                    width: prev.width + resizeBySize,
                    height: prev.height + resizeBySize,
                };
            });
            return;
        }

        setWindowSize((prev) => {
            return {
                width: prev.width - resizeBySize,
                height: prev.height - resizeBySize,
            };
        });
    };

    //if the window is not open don't display anything
    // if (!isWindowOpen[windowName]) return null;

    let dynamicStyle: React.CSSProperties = {
        transform: `translate(${windowPosition[windowName].x - 10}px, ${
            windowPosition[windowName].y - 10
        }px)`,
        cursor: windowClicked[windowName] ? "grabbing" : "default",
        userSelect: windowClicked[windowName] ? "none" : "auto",
        zIndex: zValue,
        width: windowSize.width + "rem",
        height: windowSize.height + "rem",
        opacity: isWindowOpen[windowName] ? "1" : "0",
        pointerEvents: isWindowOpen[windowName] ? "all" : "none",
    };

    //changing css accroding to state
    if (isFullScreen) {
        let newStyle = {
            ...dynamicStyle,
            transform: `translate(0px, 0px)`,
            width: "100%",
            height: "100%",
        };

        dynamicStyle = newStyle;
    }

    return (
        <div
            className={style.window}
            // onMouseMove={dragHandler}
            style={dynamicStyle}
            onClick={() => {
                //if only one window is open dont change z-index
                console.log(windowName);
                setWindowActive(windowName);
            }}
        >
            <header className={style.header}>
                <div className={style.move_icon}>
                    {isFullScreen ? (
                        <FiAlignJustify />
                    ) : (
                        <>
                            <FiMove
                                onMouseDown={(e) => {
                                    mouseDownHandler(e, windowName);
                                }}
                                onMouseUp={(e) => {
                                    mouseUpHandler(e, windowName);
                                }}
                                onTouchStart={(e) => {
                                    mouseDownHandler(e, windowName);
                                }}
                                onTouchEnd={(e) => {
                                    mouseUpHandler(e, windowName);
                                }}
                            />
                            {resizable && (
                                <>
                                    <FiPlus onClick={() => resize(true)} />
                                    <FiMinus onClick={() => resize(false)} />
                                </>
                            )}
                        </>
                    )}
                </div>
                <p>{windowName.toUpperCase()}</p>
                <div>
                    {resizable && (
                        <>
                            {isFullScreen ? (
                                <FiMinimize
                                    onClick={() => setFullScreen(false)}
                                />
                            ) : (
                                <FiMaximize
                                    onClick={() => setFullScreen(true)}
                                />
                            )}
                        </>
                    )}
                    <FiX color="red" onClick={closeWindowhandler} />
                </div>
            </header>
            {children}
        </div>
    );
};

export default Window;
