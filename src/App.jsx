import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ReactPixel from 'react-facebook-pixel';

const Main = styled.div`
  background-image: url('/foto_mobile.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
  align-items: start;
  display: flex;
  padding-top: 30px;
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

  h1{
    text-align: center;
    font-family: "Libre Caslon Display", serif;
    font-weight: 100;
    font-size: 3rem;
  }
  
  p{
    margin-top: 1rem;
    text-align: center;
    font-family: "Lato", sans-serif;
    font-weight: 300;
    font-size: 1rem;
    color: #fff;
    
  }
  

  @media (min-width: 768px) {
    h1{
      font-size: 4rem ;
    }
    
    p{
      
      font-size: 1.5rem ;
    }
  }
`

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 0.3rem;
//   margin-top: 20px;
//   .email{
//     background-color: transparent;
//     border: solid 1px #ffffff;
//     height: 40px;
//     width: 250px;
//     border-radius: 15px;
//     color: #ffffff;
//     padding-left: 15px;
//   }
//   .nome{
//     background-color: transparent;
//     border: solid 1px #ffffff;
//     height: 40px;
//     width: 250px;
//     border-radius: 15px;
//     color: #ffffff;
//     padding-left: 15px;
//   }
//   .button{
//     margin-top: 15px;
//     background-color: #ffffff;
//     border: none;
//     height: 40px;
//     width: 250px;
//     border-radius: 10px;
//     color: #000000;
//     font-size: medium;
//     font-weight: 600;
//   }

//   .email::placeholder, .nome::placeholder{
//     color: #fff;
//     font-family: "Lato", sans-serif;
//     font-weight: 100;
//     font-size: 15px;
//   }


//   @media (min-width: 768px) {
//     align-items: center;
//     width: 100%;
//     .email, .nome, .button{
//       width: 60%;
//       height: 50px;
//     }

//   }
// `

const Wapper = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20rem;
  width: 650px;

  button{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    border: none;
    /* height: 45px; */
    /* width: 60%; */
    padding: 15px 10px;
    border-radius: 10px;
    color: #000000;
    font-weight: 400;
    font-size: 1rem;
  }
  
  

  @media (max-width: 768px) {
    /* width: 80%; */
    width: auto;
    margin-left: 0;
    
    
    button{
      
      font-size: 0.8rem;
    }
  }



`


function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const history = useNavigate();

  useEffect(() => {
    ReactPixel.init('1442714005903162');
    ReactPixel.pageView(); // Rastreie a visualização da página
  }, [])

  const handleLeadButtonClick = () => {
    // Dispara o evento de "Lead" quando o botão é clicado
    ReactPixel.track('Lead');
    // Abre o link do WhatsApp
    window.open('https://chat.whatsapp.com/FlvQNKjcca9ESpfZ6URj7d', '_blank');
  };


  // function cadastroMailbiz(e) {
  //   e.preventDefault();
  //   console.log(nome);
  //   console.log(email);

  //   // Aqui você pode realizar qualquer ação necessária após o envio do formulário,
  //   // como enviar os dados para o servidor, exibir uma mensagem de sucesso, etc.

  //   // Após isso, você pode redirecionar para a página desejada usando o objeto `history`.
  //   history('/obrigado');
  // }

  return (
    <Main>
      <Wapper>

        <Container>
          <h1>INVERNO 24’</h1>
          <p>Clique abaixo para ganhar <b>FRETE GRÁTIS</b> no Dia do lançamento e ter acesso à nossa Comunidade Exclusiva!</p>
        </Container>

        <button onClick={handleLeadButtonClick} >Acessar grupo vip no whatsapp</button>

        {/* <Form onSubmit={cadastroMailbiz}>
          <input
            className='nome'
            type="text"
            placeholder='NOME'
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            className='email'
            type="email"
            name="email"
            placeholder='EMAIL'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input className='button' type="submit" value={'SE INSCREVA'} />
        </Form> */}
      </Wapper>
    </Main>
  );
}

export default App


