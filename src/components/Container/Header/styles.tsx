import { Dimensions, StyleSheet } from "react-native";
import {colors} from '../../../../app.json' 
const {width, height} = Dimensions.get('screen')

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: colors.white,
        borderBottomColor: colors.gray01,
        borderBottomWidth: 1,
        justifyContent: "center",
    },
    logo: {
        height: height * 0.035,
        width: width * 0.44
    },
    containerDefault: {
        alignItems: "center"
    },
    containerEditProfile: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: width * 0.04
    },
    titleEditProfile: {
        fontWeight: "900",
        fontSize: 16,
        fontFamily: 'biennale-bold',
        color: colors.gray04,
        marginLeft: width * 0.08
    },
    submitEditProfile: {
        fontWeight: "700",
        fontSize: 12,
        fontFamily: 'biennale-bold',
        color: colors.primary02,
    },
})

export default styles