import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import Container from "../../components/Container"
import Avatar from "../../components/Avatar"
import styles from "./styles"
import { useState } from "react"
import { store } from "../../store"
import ModalSelectAvatar from "../../components/ModalSelectAvatar"
import { lougout } from "../../services/AuthService"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamsList } from "../../routes/rootStackParams"
import { useNavigation } from "@react-navigation/native"
import { IUpdateUser } from "../../models/User"
import handleMessage from "../../utils/message"
import * as UserService from '../../services/UserService'

const EditProfile = () => {
    type navigationTypes = NativeStackNavigationProp<RootStackParamsList, 'EditProfile'>
    const navigation = useNavigation<navigationTypes>()


    const [avatar, setAvatar] = useState<string>(store.getState().user.avatar)
    const [name, setName] = useState<string>(store.getState().user.name)
    const [modalVisible, setModalVisible] = useState<boolean>(false)

    const submit = async () => {
        try{
            if(!name){
                handleMessage({
                    isOpen: true,
                    title: 'Aviso',
                    messages: [ 'O nome é obrigatorio!' ]
                })
                return
            }
            const body: IUpdateUser = {
                name,
                avatar
            }

            await UserService.update(body)

            handleMessage({
                isOpen: true,
                title: 'Sucesso',
                messages: [ 'Dados atualizados com sucesso!' ]
            })

        }catch(error: any){
            console.log('error:', error)
            handleMessage({
                isOpen: true,
                title: 'Erro',
                messages: ['Erro ao efetuar o cadastro, tente novamente', typeof error.response.data.message == "string"? error.response.data.message : error.response.data.message[0]]
            })
        }
    }

    const onLogout = () => {
        lougout()
        navigation.navigate("Login")
    }
    return (
        <Container currentTab="EditProfile" submit={submit}>
            <View style={styles.container}>
                <View style={styles.containerInfo}>

                    <View style={styles.containerImage}>
                        <ModalSelectAvatar
                            modalVisible={modalVisible}
                            onChange={(avatar) => setAvatar(avatar)}
                            currentAvatar={avatar}
                            setModalVisible={setModalVisible}
                        />
                        <Avatar style={styles.avatar} avatar={avatar} />
                        <TouchableOpacity onPress={() => setModalVisible(true)}>
                            <Text style={styles.textUpdateAvatar}>Alterar avatar</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.containerEditName}>
                        <Text style={styles.inputPlaceholder}>Nome</Text>
                        <TextInput 
                            placeholder="Digite um nome"
                            value={name}
                            onChangeText={setName}
                            autoCapitalize="none"
                            style={styles.input}
                        />
                        <TouchableOpacity onPress={() => setName('')}>
                            <Image source={require('../../assets/images/clear.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                
                <TouchableOpacity onPress={() => onLogout()}>
                    <Image source={require('../../assets/images/logout.png')} />
                </TouchableOpacity>

            </View>
        </Container>
    )
}

export default EditProfile