import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { ChakraProvider } from '@chakra-ui/react'



const App = () => {

  return (
    <>
    <ChakraProvider>
      
        <NavBar/>
        <ItemListContainer saludo={'Bienvenido a Blanco Hogar'}/>

    </ChakraProvider>
    </>
    
  )
}

export default App