import {Dimensions, StyleSheet} from 'react-native'
import {colors} from '../../../app.json'
const {height, width} = Dimensions.get('screen')

const styles = StyleSheet.create({
    modalView: {
        width: width * 0.9,
        height: height * 0.62,
    },
    title:{
        fontSize: 12,
        color: colors.gray02,
        fontWeight: '600',
        fontFamily: 'biennale'
    },
    subtitle:{
        fontSize: 16,
        color: colors.primary02,
        fontFamily: 'biennale-bold',
        fontWeight: '700'
    },
    avatarContainer:{
        flexDirection: 'row',
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: 20,
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: colors.gray01
    },
    avatarFrame: {
        backgroundColor: colors.primary03,
        padding: 7.9,
        paddingVertical: 1,
        margin: 5,
        borderRadius: 10
    },
    avatar: {
        width: width * 0.18,
        height: height * 0.12
    },
    select: {
        borderColor: colors.primary02,
        borderWidth: 2,
        borderStyle: 'solid'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: height * 0.02
    },
    back: {
        fontSize: 17,
        color: colors.primary02,
        textDecorationLine: 'underline',
        fontFamily: 'biennale-bold',
        fontWeight: '700',
    }
})

export default styles