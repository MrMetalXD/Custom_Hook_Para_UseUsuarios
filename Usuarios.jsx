import React from 'react';
import { useUsuarios } from './hooks/useUsuarios.jsx'; 

export const Usuarios = () => {
    const { usuarios, FnPaginaSiguiente, FnPaginaAnterior } = useUsuarios();  

    return (
        <>
            <h3>Usuarios</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario) => (
                        <tr key={usuario.id}>
                            <td>
                                <img src={usuario.avatar} alt={usuario.first_name} />
                            </td>
                            <td>{usuario.first_name} {usuario.last_name}</td>
                            <td>{usuario.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Botón para ir a la página anterior */}
            <button className="btn btn-primary" onClick={FnPaginaAnterior}>
                Anterior       
            </button>
                
            {/* Botón para ir a la página siguiente */}
            <button className="btn btn-primary" onClick={FnPaginaSiguiente}>
                Siguiente       
            </button>
        </>
    );
};