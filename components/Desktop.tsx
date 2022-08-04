import React, { useState } from "react";
import Window from "./Window";
import style from "../styles/Window.module.scss";
import Contact from "./Contact";
import DesktopIcons from "./DesktopIcons";
import useWindowSize from "../hooks/useWindowSize";
import useWindowActive from "../hooks/useWindowActive";
import Help from "./Help";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Certificates from "./certificates";

function Desktop() {
    let [clicked, setClicked] = useState<boolean>(false);

    let [windowClicked, setWindowClicked] = useState({
        contact: false,
        myworks: false,
        aboutme: false,
        help: false,
        certification: false,
    });
    let [windowPosition, setWindowPosition] = useState({
        contact: { x: 20, y: 20 },
        myworks: { x: 45, y: 45 },
        aboutme: { x: 40, y: 40 },
        help: { x: 50, y: 50 },
        certification: { x: 44, y: 44 },
    });

    let [isWindowOpen, setIsWindowOpen] = useState({
        contact: false,
        myworks: false,
        aboutme: false,
        help: true,
        certification: false,
    });

    let [windowsZValue, setWindowActive] = useWindowActive();

    let windowsize = useWindowSize();

    const desktopDragHandler = (
        e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
    ) => {
        if (!clicked) return;
        //check if any windows are selected
        let selectedWindow: string = "";
        //typescript wont allow you to access random string from object so this is the workaround
        let key: keyof typeof windowClicked;
        for (key in windowClicked) {
            if (windowClicked[key]) {
                selectedWindow = key;
            }
        }

        if (!selectedWindow) return;
        //if a window is selected change its position

        //depending on touch screen or mouse we have different properties
        let position = { x: 0, y: 0 };
        if (e.type === "touchmove") {
            //code i got from stack overflow don't have a clue about touch events lol
            // let evt =
            //     typeof (e as React.TouchEvent<HTMLDivElement>).originalEvent ===
            //     "undefined"
            //         ? e
            //         : e.originalEvent;

            //manual typecast because typescript is not smart enough to differentiate between event types based on the above if check
            let evt = e as React.TouchEvent<HTMLDivElement>;
            let touch = evt.touches[0] || evt.changedTouches[0];
            position.x = touch.pageX;
            position.y = touch.pageY;
        } else {
            position.x = (e as React.MouseEvent<HTMLDivElement>).clientX;
            position.y = (e as React.MouseEvent<HTMLDivElement>).clientY;
        }
        setWindowPosition((prev) => {
            return {
                ...prev,
                [selectedWindow]: {
                    x: position.x,
                    y: position.y,
                },
            };
        });
    };

    const mouseDownHandler = (
        e:
            | React.MouseEvent<SVGElement | HTMLDivElement>
            | React.TouchEvent<SVGElement | HTMLDivElement>,
        windowName: string
    ) => {
        //check if no other window is selected
        //typescript wont allow you to access random string from object so this is the workaround
        let key: keyof typeof windowClicked;
        for (key in windowClicked) {
            if (windowClicked[key]) {
                return;
            }
        }

        //if no other window is selected, select the clicked on window
        setWindowClicked((prev) => {
            return { ...prev, [windowName]: true };
        });
    };

    const mouseUpHandler = (
        _e:
            | React.MouseEvent<SVGElement | HTMLDivElement>
            | React.TouchEvent<SVGElement | HTMLDivElement>,
        windowName: string
    ) => {
        setWindowClicked((prev) => {
            let oldSelectWindows = { ...prev };
            let key: keyof typeof windowClicked;
            for (key in oldSelectWindows) {
                oldSelectWindows[key] = false;
            }
            return oldSelectWindows;
        });
    };

    return (
        <div
            className={style.desktop}
            onMouseDown={(e) => {
                setClicked(true);
            }}
            onMouseUp={(e) => {
                setClicked(false);
            }}
            onMouseMove={desktopDragHandler}
            // for my touch screen gang
            onTouchStart={(e) => {
                setClicked(true);
            }}
            onTouchEnd={(e) => {
                setClicked(false);
            }}
            onTouchMove={desktopDragHandler}
        >
            <DesktopIcons
                setIsWindowOpen={setIsWindowOpen}
                setWindowActive={setWindowActive}
            />
            <Window
                mouseDownHandler={mouseDownHandler}
                mouseUpHandler={mouseUpHandler}
                windowPosition={windowPosition}
                windowClicked={windowClicked}
                isWindowOpen={isWindowOpen}
                setIsWindowOpen={setIsWindowOpen}
                zValue={windowsZValue.contact}
                setWindowActive={setWindowActive}
                initialSize={{ height: 25, width: 25 }}
                resizable={false}
                windowName="contact"
            >
                <Contact
                    email="alwinmathew4@gmail.com"
                    linkedin="https://www.linkedin.com/in/alwincodes/"
                />
            </Window>
            <Window
                mouseDownHandler={mouseDownHandler}
                mouseUpHandler={mouseUpHandler}
                windowPosition={windowPosition}
                windowClicked={windowClicked}
                isWindowOpen={isWindowOpen}
                setIsWindowOpen={setIsWindowOpen}
                zValue={windowsZValue.aboutme}
                setWindowActive={setWindowActive}
                initialSize={{ height: 65, width: 45 }}
                resizable={true}
                windowName="aboutme"
            >
                <AboutMe />
            </Window>
            <Window
                mouseDownHandler={mouseDownHandler}
                mouseUpHandler={mouseUpHandler}
                windowPosition={windowPosition}
                windowClicked={windowClicked}
                isWindowOpen={isWindowOpen}
                setIsWindowOpen={setIsWindowOpen}
                zValue={windowsZValue.help}
                setWindowActive={setWindowActive}
                initialSize={{ height: 35, width: 45 }}
                resizable={false}
                windowName="help"
            >
                <Help />
            </Window>
            <Window
                mouseDownHandler={mouseDownHandler}
                mouseUpHandler={mouseUpHandler}
                windowPosition={windowPosition}
                windowClicked={windowClicked}
                isWindowOpen={isWindowOpen}
                setIsWindowOpen={setIsWindowOpen}
                zValue={windowsZValue.myworks}
                setWindowActive={setWindowActive}
                initialSize={{ height: 65, width: 45 }}
                resizable={true}
                windowName="myworks"
            >
                <Projects />
            </Window>
            <Window
                mouseDownHandler={mouseDownHandler}
                mouseUpHandler={mouseUpHandler}
                windowPosition={windowPosition}
                windowClicked={windowClicked}
                isWindowOpen={isWindowOpen}
                setIsWindowOpen={setIsWindowOpen}
                zValue={windowsZValue.certification}
                setWindowActive={setWindowActive}
                initialSize={{ height: 55, width: 50 }}
                resizable={true}
                windowName="certification"
            >
                <Certificates />
            </Window>
        </div>
    );
}

export default Desktop;
