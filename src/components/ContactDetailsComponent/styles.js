import { StyleSheet } from "react-native";
import colors from "../../assets/theme/colors";

export default StyleSheet.create({
    scrollview: {
        backgroundColor: colors.white,
    },
    container: {
        flex: 1,
    },
    names: {
        fontSize: 23,
    },
    contact: {
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    callicon: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 15,
    },
    middleCallOptions: {
        flexDirection: 'row',
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    phoneMobile: {
        flexGrow: 1,
        paddingHorizontal: 20,
    },
    seperator: {
        height: 0.8,
        backgroundColor: colors.grey,

    }


});