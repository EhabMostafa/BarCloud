import * as React from "react"
import Svg, { Defs, G, Path } from "react-native-svg"
import { calcHeight, calcWidth } from "../../config/metrics"

const BarCode = (props: JSX.IntrinsicAttributes) => {
    return (
        <Svg
            width={calcWidth(27)}
            height={calcHeight(27)}
            viewBox="0 0 27 27"
            fill="none"
            {...props}
        >

            <Defs></Defs>
            <G transform="translate(.75 .75)">
                <Path stroke="#4e4e4e" fill={"none"} strokeLinecap="round" strokeWidth={1.5} transform="translate(3.739)" d="M0 0L0 18" />
                <Path stroke="#4e4e4e" fill={"none"} strokeLinecap="round" strokeWidth={1.5} transform="translate(6.543)" d="M0 0L0 18" />
                <Path stroke="#4e4e4e" fill={"none"} strokeLinecap="round" strokeWidth={1.5} transform="translate(11.217)" d="M0 0L0 18" />
                <Path stroke="#4e4e4e" fill={"none"} strokeLinecap="round" strokeWidth={1.5} transform="translate(14.021)" d="M0 0L0 18" />
                <Path stroke="#4e4e4e" fill={"none"} strokeLinecap="round" strokeWidth={1.5} transform="translate(16.825)" d="M0 0L0 18" />
                <Path stroke="#4e4e4e" fill={"none"} strokeLinecap="round" strokeWidth={1.5} transform="translate(21.499)" d="M0 0L0 18" />
                <Path
                    transform="translate(0 8)"
                    d="M0 0L26.172 0"
                    stroke="#b70000"
                    fill="none"
                    strokeLinecap="round"
                    strokeWidth="1.5px"
                />
            </G>

        </Svg>
    )
}

export { BarCode }