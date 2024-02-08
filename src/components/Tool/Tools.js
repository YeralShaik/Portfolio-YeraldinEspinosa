// Tools.js
import React from "react";
import Photoshop from '../../asset/photoshop.png';
import Illustrator from '../../asset/illustrator.png';
import github from '../../asset/github.png';
import Git from '../../asset/git.png';
import Figma from '../../asset/figma.png';
import Html from '../../asset/html-5.png';
import CSS from '../../asset/css-3.png';
import Sass from '../../asset/sass.png';
import JS from '../../asset/js.png';
import IconReact from '../../asset/physics.png';
import Nodejs from '../../asset/nodejs.png';
import tailwind from '../../asset/tailwind.png';
import Adobe from '../../asset/pngwing.com.png';

import './Tools.css';


/**
 * Componente que presenta las habilidades y herramientas técnicas del usuario mediante imágenes.
 */
const Tools = () => {
  return (
    <div className="tools">
      <h1>Habilidades</h1>
      <div className="skills-row">
        <img src={Photoshop} alt="Adobe Photoshop" />
        <img src={Illustrator} alt="Adobe Illustrator" />
        <img src={Figma} alt="Figma" />
        <img src={Sass} alt="Sass" />
        <img src={tailwind} alt="Tailwind CSS" />
      </div>
      <div className="skills-row">
        <img src={Html} alt="HTML5" />
        <img src={CSS} alt="CSS3" />
        <img src={JS} alt="JavaScript" />
        <img src={IconReact} alt="React" />
        <img src={Nodejs} alt="Node.js" />
      </div>
      <div className="skills-row">
        <img src={Git} alt="Git" />
        <img src={github} alt="GitHub" />
        <img src={Adobe} alt="Adobe" />
      </div>
    </div>
  );
};

export { Tools };
