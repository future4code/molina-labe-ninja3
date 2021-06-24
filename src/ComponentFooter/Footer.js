import React from "react";
import styled from "styled-components";

const Container = styled.div`
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50vh;
  width: 100vw;
  justify-content: center;
  background-color: #f8f8f8;
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 40% 40% 20%;
  width: 90vw;
  margin-top: 1%;
  margin-bottom: 1%;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 1.5em;
  color: black;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: black;
  margin-bottom: 2%;
`;

const Text = styled.p`
  font-size: 0.8rem;
  color: #4f0000;
  text-align: justify;
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextContact = styled.div`
  width: 40%;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const SocialMidia = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconSocial = styled.div`
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const Link = styled.a`
  margin-left: 2%;
`;

const Image = styled.img`
  height: 45%;
  margin-top: 5%;
`;

const Direitos = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: center;
  margin: 1%;
`;

export default class Footer extends React.Component {
  render() {
    return (
      <Container>
        <Main>
          <div>
            <Logo>
              <Title>LabeNinjas</Title>
            </Logo>
            <Text>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Text>
          </div>
          <Contact>
            <Title>Serviços</Title>
            <TextContact>
              <Text> Autos</Text>
              <Text>Consultoria</Text>
              <Text>Design e Tecnologia</Text>
              <Text> Moda & Beleza</Text>
              <Text> Aulas</Text>
            </TextContact>
          </Contact>
          <SocialMidia>
            <Title>Redes Socias</Title>
            <IconSocial>
              <Link target="_blank" href="https://www.instagram.com/">
                <Image src="https://image.flaticon.com/icons/png/512/1384/1384015.png" />
              </Link>
              <Link target="_blank" href="https://www.facebook.com/">
                <Image src="https://image.flaticon.com/icons/png/512/1384/1384005.png" />
              </Link>
              <Link target="_blank" href="https://www.twitter.com/">
                <Image src="https://image.flaticon.com/icons/png/512/733/733635.png" />
              </Link>
              <Link target="_blank" href="https://www.youtube.com/">
                <Image src="https://image.flaticon.com/icons/png/512/1384/1384028.png" />
              </Link>
            </IconSocial>
          </SocialMidia>
        </Main>

        <Direitos>
          <Text>
            © Copyright 2021 - Todos os direitos reservados a LabeNinjas
          </Text>
        </Direitos>
      </Container>
    );
  }
}
