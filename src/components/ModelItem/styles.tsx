import { Platform, StyleSheet } from 'react-native'
import { colors, fonts } from '../../config/appStyles'
import { calcHeight, calcWidth } from '../../config/metrics'

export const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },

    imageContainer: {
        backgroundColor: colors.modalItemBackground,
        width: calcWidth(157),
        height: calcHeight(114),
        borderRadius: calcWidth(29),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    image: {
        width: calcWidth(140),
        height: calcHeight(90),
        borderRadius: calcWidth(29),
    },
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: calcHeight(4)
    },
    titleText: {
        fontFamily: fonts.Bold,
        color: colors.text,
        fontSize: calcWidth(14),
        maxWidth: calcWidth(150),
    }

})