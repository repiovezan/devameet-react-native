import {Dimensions, StyleSheet} from 'react-native'
import {colors} from '../../../app.json'
const {height, width} = Dimensions.get('screen')


const styles = StyleSheet.create({
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 16,
        color: colors.primary02
    },
    messagesContainer: {
        marginTop: height * 0.02
    },
    message: {
        fontSize: 16
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: height * 0.04
    },
    textCancel:{
        fontSize: 17,
        color: colors.primary02,
        textDecorationLine: 'underline',
        margin: width * 0.04
    }
})

export default styles