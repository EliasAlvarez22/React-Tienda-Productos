import { useState } from 'react'
import './App.css'
import Menu from './Components/Menu/Menu'
import Producto from './Components/Producto/Producto'
import Carrito from './Components/Carrito/Carrito'


const productos = [
  {
    titulo: "abrigos-01",
    id: 0,
    categoria: "abrigos",
    precio: 100,
    imagen: ""
  },
  {
    titulo: "remeras-02",
    id: 1,
    categoria: "remeras",
    precio: 20,
    imagen: ""
  },
  {
    titulo: "pantalones-03",
    id: 2,
    categoria: "pantalones",
    precio: 50,
    imagen: ""
  },
  {
    titulo: "gorras-04",
    id: 3,
    categoria: "gorras",
    precio: 10,
    imagen: ""
  },
  {
    titulo: "remeras-05",
    id: 4,
    categoria: "remeras",
    precio: 25,
    imagen: ""
  },
  {
    titulo: "pantalones-06",
    id: 5,
    categoria: "pantalones",
    precio: 60,
    imagen: ""
  },
  {
    titulo: "gorras-07",
    id: 6,
    categoria: "gorras",
    precio: 15,
    imagen: ""
  },
  {
    titulo: "remeras-08",
    id: 7,
    categoria: "remeras",
    precio: 22,
    imagen: ""
  },/*
  {
    titulo: "pantalones-09",
    id: 8,
    categoria: "pantalones",
    precio: 55,
    imagen: ""
  },
  {
    titulo: "gorras-10",
    id: 9,
    categoria: "gorras",
    precio: 12,
    imagen: ""
  }*/
];

console.log(productos);


function App() {
  const [compras,setCompras] = useState(0)

  const [vista, setVista] = useState('todos'); // Estado para rastrear la vista actual

  const CambiarVista = (vista) =>{
    setVista(vista);
  }

  const mostrarProductos = () => {
  // Lógica para mostrar productos basada en la vista actual
    if (vista === 'todos') {
      return productos.map(( producto,index)  => (
        <Producto 
          producto={producto} 
          setCompras={setCompras} 
          compras={compras} 
          key={index}
        />
      ));
    } else if (vista === 'carrito') {
      return <Carrito 
        CambiarVista={CambiarVista} 
        compras={compras} 
      />;
    }
  };

  return (
    <div className='grid-container'> 
      <aside className='navegacion'>
        <Menu 
          compras={compras} 
          CambiarVista={CambiarVista} 
        />
      </aside>
      <main className="productos">
        {mostrarProductos()}
      </main>
    </div>
  )
}
export default App;

