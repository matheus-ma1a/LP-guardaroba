import { useEffect } from 'react';
import styled from 'styled-components'


const Main = styled.div`
  background-image: url('/mobile.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center; /* Centraliza o conteúdo no mobile */
  align-items: center;
  padding: 0 10%; /* Reduz o padding lateral no mobile */

  @media (min-width: 768px) {
    background-image: url('/desktop.jpg');
    display: flex;
    justify-content: space-between; /* Espaça os elementos no desktop */
    padding: 0 5%; /* Ajusta o padding lateral no desktop */
  }
`;

const Container = styled.div`
  color: #fff;
  text-align: center; /* Centraliza o texto no mobile */
  width: 100%; /* Ajusta para ocupar toda a largura disponível */

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

  @media (min-width: 768px) {
    text-align: left; /* Alinha o texto à esquerda no desktop */
    max-width: 50%; /* Limita a largura do texto no desktop */
    margin-left: 10%; /* Adiciona margem à esquerda no desktop */
  }
`;


const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  flex: 1;
  padding-bottom: 150px; /* Reduzido para mobile */

  h1 {
    font-family: "Amiri Quran", sans-serif;
    font-weight: 400;
    font-size: 3rem; /* Reduzido para mobile */
    height: auto; /* Remove altura fixa */
    margin-bottom: 1rem;
  }

  h2 {
    font-family: "Lato", sans-serif;
    font-weight: 300;
    text-align: center;
    padding-bottom: 1rem;

    b {
      font-weight: 600;
    }
  }

  p {
    font-family: "Lato", sans-serif;
    text-align: center;
    font-weight: 300;
  }

  @media (min-width: 768px) {
    align-items: center; /* Alinha o texto ao centro no desktop */

    h1 {
      font-size: 7rem; /* Ajusta o tamanho do título no desktop */
      height: 210px; /* Ajusta a altura do título no desktop */
    }

    p {
      max-width: 400px;
      font-size: 1.5rem;
    }
  }
`;

function App() {

  const handleLeadButtonClick = () => {
    // Dispara o evento de "Lead" quando o botão é clicado
    // Abre o link do WhatsApp
    window.open('https://chat.whatsapp.com/CV8PE4KNuWbJgmsJyv1Xs9');
    pixelLead()
  };

  const pixelLead = () => {
    return fbq('track', 'Lead')
  }



  return (
    <Main>
      <Container>
        <Div1>
          <h1>SCULTURA</h1>
          <h2><b>OBRIGADA POR SE INSCREVER!</b></h2>
          <p>clique para fazer parte da nossa comunidade no whatsapp e receber o seu cupom.</p>
          <button onClick={handleLeadButtonClick} >FAÇA PARTE</button>
        </Div1>
      </Container>
    </Main>
  );
}

export default App;


