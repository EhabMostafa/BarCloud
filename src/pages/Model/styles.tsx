import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../config/appStyles';
import { calcHeight, calcWidth } from '../../config/metrics';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: "center"
    },
    headerRightContainer: {
        alignItems: "center",
        marginRight: calcWidth(8)
    },
    headerRightText: {
        fontFamily: fonts.Bold,
        color: colors.text,
        fontSize: calcWidth(6),
        marginTop: calcHeight(3)

    },
    list: {
        width: "100%",
    },
    listContent: {
        paddingVertical: calcHeight(21),
        alignItems: "center"
    },
    listSeparatorContainer: {
        paddingVertical: calcHeight(16)
    },
    listSeparator: {
        height: calcHeight(1.5),
        backgroundColor: "#DEDEDE",
        width: calcWidth(325)
    }

});

export default styles;
