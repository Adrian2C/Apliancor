import React, { useEffect, useRef, useState } from "react";
import hero from "../assets/images/hero.jpg";
import intro from "../assets/images/intro.mp4";
import { gsap } from "gsap";

const Intro = () => {
    const [showIntro, setShowIntro] = useState(true);
    const loaderRef = useRef(null);
    const videoRef = useRef(null);
    const titleRef = useRef(null);

    // Animación de loader
    useEffect(() => {
        gsap.to(loaderRef.current, {
            opacity: 0,
            duration: 1,
            delay: 1,
            onComplete: () => setShowIntro(true),
        });
    }, []);

    // Animaciones del video y título
    useEffect(() => {
        if (showIntro) {
            const handleScroll = (e) => {
                if (e.deltaY > 0) {
                    // Scroll hacia abajo
                    gsap.to(".intro-section", {
                        opacity: 0,
                        duration: 1,
                        onComplete: () => setShowIntro(false),
                    });
                    window.removeEventListener("wheel", handleScroll); // quitamos el listener
                }
            };

            window.addEventListener("wheel", handleScroll);

            return () => {
                window.removeEventListener("wheel", handleScroll);
            };
        }
    }, [showIntro]);

    return (
        <div className="w-dvw h-screen overflow-x-hidden">
            {/* Loader */}
            {showIntro && (
                <div
                    ref={loaderRef}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white intro-loader"
                >
                    <h2 className="text-3xl font-bold animate-pulse">Cargando...</h2>
                </div>
            )}

            {/* Intro con video */}
            {showIntro && (
                <section className="intro-section  fixed inset-0 z-40 w-full h-screen overflow-hidden bg-black">
                    <video
                        ref={videoRef}
                        src={intro}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        muted
                        autoPlay
                        playsInline
                    />
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        <h1
                            ref={titleRef}
                            className="text-white text-6xl font-bold drop-shadow-lg"
                        >
                            Apliancor
                        </h1>
                    </div>

                    {/* Flecha scroll */}
                    <div className="absolute bottom-6 w-full flex justify-center z-20">
                        <span className="text-white text-3xl animate-bounce">▼</span>
                    </div>
                </section>
            )}

            {/* Sitio principal */}
            {!showIntro && (
                <main className="relative">
                    {/* Navbar */}
                    <header className="top-0 left-0 w-full z-30 flex fixed justify-between items-center p-6 text-white">
                        <h2 className="text-2xl font-bold">Apliancor</h2>
                        <nav className="space-x-6">
                            <a href="#hero" className="hover:underline">
                                Inicio
                            </a>
                            <a href="#beneficios" className="hover:underline">
                                Beneficios
                            </a>
                            <a href="#contacto" className="hover:underline">
                                Contacto
                            </a>
                        </nav>
                    </header>

                    {/* Hero */}
                    <section
                        id="hero"
                        className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
                        style={{ backgroundImage: `url(${hero})` }}
                    >
                        <div className="absolute inset-0 bg-black/40"></div>
                        <h2 className="relative z-10 text-white text-5xl font-bold drop-shadow-lg">
                            Impermeabilización con Poliurea
                        </h2>
                    </section>

                    {/* Beneficios */}
                    <section
                        id="beneficios"
                        className="h-screen flex items-center justify-center bg-gray-100"
                    >
                        <p className="text-xl">
                            Aquí van beneficios, antes/después, etc.
                        </p>
                    </section>

                    {/* Contacto */}
                    <section
                        id="contacto"
                        className="h-screen flex items-center justify-center bg-gray-200"
                    >
                        <p className="text-xl">Formulario de contacto aquí</p>
                    </section>

                    {/* Footer */}
                    <footer className="bg-black text-white py-6 text-center">
                        © 1980- {new Date().getFullYear()} Apliancor - Todos los derechos
                        reservados.
                    </footer>
                </main>
            )}
        </div>
    );
};

export default Intro;
