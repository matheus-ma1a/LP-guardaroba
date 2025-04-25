import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

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

  @media (min-width: 768px) {
    text-align: left; /* Alinha o texto à esquerda no desktop */
    max-width: 50%; /* Limita a largura do texto no desktop */
    margin-left: 10%; /* Adiciona margem à esquerda no desktop */
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%; /* Ajusta para ocupar toda a largura disponível */

  .nome, .email {
    background-color: transparent;
    border: solid 1px #ffffff;
    height: 40px; /* Reduzido para mobile */
    width: 100%; /* Ajusta para ocupar toda a largura disponível */
    max-width: 300px; /* Limita a largura máxima */
    border-radius: 15px;
    color: #ffffff;
    padding-left: 15px;
    font-size: 0.9rem; /* Reduzido para mobile */
    font-family: "Lato", sans-serif;
  }

  .button {
    background-color: #ffffff;
    border: none;
    height: 40px; /* Reduzido para mobile */
    width: 100%; /* Ajusta para ocupar toda a largura disponível */
    max-width: 300px; /* Limita a largura máxima */
    border-radius: 10px;
    color: #000000;
    font-size: 0.9rem; /* Reduzido para mobile */
    font-weight: 600;
    cursor: pointer;
  }

  .nome::placeholder, .email::placeholder {
    color: #fff;
    font-family: "Lato", sans-serif;
    font-weight: 100;
    font-size: 0.9rem; /* Reduzido para mobile */
  }

  // @media (min-width: 768px) {
  //   align-items: flex-start; /* Alinha os inputs à esquerda no desktop */
  //   .nome, .email, .button {
  //     width: 400px;
  //     height: 50px;
  //     font-size: 1rem;
  //   }
  // }
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

  p {
    font-family: "Lato", sans-serif;
    font-weight: 300;
    font-size: 1rem; /* Reduzido para mobile */
    text-align: center;
    padding-bottom: 1rem;

    b {
      font-weight: 600;
    }
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
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const history = useNavigate();

  function cadastroMailbiz(e) {
    e.preventDefault();

    const options = {
      method: 'POST',
      url: `https://mbiz.mailclick.me/api.php/Subscriber.Subscribe?APIKey=${process.env.API_KEY}&Command=Subscriber.Subscribe&ResponseFormat=JSON&ListID=20603&EmailAddress=${email}&CustomField1=${nome}&IPAddress=12`
    };


    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });

    history('/obrigado');
  }

  return (
    <Main>
      <Container>
        <Div1>
          <h1>SCULTURA</h1>
          <p>se cadastre para ganhar <br /><b>cupom de 10% off</b><br /> no dia do lançamento</p>
          <Form onSubmit={cadastroMailbiz}>
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
              required={true}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input className='button' type="submit" value={'SE INSCREVA'} />
          </Form>
        </Div1>
      </Container>
    </Main>
  );
}

export default App;


