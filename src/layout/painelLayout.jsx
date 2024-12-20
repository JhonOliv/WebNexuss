import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBarPainel from "../components/NavBarPainel";

export default function PainelWebNexuss() {
    const [showWelcome, setShowWelcome] = useState(true); // Estado para controlar a visibilidade do <h1>

    const handleNavBarClick = () => {
        setShowWelcome(false); // Oculta o <h1> ao clicar em um elemento do NavBarPainel
    };

    const handleNavBar = () => {
        setShowWelcome(true); // Oculta o <h1> ao clicar em um elemento do NavBarPainel
    };

    return (
        <div>
            {/* Passa a função handleNavBarClick para o NavBarPainel como prop */}
            <NavBarPainel onNavClick={handleNavBarClick} painelNavClick={handleNavBar} />
            
            {/* Renderiza as rotas filhas */}
            <main>
                <Outlet />
            </main>

            {/* Renderiza o <h1> apenas se showWelcome for true */}
            {showWelcome && (
                 <div
                 style={{
                     display: "flex",
                     justifyContent: "center",
                     alignItems: "center",
                     height: "100vh", // Altura da tela inteira
                 }}
             >
                 <h1 className="text-center" 
                    style={{
                        fontSize: "5rem", // Aumente o tamanho da fonte conforme necessário
                    }} 
                >
                     Welcome to Painel<br/> WebNexuss
                 </h1>
             </div>
            )}
        </div>
    );
}
