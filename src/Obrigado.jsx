import React, { useEffect } from "react";
import styled from "styled-components";
import ReactPixel from 'react-facebook-pixel';


const Main = styled.div`
  background-image: url('/bg-mobile.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
  align-items: start;
  display: flex;
  padding-top: 130px;
  flex-direction: column;
  
  
  @media (min-width: 768px) {
    
    background-image: url('/bg-desktop.png');
    justify-content: start;
    align-items: flex-start;
    padding-top: 200px;
  }
`

const Container = styled.div`

  padding: 0 30px 25px ;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  h1{
    text-align: center;
    font-family: "Libre Caslon Display", serif;
    font-weight: 100;
    font-size: 50px;
  }

  p{
    margin-top: 1.5rem;
    text-align: center;
    font-family: "Lato", sans-serif;
    font-size: 1rem;
  }

  p:nth-of-type(2){
    font-size: large;
    font-weight: 400;
  }
  
  b{
    font-weight: 400;
  } 

  button{
    display: flex;
    align-items: center;
    margin-top: 25px;
    background-color: #ffffff;
    border: none;
    height: 40px;
    padding: 25px 60px;
    border-radius: 10px;
    color: #000000;
    font-size: medium;
    font-weight: 300;
  }

  @media (min-width: 850px) {
    margin-left: 20rem;
    width: 600px;

    h1{
      font-size: 5rem ;
    }
    
    p{
      font-size: 1.7rem ;
    }

    p:nth-of-type(2){
    font-size: larger;
    }

}


`
const handleLeadButtonClick = () => {
  // Dispara o evento de "Lead" quando o botão é clicado
  // Abre o link do WhatsApp
  window.open('https://devzapp.com.br/api-engennier/campanha/api/redirect/66293b4e230a9c00011b2fd2');
};

const Obrigado = () => {

  useEffect(() => {
    // ReactPixel.init('1442714005903162');

    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () {
        n.callMethod ?
        n.callMethod.apply(n, arguments) : n.queue.push(arguments)
      };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
      n.queue = []; t = b.createElement(e); t.async = !0;
      t.src = v; s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s)
    }(window, document, 'script',
      'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '1442714005903162');
    fbq('track', 'Lead');

    <noscript>
      <img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id=1442714005903162&ev=Lead&noscript=1" />
    </noscript>
  }, [])

  return (
    <Main>
      <Container>
        <h1>INVERNO 24’</h1>
        <p><b>OBRIGADA POR SE INSCREVER!</b></p>
        <p>Clique e faça parte do nosso grupo do whatsapp e fique
          por dentro de todas as novidades</p>
        <button onClick={handleLeadButtonClick} >FAÇA PARTE DA COMUNIDADE</button>
      </Container>
    </Main>
  )
}

export default Obrigado