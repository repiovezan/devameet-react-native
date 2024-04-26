import { useEffect, useState } from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import handleMessage from "../../utils/message"
import Input from "../../components/Input"
import Button from "../../components/Button"
import styles from "./styles"
import * as AuthService from '../../services/AuthService'
import { RootStackParamsList } from "../../routes/rootStackParams"
import { useNavigation } from "@react-navigation/native"
import { store } from "../../store"
const Login = () => {

    type navigationTypes = NativeStackNavigationProp<RootStackParamsList, 'Login'>
    const navigation = useNavigation<navigationTypes>()

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        verifyLogged()
    },[])
    
    const verifyLogged = () => {
        if(store.getState().auth.token){
            navigation.navigate('Home')
        }
    }

    const doLogin = async () => {
        try{
            setLoading(true)
            await AuthService.login({
                login: email,
                password: password
            })
            navigation.navigate('Home')
        }catch(error: any){
            console.log(error)
            handleMessage({
                isOpen: true,
                title: 'Erro',
                messages: ['Erro ao efetuar o cadastro, tente novamente', typeof error.response.data.message == "string"? error.response.data.message : error.response.data.message[0]]
            })
        }finally{
            setLoading(false)
        }
    }

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
            <Input
                icon={require('../../assets/images/envelope.png')}
                placeholder="Email"
                value={email}
                onChange={(value) => setEmail(value)} />

            <Input
                icon={require('../../assets/images/key.png')}
                placeholder="Senha"
                secureTextEntry={true}
                value={password}
                onChange={(value) => setPassword(value)}
                style={styles.inputPassword}
            />

            <Button
                disabled={!email || !password}
                loading={loading}
                style={styles.button}
                placeholder="Login"
                onPress={() => doLogin()} />

            <View style={styles.containerWithOutAccount}>
                <Text>Não possui uma conta?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.textSignUp}>Faça seu cadastro agora!</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login