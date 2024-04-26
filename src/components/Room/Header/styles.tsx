import {Dimensions, StyleSheet} from 'react-native'
import {colors} from '../../../../app.json'
const {height, width} = Dimensions.get('screen')

const styles = StyleSheet.create({
    container: {
       borderBottomColor: colors.gray01,
       borderBottomWidth: 1,
       paddingHorizontal: width * 0.05,
       paddingVertical: height * 0.02,
       height: height * 0.1,
       justifyContent: 'center',
    },
    row:{
        flexDirection: 'row'
    },
    title: {
       fontFamily: 'biennale-bold',
       fontSize: 12,
       fontWeight: '800',
       marginRight: width * 0.01,
       color: colors.gray03
    },
    link: {
        fontFamily: 'biennale',
        fontSize: 12,
        fontWeight: '600'
     },
    subtitle: {
        fontFamily: 'biennale-bold',
        fontSize: 16,
        fontWeight: '700',
        color: colors.primary01
    },
    copy: {
        width: width * 0.045,
        height: height * 0.025,
        marginHorizontal: width * 0.02
    }
})

export default styles