import { Platform, StyleSheet } from 'react-native'
import { colors, fonts } from '../../config/appStyles'
import { calcHeight, calcWidth } from '../../config/metrics'

export const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        backgroundColor: colors.headerBackground,
        width: "100%",
        minHeight: calcHeight(53),
        paddingVertical: calcHeight(9),
        paddingHorizontal: calcHeight(11),
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    contentContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
    },
    leftContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    button: {
        alignItems: "center",
        flexDirection: "row",

    },
    backContainer: {
        alignItems: "center"
    },
    backText: {
        fontFamily: fonts.Bold,
        color: colors.text,
        fontSize: calcWidth(6),

    },
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: calcWidth(8),
    },
    titleText: {
        fontFamily: fonts.Bold,
        color: colors.text,
        fontSize: calcWidth(18),
        maxWidth: calcWidth(230),
    }

})