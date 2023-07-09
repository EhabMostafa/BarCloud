import * as React from "react"
import Svg, { Defs, G, Path } from "react-native-svg"
import { calcHeight, calcWidth } from "../../config/metrics"

const DownArrow = (props: JSX.IntrinsicAttributes) => {
    return (
        <Svg
            width={calcWidth(11.474)}
            height={calcHeight(7.191)}
            viewBox="0 0 11.474 7.191"
            fill="none"
            {...props}
        >

            <Path
                d="M7.721.5h2.725s.852.17.341.852l-4.6 4.939s-.511.852-1.022 0l-4.6-4.939S.224.671 1.076.5h2.728"
                fill="none"
                stroke="#4e4e4e"
                strokeMiterlimit={10}

            />
        </Svg>
    )
}

export { DownArrow }