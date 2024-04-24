import React from "react";
import styled from "styled-components";

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
    font-weight: 100;
    font-size: 1rem;
    
    
  }

  p:nth-of-type(2){
    font-size: large;
    font-weight: 300;
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
    /* width: 250px; */
    padding: 25px 60px;
    border-radius: 10px;
    color: #000000;
    font-size: larger;
    font-weight: 600;
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
    font-weight: 300;
    }

}


`

const Obrigado = () => {
    return (
        <Main>
            <Container>
                <h1>INVERNO 24’</h1>
                <p><b>OBRIGADA POR SE INSCREVER!</b></p>
                <p>Clique e faça parte do nosso grupo do whatsapp e fique
                    por dentro de todas as novidades</p>
                <button>FAÇA PARTE DA COMUNIDADE</button>
            </Container>
        </Main>
    )
}

export default Obrigado