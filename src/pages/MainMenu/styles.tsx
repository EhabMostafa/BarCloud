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
        paddingVertical: calcHeight(36),
        alignItems: "center"
    },
    listSeparator: {
        height: calcHeight(28)
    }

});

export default styles;
