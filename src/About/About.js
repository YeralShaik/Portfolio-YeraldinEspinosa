import React from "react";
import { FaDownload } from "react-icons/fa6";
import './About.css'

const AboutMe = () => {
    return (
    <div className="aboutMe-container">
        
    <h4 className="aboutMe-Title" >SOBRE MI </h4>
        <p className="aboutMe-Text" id="text">🚀 Enfocada en diseño web y la creación de experiencias en línea. Mi objetivo es combinar la creatividad con la construcción de aplicaciones web funcionales. Tomé la decisión de orientar mi carrera hacia el desarrollo Frontend - UI para combinar mis pasiones y crear experiencias de usuario excepcionales. Siempre estoy en busca de nuevos desafíos que me permitan crecer y evolucionar a nivel laboral. Valoro mi habilidad para adaptarme al cambio y aprender rápidamente en este mundo en constante evolución. </p>

        <a className="aboutMe-CV" href="./asset/Yeraldin Espinosa -CV.pdf" download="Yeraldin_Espinosa-CV.pdf">
    <span className="download-icon">
    Resume CV 
    <span className="icon">
        <FaDownload />
    </span>
    </span>
    </a>
    </div>
 
 )
}

    export { AboutMe}