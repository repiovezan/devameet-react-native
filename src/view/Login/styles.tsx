import { Dimensions, StyleSheet } from "react-native";
import {colors} from '../../../app.json' 
const {width, height} = Dimensions.get('screen')

const styles = StyleSheet.create({
    button: {
        width: width * 0.8,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    inputPassword: {
        marginBottom: height * 0.05,
        marginTop: height * 0.02
    },
    containerWithOutAccount: {
        marginTop:height * 0.04
    },
    textSignUp: {
        fontSize: 14,
        color: colors.primary02,
        textDecorationLine: "underline",
        fontFamily: 'biennale-bold',
        fontWeight: "700"
    },
    logo: {
        marginBottom: height * 0.08
    }

})

export default styles