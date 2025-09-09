import React, { useState } from 'react'
import Navbar from '../element/Navbar'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <header className="top-0 left-0 w-full z-30 flex fixed justify-between items-center p-6 text-white">
            <h2 className="text-2xl font-bold">Apliancor</h2>
            <div>
                <button
                    className=" me-2 text-white hover:text-yellow-300 focus:outline-none "
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Abrir menú"
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {menuOpen && (
                <Navbar
                    onClose={() => setMenuOpen(false)}
                />
            )}
        </header>
    )
}


export default Header
