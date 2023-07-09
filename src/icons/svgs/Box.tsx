import * as React from "react"
import Svg, { Defs, G, Path } from "react-native-svg"
import { calcHeight, calcWidth } from "../../config/metrics"


const Box = (props: JSX.IntrinsicAttributes) => {
    return (
        <Svg
            width={calcWidth(27.044)}
            height={calcHeight(23.839)}
            viewBox="0 0 27.044 23.839"
            fill="none"
            {...props}
        >

            <Defs></Defs>
            <G transform="translate(.2 -1.3) translate(3.105 1.8)">
                <Path
                    fill="none"
                    stroke={"#4d4e4e"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                    d="M11.419 3.606h8.414v16.428H0V3.606h8.214M8.214 3.606H0L1.4 0h16.63l1.8 3.606h-8.411"
                />
                <Path
                    fill="none"
                    stroke={"#4d4e4e"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                    transform="translate(8.214)"
                    d="M0 0H3.205V9.015H0z"
                />
            </G>
            <Path
                fill="none"
                stroke={"#4d4e4e"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                d="M.3 23.036v1.6h26.044v-1.6"
                transform="translate(.2 -1.3)"
            />
        </Svg>
    )
}

export { Box }