import * as React from "react"
import Svg, { Defs, G, Path } from "react-native-svg"
import { calcHeight, calcWidth } from "../../config/metrics"

const Arrow = (props: JSX.IntrinsicAttributes) => {
    return (
        <Svg
            width={calcWidth(19.717)}
            height={calcHeight(13.658)}
            viewBox="0 0 19.717 13.658"
            fill="none"
            {...props}
        >

            <Defs></Defs>
            <G transform="translate(-3.3 -4.58)">
                <Path
                    fill="none"
                    stroke={"#7ac692"}
                    strokeMiterlimit={10}
                    transform="translate(3.3 11.273)"
                    d="M0 0L11.942 0"
                />
                <Path
                    fill="none"
                    stroke={"#7ac692"}
                    strokeMiterlimit={10}
                    d="M15.036 9.008V5.713s.206-1.03 1.03-.412l5.97 5.56s1.03.618 0 1.235l-5.97 5.56s-.824.412-1.03-.618v-3.295"
                />
            </G>
        </Svg>
    )
}

export { Arrow }