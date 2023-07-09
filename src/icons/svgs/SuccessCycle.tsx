import * as React from "react"
import Svg, { Circle, Defs, Path } from "react-native-svg"
import { calcHeight, calcWidth } from "../../config/metrics"

const SuccessCycle = (props: JSX.IntrinsicAttributes) => {
    return (
        <Svg
            width={calcWidth(27)}
            height={calcHeight(27)}
            viewBox="0 0 27 27"
            fill="none"
            {...props}
        >

            <Defs></Defs>
            <Circle
                fill={"#f4faf5"}
                stroke={"#7ac692"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                cx={13}
                cy={13}
                r={13}
                transform="translate(.5 .482) translate(0 .018)"
            />
            <Path
                fill={"#f4faf5"}
                stroke={"#7ac692"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                d="M0 4.97l3.163 2.937L8.7 0"
                transform="translate(.5 .482) translate(8.836 9.062)"
            />
        </Svg>
    )
}

export { SuccessCycle }