import { Image, Text, TouchableOpacity, View } from "react-native"
import styles from "./styles"
import { IHeaderFooter } from "../types"

const Header = (props: IHeaderFooter) => {
    return (
        <View style={styles.container}>
            {
                props.currentTab != 'EditProfile' ?
                    <View style={styles.containerDefault}>
                        <Image source={require('../../../assets/images/logo.png')} style={styles.logo} />
                    </View>
                    :
                    <View style={styles.containerEditProfile}>
                        <View></View>
                        <Text style={styles.titleEditProfile}>Editar Perfil</Text>
                        <TouchableOpacity onPress={() => props.submit && props.submit()}>
                            <Text style={styles.submitEditProfile}>Concluir</Text>
                        </TouchableOpacity>
                    </View>
            }
        </View>
    )
}

export default Header