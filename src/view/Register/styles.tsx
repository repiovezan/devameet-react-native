import { Dimensions, StyleSheet } from "react-native";
import {colors} from '../../../app.json' 
const {width, height} = Dimensions.get('screen')

const styles = StyleSheet.create({
    button: {
        width: width * 0.8,
        marginTop: height * 0.05
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    inputMargin: {
        marginTop: height * 0.02
    },
    containerWithAccount: {
        marginTop:height * 0.04
    },
    textSignIn: {
        fontSize: 14,
        color: colors.primary02,
        textDecorationLine: "underline",
        fontFamily: 'biennale-bold',
        fontWeight: "700"
    },
    error:{
        fontSize: 14,
        fontWeight: "400",
        color: colors.primary02,
        lineHeight: 21,
        marginBottom: height * 0.02
    }
})

export default styles