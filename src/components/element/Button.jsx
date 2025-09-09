import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const ButtonLink = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className="border-2 bg-yellow-400 text-white font-bold hover:bg-red-500 hover:text-white">
            {children}
        </NavLink>
    )
}

export default ButtonLink