import * as React from "react"
import Svg, { Defs, G, Path } from "react-native-svg"
import { calcHeight, calcWidth } from "../../config/metrics"


const Save = (props: JSX.IntrinsicAttributes) => {
    return (
        <Svg
            width={calcWidth(13.7)}
            height={calcHeight(13.7)}
            viewBox="0 0 13.7 13.7"
            fill="none"
            {...props}
        >

            <Defs></Defs>
            <Path
                fill={"none"}
                stroke={"#4d4e4e"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                d="M13.4 9.1v3.6a.684.684 0 01-.7.7H9.9"
                transform="translate(-.2 -.2)"
            />
            <Path
                fill={"none"}
                stroke={"#4d4e4e"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                d="M10.5 13.4H1.4a.684.684 0 01-.7-.7V1.4a.684.684 0 01.7-.7h11.3a.684.684 0 01.7.7v8.1"
                transform="translate(-.2 -.2)"
            />
            <Path
                fill={"none"}
                stroke={"#4d4e4e"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                d="M8.9 6.3H5.1a1.216 1.216 0 01-1.2-1.2V.7h6.3v4.4a1.309 1.309 0 01-1.3 1.2z"
                transform="translate(-.2 -.2)"
            />
        </Svg>
    )
}

export { Save }