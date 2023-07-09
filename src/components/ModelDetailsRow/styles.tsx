import { Platform, StyleSheet } from 'react-native'
import { colors, fonts } from '../../config/appStyles'
import { calcHeight, calcWidth } from '../../config/metrics'

export const styles = StyleSheet.create({
    container: {
        width: calcWidth(315),
        paddingVertical: calcHeight(6),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },


    leftContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    titleText: {
        fontFamily: fonts.Regular,
        color: colors.text,
        fontSize: calcWidth(15),
        maxWidth: calcWidth(175),
    },
    valueText: {
        fontFamily: fonts.Bold,
        color: colors.text,
        fontSize: calcWidth(15),
        maxWidth: calcWidth(130),
    },

})