import { View, Text, TouchableOpacity, Modal } from 'react-native'
import Button from '../Button'
import { IProps } from './types'
import { IStore } from '../../models/Store'
import { defaultProps } from '../../store/defaultProps'
import { Dispatch } from 'redux'
import { IActionProps } from '../../models/ActionProps'
import { defaultActions } from '../../store/defaultActions'
import { connect } from 'react-redux'
import styles from './styles'
import defaultStyles from '../../communStyles'

const ModalMessage = (props: IProps) => {
    const { message, setMessage } = props

    const close = () => {
        setMessage!!({
            isOpen: false
        })
    }

    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={message.isOpen ? true : false}
        >
            <View style={defaultStyles.modalBackground}>
                <View style={defaultStyles.modalView}>
                    <View style={styles.textContainer}>
                        {props?.message?.title && <Text style={styles.title}>{message.title}</Text>}
                        <View style={styles.messagesContainer}>
                            {props?.message?.messages &&
                                props?.message?.messages.map((message: string, index) => (
                                    <Text style={styles.message} key={index}>{message}</Text>
                                ))
                            }
                        </View>

                        <View style={styles.buttonsContainer}>
                            {message.isCancelable &&
                                <TouchableOpacity onPress={() => close()}>
                                    <Text style={styles.textCancel}>Cancelar</Text>
                                </TouchableOpacity>
                            }
                            {message.action &&
                                <Button
                                    placeholder='Confirmar'
                                    onPress={message.action}
                                />
                            }
                            {!message.action && !message.isCancelable &&
                                <Button
                                    placeholder='OK'
                                    onPress={() => close()}
                                />
                            }
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const mapStateToProps = (state: any): IStore => defaultProps(state)
const mapDispatchToProps = (dispatch: Dispatch): IActionProps => defaultActions(dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ModalMessage)