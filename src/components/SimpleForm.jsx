import { useEffect, useRef, useState } from 'react';

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        matricula: '',
        nombre: '',
        apellidos: '',
        edad: '',
        universidad: '',
        carrera: ''
    });

    const inputRef = useRef(null);

    const { matricula, nombre, apellidos, edad, universidad, carrera } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({ ...formState, [name]: value });
    };

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    useEffect(() => { }, [formState]);

    useEffect(() => { }, [matricula]);

    const handleSubmit = () => {
        alert('Formulario enviado!');
    };

    return (
        <div className="container mt-4">
            <h1>Formulario</h1>
            <hr />

            <input ref={inputRef} type="text" name="matricula" placeholder="Matricula" value={matricula} onChange={onInputChange} className="form-control mb-2" />
            <input type="text" name="nombre" placeholder="Nombre" value={nombre} onChange={onInputChange} className="form-control mb-2" />
            <input type="text" name="apellidos" placeholder="Apellidos" value={apellidos} onChange={onInputChange} className="form-control mb-2" />
            <input type="text" name="edad" placeholder="Edad" value={edad} onChange={onInputChange} className="form-control mb-2" />
            <input type="text" name="universidad" placeholder="Universidad" value={universidad} onChange={onInputChange} className="form-control mb-2" />
            <input type="text" name="carrera" placeholder="Carrera" value={carrera} onChange={onInputChange} className="form-control mb-2" />

            <button onClick={handleSubmit} className="btn btn-primary">Enviar</button>

            <hr />
            <p>Matricula: {matricula}</p>
            <p>Nombre: {nombre}</p>
            <p>Apellidos: {apellidos}</p>
            <p>Edad: {edad}</p>
            <p>Universidad: {universidad}</p>
            <p>Carrera: {carrera}</p>
        </div>
    );
};