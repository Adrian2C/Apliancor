import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-black text-white py-6 text-center">
            © 1980- {new Date().getFullYear()} Apliancor - Todos los derechos
            reservados.
        </footer>
    )
}

export default Footer
