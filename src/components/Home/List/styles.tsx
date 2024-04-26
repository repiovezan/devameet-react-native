import {Dimensions, StyleSheet} from 'react-native'
import {colors} from '../../../../app.json'
const {height, width} = Dimensions.get('screen')

const styles = StyleSheet.create({
    containerEmpty: {
      alignItems: 'center',
      paddingVertical: height * 0.2
    }
})

export default styles