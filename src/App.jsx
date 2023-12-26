import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Footer from "./components/Footer/Footer"

const App = () => {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting="Hola Cliente, bienvenido a la mejor plataforma online en venta de Ebook"/>
    <Footer/>
    </>
    
  )
}

export default App