import { useState } from 'react'; 

export default function BuscadorEnVivo() { 
 // 1. Estado inicial vacío 
 const[textoBusqueda, setTextoBusqueda] = useState(''); 

 // 2. Función que recibe el evento 'e' cada vez que el usuario teclea 
 const manejarCambio = (e) => { 
 setTextoBusqueda(e.target.value); // Guardamos la tecla exacta en el estado 
 }; 

 const limpiar = () => { 
 setTextoBusqueda(''); 
 }; 

 return ( 
 <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', marginBottom: '20px' }}> 

 <input 
 type="text" 
 placeholder="Escribe algo aquí..." 
 value={textoBusqueda} /* Forzamos a que el input muestre lo que dice el estado */ 
 onChange={manejarCambio} /* Disparamos la función con cada tecla */ 
 style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #cbd5e1', marginBottom: '10px' }} 
 /> 

 {/* 3. Reflejamos el estado en vivo */} 
 <p style={{ color: '#64748b' }}> 
 Vista previa en vivo: <strong style={{ color: '#0f172a' }}>{textoBusqueda}</strong> 
 </p> 

 {/* Solo mostramos el botón de limpiar si hay texto escrito */} 
 {textoBusqueda.length > 0 && ( 
 <button onClick={limpiar} style={{ background: '#f87171', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}> 
 Borrar todo 
 </button> 
 )} 

 </div> 
 ); 
}