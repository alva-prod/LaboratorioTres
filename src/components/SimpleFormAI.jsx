import { useEffect, useRef, useState } from 'react';

const cardStyle = {
    maxWidth: '420px',
    margin: '40px auto',
    padding: '32px 28px',
    borderRadius: '18px',
    boxShadow: '0 4px 24px rgba(0,0,0,0.13)',
    background: '#fff',
    border: '1px solid #e3e3e3',
};
const labelStyle = {
    fontWeight: 600,
    marginBottom: 4,
    color: '#2d3748',
    display: 'block',
};
const inputStyle = {
    width: '100%',
    padding: '10px 12px',
    borderRadius: '7px',
    border: '1px solid #cbd5e1',
    marginBottom: 16,
    fontSize: 16,
    outline: 'none',
    transition: 'border 0.2s',
};
const buttonStyle = {
    width: '100%',
    padding: '12px',
    borderRadius: '7px',
    border: 'none',
    background: 'linear-gradient(90deg, #4f8cff 0%, #2355d6 100%)',
    color: '#fff',
    fontWeight: 700,
    fontSize: 18,
    cursor: 'pointer',
    marginTop: 8,
    boxShadow: '0 2px 8px rgba(79,140,255,0.08)',
    letterSpacing: 1,
};
const datosStyle = {
    background: '#f7fafc',
    borderRadius: '10px',
    padding: '18px',
    marginTop: 28,
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
};

export const SimpleFormAI = () => {
    const [formState, setFormState] = useState({
        matricula: '',
        nombre: '',
        apellidos: '',
        edad: '',
        universidad: '',
        carrera: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const matriculaRef = useRef(null);

    const { matricula, nombre, apellidos, edad, universidad, carrera } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    useEffect(() => {
        if (matriculaRef.current) {
            matriculaRef.current.focus();
        }
    }, []);

    useEffect(() => {
        // Se ejecuta cuando cambia el estado del formulario
    }, [formState]);

    return (
        <div style={cardStyle}>
            <h1 style={{textAlign:'center', marginBottom: 18, color:'#2355d6'}}>Formulario tipo Login</h1>
            <form onSubmit={onSubmit} autoComplete="off">
                <label style={labelStyle} htmlFor="matricula">Matricula</label>
                <input
                    type="text"
                    style={inputStyle}
                    placeholder="Matricula"
                    name="matricula"
                    id="matricula"
                    value={matricula}
                    onChange={onInputChange}
                    ref={matriculaRef}
                />
                <label style={labelStyle} htmlFor="nombre">Nombre</label>
                <input
                    type="text"
                    style={inputStyle}
                    placeholder="Nombre"
                    name="nombre"
                    id="nombre"
                    value={nombre}
                    onChange={onInputChange}
                />
                <label style={labelStyle} htmlFor="apellidos">Apellidos</label>
                <input
                    type="text"
                    style={inputStyle}
                    placeholder="Apellidos"
                    name="apellidos"
                    id="apellidos"
                    value={apellidos}
                    onChange={onInputChange}
                />
                <label style={labelStyle} htmlFor="edad">Edad</label>
                <input
                    type="number"
                    style={inputStyle}
                    placeholder="Edad"
                    name="edad"
                    id="edad"
                    value={edad}
                    onChange={onInputChange}
                />
                <label style={labelStyle} htmlFor="universidad">Universidad</label>
                <input
                    type="text"
                    style={inputStyle}
                    placeholder="Universidad"
                    name="universidad"
                    id="universidad"
                    value={universidad}
                    onChange={onInputChange}
                />
                <label style={labelStyle} htmlFor="carrera">Carrera</label>
                <input
                    type="text"
                    style={inputStyle}
                    placeholder="Carrera"
                    name="carrera"
                    id="carrera"
                    value={carrera}
                    onChange={onInputChange}
                />
                <button type="submit" style={buttonStyle}>Enviar</button>
            </form>
            {submitted && (
                <div style={datosStyle}>
                    <h4 style={{color:'#2355d6', marginBottom: 12}}>Datos ingresados:</h4>
                    <p><strong>Matricula:</strong> {matricula}</p>
                    <p><strong>Nombre:</strong> {nombre}</p>
                    <p><strong>Apellidos:</strong> {apellidos}</p>
                    <p><strong>Edad:</strong> {edad}</p>
                    <p><strong>Universidad:</strong> {universidad}</p>
                    <p><strong>Carrera:</strong> {carrera}</p>
                </div>
            )}
        </div>
    );
}