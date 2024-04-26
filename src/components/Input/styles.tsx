import { Dimensions, StyleSheet } from "react-native";
import {colors} from '../../../app.json' 
const {width} = Dimensions.get('screen')

const styles = StyleSheet.create({
    input: {
        width: width * 0.7,
        fontSize: 14,
        color: colors.primary02,
    },
    icon: {
        marginRight: width * 0.02,
    },
    container: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomColor: colors.primary02,
        borderBottomWidth: 1,
        marginHorizontal: width * 0.1,
    }
})

export default styles