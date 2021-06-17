import { StyleSheet } from "react-native";
import colors from "../../assets/theme/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    imageView: {
        borderRadius: 100,
        width: 150,
        height: 150,
        alignSelf: 'center',
    },
    chooseText: {
        color: colors.primary,
        textAlign: 'center',
    }
});