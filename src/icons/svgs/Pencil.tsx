import * as React from "react"
import Svg, { Defs, G, Path } from "react-native-svg"
import { calcHeight, calcWidth } from "../../config/metrics"


const Pencil = (props: JSX.IntrinsicAttributes) => {
    return (
        <Svg
            width={calcWidth(13.245)}
            height={calcHeight(13.168)}
            viewBox="0 0 13.245 13.168"
            fill="none"
            {...props}
        >

            <Defs></Defs>
            <G transform="translate(-.1 -.2)">
                <Path
                    fill={"none"}
                    stroke={"#4e4e4e"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                    d="M12.245 2.248L2.79 11.393 0 12.168l.62-2.79L10.23 0z"
                    transform="translate(.6 .7)"
                />
                <Path
                    fill={"none"}
                    stroke={"#4e4e4e"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                    transform="translate(9.28 2.173)"
                    d="M0 0L2.015 2.248"
                />
            </G>
        </Svg>
    )
}

export { Pencil }