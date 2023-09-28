import Carrito from "../Carrito/Carrito"
import "./Menu.css"

export default function Menu (props) 
{
    const {compras, CambiarVista} =  props

    return <>
        <h1 className="marca">Productos de ropa</h1>
        <nav className="navegacion">        
            <a  className="link" onClick={() => CambiarVista('todos')}>Todos los productos</a>           
            <ul >
                <li>
                    <a className="link">Remeras</a>
                </li>
                <li>
                    <a className="link">Pantalones</a>
                </li>
                <li>
                    <a className="link">Gorras</a>
                </li>
                <li>                
                    <a className="link" onClick={ () => CambiarVista('carrito')}>
                        <i class="bi bi-cart4" id="icon_carrito"></i>Carrito {compras}
                    </a>
                </li>
            </ul>
        </nav>

        <footer>
            <ul>
                <li>
                    <a href=""><i class="bi bi-github"></i></a>
                </li>
            </ul>
        </footer>
    </>

}