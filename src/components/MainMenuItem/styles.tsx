import { Platform, StyleSheet } from 'react-native'
import { colors, fonts } from '../../config/appStyles'
import { calcHeight, calcWidth } from '../../config/metrics'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.mainMenuItemBackground,
        width: calcWidth(284),
        minHeight: calcHeight(49),
        paddingVertical: calcHeight(13),
        paddingHorizontal: calcHeight(18),
        borderRadius: calcWidth(29),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

    },

    leftContainer: {
        flexDirection: "row",
        alignItems: "center"
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
        maxWidth: calcWidth(190),
    }

})