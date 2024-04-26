import {Dimensions, StyleSheet} from 'react-native'
import {colors} from '../../../app.json'
const {height, width} = Dimensions.get('screen')


const styles = StyleSheet.create({
    button: {
        width: width/2.3,
        height: height/15,
        backgroundColor: colors.primary02,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: colors.white,
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 16
    },
    buttonDisabled: {
        backgroundColor: colors.gray03
    }
})

export default styles