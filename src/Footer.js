import React, { useState } from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 3rem 0;
  font-family: 'Arial', sans-serif;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 0 1rem;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 30px;
    height: 2px;
    background-color: #3498db;
  }
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const NavItem = styled.li`
  margin-bottom: 0.5rem;
`;

const NavLink = styled.a`
  color: #bdc3c7;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #3498db;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  color: #ecf0f1;
  font-size: 1.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #3498db;
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const NewsletterInput = styled.input`
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
`;

const NewsletterButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #2980b9;
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #34495e;
`;

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implementar lógica de inscrição na newsletter aqui
    console.log('Email inscrito:', email);
    setEmail('');
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <SectionTitle>Navegação</SectionTitle>
          <NavList>
            <NavItem><NavLink href="#">Início</NavLink></NavItem>
            <NavItem><NavLink href="#">Sobre</NavLink></NavItem>
            <NavItem><NavLink href="#">Serviços</NavLink></NavItem>
            <NavItem><NavLink href="#">Contato</NavLink></NavItem>
          </NavList>
        </FooterSection>
        
        <FooterSection>
          <SectionTitle>Contato</SectionTitle>
          <p>Email: contato@empresa.com</p>
          <p>Telefone: (11) 1234-5678</p>
          <p>Endereço: Rua Exemplo, 123 - São Paulo, SP</p>
        </FooterSection>
        
        <FooterSection>
          <SectionTitle>Redes Sociais</SectionTitle>
          <p>Siga-nos nas redes sociais:</p>
          <SocialIcons>
            <SocialIcon href="#"><FaFacebookF /></SocialIcon>
            <SocialIcon href="#"><FaTwitter /></SocialIcon>
            <SocialIcon href="#"><FaInstagram /></SocialIcon>
            <SocialIcon href="#"><FaLinkedinIn /></SocialIcon>
          </SocialIcons>
        </FooterSection>
        
        <FooterSection>
          <SectionTitle>Newsletter</SectionTitle>
          <p>Inscreva-se para receber nossas novidades:</p>
          <NewsletterForm onSubmit={handleSubmit}>
            <NewsletterInput 
              type="email" 
              placeholder="Seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <NewsletterButton type="submit">Inscrever-se</NewsletterButton>
          </NewsletterForm>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        <p>&copy; 2024 Sua Empresa. Todos os direitos reservados.</p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;