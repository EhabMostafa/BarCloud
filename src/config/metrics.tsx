/*
 * platform/application wide metrics for proper styling
*/
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen');

const metrics = {
    screenWidth: width < height ? width : height,
    screenHeight: width < height ? height : width,
};

export const calcWidthRatio = (target: number, parent: number = 375) => {
    let ratio = ((target / parent) * 100.0).toString() + "%"
    return ratio
}

export const calcWidth = (target: number | 375) => {

    return metrics.screenWidth * (target / 375)
}

export const calcHeight = (target: number | 812) => {
    return metrics.screenHeight * (target / 812)
}

export const calcHeightRatio = (target: number, parent: number = 812) => {
    let ratio = ((target / parent) * 100.0).toString() + "%"
    return ratio
}

export default metrics;
