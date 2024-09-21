import { useState, useRef, useEffect } from 'react';
import axios from 'axios';  

export const useUsuarios = () => {
    const [usuarios, setUsuarios] = useState([]); 
    const RefPage = useRef(1);  

    // Función para cargar usuarios desde la API
    const FnCargaUsuarios = async () => {
        try {
            const response = await axios.get('https://reqres.in/api/users', {
                params: { page: RefPage.current }  
            });
            if (response.data.data.length > 0) {
                setUsuarios(response.data.data);  
            } else {
                alert('No hay más registros');
            }
        } catch (error) {
            console.error(error);
        }
    };

 
    const FnPaginaSiguiente = () => {
        RefPage.current += 1;  
        FnCargaUsuarios();  
    };

    const FnPaginaAnterior = () => {
        if (RefPage.current > 1) {
            RefPage.current -= 1;  
            FnCargaUsuarios();  
        }
    };

    useEffect(() => {
        FnCargaUsuarios();  
    }, []);

    return {
        usuarios,
        FnPaginaSiguiente,
        FnPaginaAnterior
    };
};

