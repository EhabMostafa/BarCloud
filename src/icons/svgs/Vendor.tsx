import * as React from "react"
import { I18nManager } from "react-native"
import Svg, { Circle, Defs, G, Path } from "react-native-svg"
import { calcHeight, calcWidth } from "../../config/metrics"

const Vendor = (props: JSX.IntrinsicAttributes) => {
    return (
        <Svg
            width={calcWidth(24.25)}
            height={calcHeight(25)}
            viewBox="0 0 24.25 25"
            fill="none"
            {...props}
        >

            <Defs></Defs>
            <G transform="translate(-.3 .1) translate(.8 .4)">
                <Circle
                    fill="none"
                    stroke={"#4d4e4e"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                    cx={5.062}
                    cy={5.062}
                    r={5.062}
                    transform="translate(3.937)"
                />
                <Path
                    fill="none"
                    stroke={"#4d4e4e"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                    d="M9.187 23.999A17.707 17.707 0 010 21.187c0-.375.375-7.687 6-9.75a6.053 6.053 0 006.375 0 8.158 8.158 0 013.75 2.625"
                />
            </G>
            <G transform="translate(-.3 .1) translate(9.425 10.337)">
                <Path fill="none"
                    stroke={"#4d4e4e"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={10} transform="translate(0 13.875)" d="M0 0L14.625 0" />
                <Path
                    fill="none"
                    stroke={"#4d4e4e"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                    transform="translate(.937 9.187)"
                    d="M0 0H2.625V4.687H0z"
                />
                <Path
                    fill="none"
                    stroke={"#4d4e4e"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                    transform="translate(6 6.937)"
                    d="M0 0H2.625V6.937H0z"
                />
                <Path
                    fill="none"
                    stroke={"#4d4e4e"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                    transform="translate(11.062 5.25)"
                    d="M0 0H2.625V8.625H0z"
                />
                <Path fill="none"
                    stroke={"#4d4e4e"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={10} d="M9.375 0h2.25v1.875" />
                <Path
                    fill="none"
                    stroke={"#4d4e4e"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                    d="M.937 7.312l2.625-2.437h3.187l.75-.75L11.624 0"
                />
            </G>
        </Svg>
    )
}

export { Vendor }