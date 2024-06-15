"use client";

import { useSwiper } from "swiper/react";
import { PiCaretRightBold, PiCaretLeftBold } from "react-icons/pi"

const SliderButtons = ({ containerStyles, btnStyles, iconStyles }: any) => {
    const swiper = useSwiper()
    return (
        <div className={containerStyles}>
            <button onClick={() => swiper.slidePrev()} className={btnStyles}><PiCaretLeftBold className={iconStyles} /></button>
            <button onClick={() => swiper.slideNext()} className={btnStyles}><PiCaretRightBold className={iconStyles} /></button>
        </div>
    )
}

export default SliderButtons;
