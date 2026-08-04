import { useParams, Link } from 'react-router-dom'; 

export default function UsuarioDetalle() { 
 // useParams extrae las variables que definimos en App.jsx con los dos puntos (:id) 
 const parametros = useParams(); 
 const usuarioId = parametros.id; 

 return ( 
 <div> 
 <h2>Perfil del Usuario</h2> 
 <p>Estás viendo la información detallada del usuario con ID: <strong>{usuarioId}</strong></p> 

 {/* Botón para regresar */} 
 <Link to="/usuarios" style={{ padding: '10px', background: '#e2e8f0', borderRadius: '5px', textDecoration: 'none' }}> 
 🔙 Volver a la lista 
 </Link> 
 </div> 
 ); 
}