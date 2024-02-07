import React from 'react';
import './Footer.css'
import facebookImage from './img/facebook.png'
import twitterImage from './img/twiter.png'
import googleImage from './img/google-mas.png'
import instagramImage from './img/instagram (1).png'


function Footer() {


  return (
    <>
      <div className='footer'>
        <div className='copyR'>
          
          <p>Copyright &copy; 2024 iMiK Software</p>
          <p>Aviso legal | Política de privacidad | Términos y condiciones del servicio</p>

        </div>
        
        <div className='textoFooter'>

          <p>Contacto: 688 999 777</p>
          <p>Avda. Somos Coders, 29001, Málaga</p>
          <p>contacto@arrabalschool.com</p>

        </div>

        <div className='redesSociales'>

          <img src= {facebookImage} alt='Facebook' />
          <img src= {googleImage} alt='Google+' />
          <img src= {instagramImage} alt="Instagram" />
          <img src= {twitterImage}  alt='Twitter' />

        </div>

        </div>
      
    </>
  )
}

export default Footer;