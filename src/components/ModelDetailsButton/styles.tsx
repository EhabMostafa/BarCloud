import { Platform, StyleSheet } from 'react-native'
import { colors, fonts } from '../../config/appStyles'
import { calcHeight, calcWidth } from '../../config/metrics'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "transparent",
        width: "100%",
        minHeight: calcHeight(49),
        paddingVertical: calcHeight(13),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderColor: colors.lightBorder,
        borderTopWidth: calcWidth(1.5),
        borderBottomWidth: calcWidth(1.5)

    },
    hideBottomBorder: {
        borderBottomWidth: 0
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
        fontFamily: fonts.Bold,
        color: colors.text,
        fontSize: calcWidth(16),
        maxWidth: calcWidth(190),
    }

})