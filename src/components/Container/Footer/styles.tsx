import { Dimensions, StyleSheet } from "react-native";
import {colors} from '../../../../app.json' 
const {width, height} = Dimensions.get('screen')

const styles = StyleSheet.create({
    container: {
        height: height * 0.06,
        backgroundColor: colors.primary03,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: width * 0.18,
        marginVertical: height * 0.009
    },
    iconEditProfile: {
        width: width * 0.08,
        height: height * 0.04,
        borderRadius: 20,
        borderColor: colors.gray04,
        borderWidth: 2
    },
    
    active:{
        borderColor: colors.primary02,
    }
})

export default styles