import './Footer.css'



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

          <img src='./img/facebook.png' alt='Facebook' />
          <img src='./img/google-mas.png' alt='Google+' />
          <img src='./img/instagram (1).png' alt="Instagram" />
          <img src='./img/twiter.png'  alt='Twitter' />

        </div>

        </div>
      
    </>
  )
}

export default Footer;