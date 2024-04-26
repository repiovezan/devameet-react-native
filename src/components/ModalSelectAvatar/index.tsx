import { Image, Modal, Text, TouchableOpacity, View } from "react-native"
import { avatars } from "../../utils/assets"
import defaultStyles from "../../communStyles"
import styles from "./styles"
import { useState } from "react"
import Button from "../Button"

const ModalSelectAvatar = (props: IModalSelectAvatar) => {
    const [avatarSelected, setAvatarSelected] = useState<string | undefined>(props.currentAvatar)

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.modalVisible}
        >
            <View style={defaultStyles.modalBackground}>
                <View style={[defaultStyles.modalView, styles.modalView]}>
                    <Text style={styles.title}>Avatar</Text>
                    <Text style={styles.subtitle}>Selecione o seu avatar</Text>
                    <View style={styles.avatarContainer}>
                        {Object.keys(avatars).filter(avatar => avatar.includes('_front')).map((key) => (
                            <TouchableOpacity 
                                key={key}
                                onPress={() => setAvatarSelected(key.replace("_front", ""))}
                                style={[styles.avatarFrame, key.replace("_front", "") == avatarSelected ? styles.select : null] }
                            >
                                <Image style={styles.avatar} source={avatars[key]} />
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                          onPress={() => props.setModalVisible(false)}
                        >
                            <Text style={styles.back}>Voltar</Text>
                        </TouchableOpacity>
                        <Button 
                           onPress={() => {
                            props.onChange(avatarSelected!!)
                            props.setModalVisible(false)
                           }}
                           placeholder="Salvar"
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default ModalSelectAvatar