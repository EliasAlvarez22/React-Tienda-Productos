import './Producto.css'
import { useState } from 'react'

export default function Producto (props) {

    const {titulo, precio, imagen, categoria, id} = props.producto;
    const {setCompras, compras} = props;

    const [carrito,setCarrito] = useState(0)

    const ComprarCarrito = () => {
        setCarrito(carrito + 1);
        setCompras( compras + 1);
        
        const productoComprado =
        {
            imagen,
            titulo,
            categoria,
            precio,
            id,
            carrito
        };
        console.log(productoComprado);

        
      }

    return <section className='lista_productos'>
        <article className="card"> 
            <img src='https://d22fxaf9t8d39k.cloudfront.net/df903b4597875875930c0a5231efb18392f711bbe37b760d471c231d9aa9ed43123205.jpg' className="card-img-top" alt={titulo}/>
            <section className="card-body">            
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">{precio} </p>
                <button onClick={ComprarCarrito} className="button-comprar">Comprar {carrito}</button>
            </section>                    
        </article>        
    </section>


}