import { Text, TouchableOpacity, View } from "react-native"
import Input from "../../components/Input"
import { useEffect, useState } from "react"
import Button from "../../components/Button"
import styles from "./styles"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamsList } from "../../routes/rootStackParams"
import { useNavigation } from "@react-navigation/native"
import Avatar from "../../components/Avatar"
import { formIsComplete, validateConfirmPassword, validateEmail, validatePassword, validateName } from "../../utils/validations"
import { IRegister } from "../../models/Auth"
import * as AuthService from '../../services/AuthService'
import handleMessage from "../../utils/message"

const Register = () => {

    type navigationTypes = NativeStackNavigationProp<RootStackParamsList, 'Register'>
    const navigation = useNavigation<navigationTypes>()

    const [avatar, setAvatar] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')
    const [formIsValid, setFormIsValid] = useState<boolean>()

    useEffect(() => {
        validateForm()
    }, [name, email, password, confirmPassword])

    const onRegister = async () => {
        try{
            setLoading(true)
            const body: IRegister = {
                avatar,
                name,
                email,
                password
            }

            await AuthService.register(body)
            handleMessage({
                isOpen: true,
                title: "True",
                messages: ['Cadastrado com sucesso!'],
                action: async () => {
                    await AuthService.login({login: email, password})
                    handleMessage({isOpen: false})
                    navigation.navigate('Home')
                }
            })
        }catch(err: any){
            console.log('Erro', err.response.data)
            handleMessage({
                isOpen: true,
                title: "Erro",
                messages: ['Erro ao efetuar o cadastro, tente novamente', typeof err.response.data.message == "string"? err.response.data.message : err.response.data.message[0]]
            })
        }finally{
            setLoading(false)
        }
    }

    const validateForm = () => {
        const nameIsValid = validateName(name)
        const emailIsValid = validateEmail(email)
        const passwordIsValid = validatePassword(password)
        const confirmPasswordIsValid = validateConfirmPassword(password, confirmPassword)
        const isComplete = formIsComplete(name, email, password, confirmPassword)
        let error = ''

        if(!nameIsValid){
            error = 'Nome invalido'
        }else if(!emailIsValid){
            error = 'Email invalido' 
        }else if(!passwordIsValid){
            error = 'Senha invalida'
        }else if(!confirmPasswordIsValid){
            error = 'Confirmação de senha não confere'
        }
        setError(error)
        setFormIsValid(error == '' && isComplete) 
    }

    return (
        <View style={styles.container}>

            <Avatar
                avatar={avatar}
                onChange={(value) => setAvatar(value)}
            />

            {error != '' && <Text style={styles.error}>{error}</Text>}

            <Input
                placeholder="Nome completo"
                value={name}
                onChange={(value) => setName(value)}
                icon={require('../../assets/images/user.png')}
            />

            <Input
                placeholder="Email"
                value={email}
                onChange={(value) => setEmail(value)}
                icon={require('../../assets/images/envelope.png')}
                style={styles.inputMargin}
            />

            <Input
                placeholder="Senha"
                value={password}
                onChange={(value) => setPassword(value)}
                secureTextEntry={true}
                icon={require('../../assets/images/key.png')}
                style={styles.inputMargin}
            />

            <Input
                placeholder="Confirmar senha"
                value={confirmPassword}
                onChange={(value) => setConfirmPassword(value)}
                secureTextEntry={true}
                icon={require('../../assets/images/key.png')}
                style={styles.inputMargin}
            />

            <Button
                style={styles.button}
                placeholder="Cadastrar"
                onPress={() => onRegister()}
                loading={loading}
                disabled={!formIsValid}
            />

            <View style={styles.containerWithAccount}>
                <Text>Já possui uma conta?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.textSignIn}>Faça seu login agora!</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Register