import { Dimensions, StyleSheet } from "react-native";
import {colors} from '../../../app.json' 
const {width, height} = Dimensions.get('screen')

const styles = StyleSheet.create({
    containerInfo: {
        marginBottom: height * 0.4,
        borderBottomColor: colors.gray01,
        borderBottomWidth: 1
    },
    containerImage:{
        marginTop: height * 0.04,
        alignItems: "center"
    },
    textUpdateAvatar: {
        fontSize: 13,
        color: colors.primary02,
        fontFamily: 'biennale',
        textDecorationLine: "underline",
        marginBottom: 16,
        fontWeight: "500"
    },
    avatar:{
        width: 80,
        height: 80,
    },
    containerEditName:{
        flexDirection: "row",
        alignItems: "center",
        borderTopColor: colors.gray01,
        borderTopWidth: 1,
        paddingHorizontal: width * 0.08
    },
    inputPlaceholder: {
        fontFamily: 'biennale',
        fontSize: 14,
        fontWeight: "400",
        color: colors.gray04,
        marginRight: 16
    },
    input:{
        fontFamily: 'biennale',
        fontWeight: "500",
        color: colors.gray04,
        width: width/1.5,
    },
    container: {
        alignItems: "center"
    }
})

export default styles