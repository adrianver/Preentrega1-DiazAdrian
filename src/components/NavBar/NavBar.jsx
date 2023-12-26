import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";

const NavBar = () => {
  return (
    <header>
        < img src="./img/logo.jpg" alt="ebookTandil logo" className="logo"/>
        <nav>
            
            <ul> 
                
                <li>Literatura</li>              
                <li>Humanidades</li>
                <li>Ciencia</li>
                <li>Juvenil</li>
                <li>Infantil</li>
                <li>Arte</li>
                <li>Estilo de Vida</li>

                
            </ul>
        </nav>
<CartWidget/>

    </header>
  )
}

export default NavBar