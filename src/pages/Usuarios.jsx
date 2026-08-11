import { Link } from 'react-router-dom';
import UsuarioCard from '../components/UsuarioCard';

export default function Usuarios(){

    const baseUsuarios = [
        {id: 1, nombre: 'Juan Perez', rol: 'Administrador', estado: 'Activo', imagen: 'https://randomuser.me/api/portraits/men/32.jpg'},
        {id: 2, nombre: 'Pepito Perez', rol: 'Desarrollador', estado: 'Inactivo', imagen: 'https://randomuser.me/api/portraits/men/34.jpg'},
        {id: 3, nombre: 'Ana Gomez', rol: 'Diseñadora UX', estado: 'Inactivo', imagen: 'https://randomuser.me/api/portraits/women/32.jpg'},
        {id: 4, nombre: 'Maria Garcia', rol: 'Marketing', estado: 'Activo', imagen: 'https://randomuser.me/api/portraits/women/44.jpg'}
    ]

    return (
        <div>
            <h1>Panel de gestion de Usuarios</h1>
            <p>Total de usuarios: {baseUsuarios.length}</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>

                {baseUsuarios.map((usuario)=>(
                    <UsuarioCard 
                        key={usuario.id}
                        nombre={usuario.nombre}
                        rol={usuario.rol}
                        estado={usuario.estado}
                        imagen={usuario.imagen}
                    />
                ))}

                {/* <UsuarioCard 
                    nombre='Juan Perez'
                    rol='Administrador'
                    estado='Activo'
                    imagen='https://randomuser.me/api/portraits/men/32.jpg'
                />

                <UsuarioCard 
                    nombre='Ana Gomez'
                    rol='Diseñadora UX'
                    estado='Inactivo'
                    imagen='https://randomuser.me/api/portraits/women/44.jpg' */}
                
            </div>
        </div>
    );
}