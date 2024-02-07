import React from "react";
import ImgProfile from '../asset/image0.png'
import Linkdin from '../asset/Vector.png'
import instagram from '../asset/logoinstagram.png'
import Github from '../asset/Vector-1.png'


import './Profile.css'


const Home = () => {

return (
<div className="main-container">
            <div className="main-text">
                <h1 id="name">Yeraldin Espinosa</h1>
                <p id="ocupation" className="text-occupation">
                {'< Desarrolladora FrontEnd / Diseñadora UI />'}
                </p>
                <p className="bienvenida">¡Bienvenido a mi mundo digital!
                    Soy apasionada por la creación visual y la funcionalidad impecable. Con un enfoque en el desarrollo Frontend y el diseño de interfaces de usuario, transformo ideas en experiencias digitales cautivadoras.</p>

               <button className="Contact">Contact</button>
            </div>
            <div className="main-img">       
               <img className="imgProfile" src={ImgProfile} alt="profilephoto"/>
               <div class="footer">
            <a href="https://www.linkedin.com/in/yeraldin-espinosa-716493197/">
                <img src={Linkdin} alt="linkedin"/>
                </a>
            <a href="https://www.linkedin.com/in/yeraldin-espinosa-716493197/">
                <img src={instagram} alt="instagram"/>
            </a>
            <a href="https://github.com/YeralShaik">
                <img src={Github} alt="GitHub"/>
            </a>
        </div>
            </div>
           
        </div>
        

)
}

    export default Home;