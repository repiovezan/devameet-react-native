import {Dimensions, StyleSheet} from 'react-native'
import {colors} from '../app.json'
const {height, width} = Dimensions.get('screen')


const defaultStyles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modalView: {
        width: width * 0.9,
        minHeight: height * 0.27,
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 25,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
})

export default defaultStyles