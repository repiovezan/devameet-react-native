import { Dimensions, StyleSheet } from 'react-native'
import { colors } from '../../../app.json'
const { height, width } = Dimensions.get('screen')

const styles = StyleSheet.create({
    bg: {
        height: height * 0.8,
    },
    roomContainer: {
        position: 'relative',
        marginBottom: height * 0.03,
        flex: 1
    },
    row: {
        flexDirection: 'row',
        flex: 1
    },
    toEnterContainer: {
        zIndex: 1000,
        height: height * 0.455,
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0, 
        left: 0,
        backgroundColor: colors.gray04,
        opacity: 0.75,
        justifyContent: 'center',
        alignItems: 'center'
    },
    muteContainer: 
    {
        zIndex: 1000,
        height: height * 0.455,
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0, 
        left: 0,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    centerContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    centerContainerNotFound: {
        justifyContent: 'center',
        flex: 1
    },
    door: {
        width: 52
    },
    mute: {
        width: 32,
        margin: 10
    },
    enterButton: {
        borderColor: colors.white,
        borderWidth: 1,
        borderRadius: 5,
        padding: 7,
        marginTop: height * 0.02,
    },
    enterText: {
        fontSize: 12,
        color: colors.white,
        fontFamily: 'Biennale'
    },
    notFoundContainer: {
        alignItems: 'center',
        paddingVertical: height * 0.2,
        backgroundColor: colors.white
    },
    textNotFound: {
        fontSize: 14,
        fontFamily: 'Biennale',
        marginTop: height * 0.02
    },
    avatarNameContainer:{
        backgroundColor: colors.gray04,
        bottom: 18,
        right: 15,
        borderColor: colors.white,
        borderWidth: 1,
        borderRadius: 15,
        alignItems: 'center',
        minWidth: width * 0.18,        
        zIndex: 9999
    },
    avatarNameText:{
        color: colors.white,
        fontSize: 8,
        fontFamily: 'biennale'
    }
})

export default styles