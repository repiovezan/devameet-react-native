import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import Routes from './src/routes'
import { persistor, store } from './src/store'
import { PersistGate } from 'redux-persist/integration/react'
import ModalMessage from './src/components/ModalMessage'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <>
        <ModalMessage />
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
        </>
      </PersistGate>

    </Provider>

  )
}

export default App