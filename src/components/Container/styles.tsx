import { Dimensions, StyleSheet } from "react-native";
import {colors} from '../../../app.json' 
const {width, height} = Dimensions.get('screen')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    content: {
        flex: 1,
        backgroundColor: colors.white
    },
})

export default styles