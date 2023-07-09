import { I18nManager, Platform, StyleSheet } from 'react-native';
import { colors, fonts } from '../../config/appStyles';
import { calcHeight, calcWidth, calcWidthRatio } from '../../config/metrics';


const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        width: "100%",

    },
    title: {
        fontFamily: fonts.Regular,
        color: colors.text,
        fontSize: calcWidth(14),
        marginBottom: calcHeight(8),
        alignSelf: "flex-start",
    },
    inputContainer: {
        width: "100%",
        borderRadius: calcWidth(29),
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.searchBack,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    textInput: {
        color: colors.text,
        paddingHorizontal: calcWidth(24),
        paddingLeft: calcWidth(42),
        fontSize: calcWidth(14),
        fontFamily: fonts.Italic,
        paddingVertical: calcHeight(14),
        width: "100%",
        textAlign: I18nManager.isRTL ? 'right' : 'left',
    },
    textInputWithoutIcon: {
        paddingLeft: calcWidth(15),
    },
    textInputWithEye: {
        paddingRight: calcWidth(56),
    },
    textInputWithRightButton: {
        paddingRight: calcWidth(118),
    },
    iconContainer: {
        position: "absolute",
        left: calcWidth(16)
    },

    rightButtonIcon: {
        marginRight: calcWidth(8)
    },
    eyeButton: {
        padding: calcWidth(8),
        position: "absolute",
        right: calcWidth(18),
        justifyContent: "center",
        alignItems: "center"
    },

    errorInfo: {
        marginTop: calcHeight(24)
    },
    dateButton: {
        width: "100%",
        height: "100%",
        position: "absolute",
    },
    maxLen: {
        alignSelf: "flex-end",
        marginTop: calcHeight(8)
    },
    eyeButtonWithRightButton: {
        right: calcWidth(107),
    }



});

export default styles;
