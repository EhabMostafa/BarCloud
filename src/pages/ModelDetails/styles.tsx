import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../config/appStyles';
import { calcHeight, calcWidth } from '../../config/metrics';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: "center"
    },
    editButton: {
        paddingHorizontal: calcWidth(12),
        paddingVertical: calcHeight(7),
        backgroundColor: colors.white,
        borderRadius: calcWidth(17),
        borderWidth: calcWidth(1),
        borderColor: colors.border,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    editButtonText: {
        fontFamily: fonts.SemiBold,
        color: colors.text,
        fontSize: calcWidth(10),
        marginLeft: calcWidth(2)

    },
    scroll: {
        width: "100%"
    },
    scrollContainer: {
        paddingBottom: calcHeight(20),
        alignItems: "center"
    },
    detailsContainer: {
        width: calcWidth(350),
        paddingHorizontal: calcWidth(16),
        paddingVertical: calcHeight(16),
        borderRadius: calcWidth(25),
        backgroundColor: colors.modelDetailsContainerBackground,
        marginTop: calcHeight(21),
        alignItems: "center",
        minHeight: calcHeight(625)
    },
    imageContainerStyle: {
        width: calcWidth(224),
        height: calcHeight(163),
        borderRadius: calcWidth(19),
        marginBottom: calcHeight(23)
    },
    imageStyle: {
        width: calcWidth(196),
        height: calcHeight(130),
        borderRadius: calcWidth(19),
    },
    collapse: {
        paddingBottom: calcHeight(8)
    },
    inputContainerStyle: {
        width: calcWidth(315),
        backgroundColor: colors.white,
        borderRadius: calcWidth(19),
        minHeight: calcHeight(45)
    },
    inputStyle: {
        paddingVertical: calcHeight(7),

    },
    saveButton: {
        paddingHorizontal: calcWidth(8),
        paddingVertical: calcHeight(8),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        minWidth: calcWidth(50),
        alignSelf: "flex-end"


    },
    saveButtonText: {
        fontFamily: fonts.Regular,
        color: colors.text,
        fontSize: calcWidth(12),
        marginLeft: calcWidth(6)
    },
    historyText: {
        fontFamily: fonts.Regular,
        color: colors.text,
        fontSize: calcWidth(15),
    },
    list: {
        width: "100%",
        backgroundColor: colors.white,
        marginTop: calcHeight(4),
        borderRadius: calcWidth(19),
    },
    listContent: {
        paddingVertical: calcHeight(12),
        paddingHorizontal: calcWidth(12),
    },
    listSeparatorContainer: {
        paddingVertical: calcHeight(6.5)
    },
    listSeparator: {
        height: calcHeight(1.5),
        backgroundColor: "#DEDEDE",
        width: "100%"
    },
    noteContainer: {

    },
    noteUserName: {
        fontFamily: fonts.SemiBold,
        color: colors.text,
        fontSize: calcWidth(12),
    },
    noteDate: {
        fontFamily: fonts.Italic,
        color: colors.text,
        fontSize: calcWidth(8),
    },
    noteTxt: {
        fontFamily: fonts.Regular,
        color: colors.text,
        fontSize: calcWidth(12),
    }


});

export default styles;
