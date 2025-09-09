import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = ({ onClose }) => {
    return (
        <div className=" bg-[#1e1e1e] px-4 pb-4">
            <div className="mt-2">
                <ul className="flex flex-col gap-2 font-bold">
                    <li>
                        <NavLink to="/" className="block py-1 text-yellow-300" onClick={onClose}>
                            Inicio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/productos" className="block py-1 text-yellow-300" onClick={onClose}>
                            Productos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/acercade" className="block py-1 text-yellow-300" onClick={onClose}>
                            Nosotros
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacto" className="block py-1 text-yellow-300" onClick={onClose}>
                            Contacto
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
