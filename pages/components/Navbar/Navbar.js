import React from "react";
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { styled } from '@stitches/react';
import { violet, blackA } from '@radix-ui/colors';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Busca from "./Busca.jsx";
import * as Separator from '@radix-ui/react-separator';

function Nav() {
  return (
    <>
      <Navbar style={{ backgroundColor: '#17223E', width: "100%" }}>
        <Container>
          <Navbar.Brand >
            <a href="https://xcommerce.io/pt-BR"><img
              src="/xco.svg"
              width="70"
              height="50"
              className="d-inline-block align-top"
              alt="Xcommerce logo"
            /></a>
            <div style={{ position: 'absolute', right: '7%', bottom: '20%', justifyContent: 'space-around' }}>
              <AvatarRoot>
                <AvatarImage
                  src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                  alt="Ícone do usuário"
                />
                <AvatarFallback delayMs={600}></AvatarFallback>
              </AvatarRoot>
              <svg width="15" height="20" color="#FFFFFF" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
            </div>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <SeparatorRoot />
      <div style={{ backgroundColor: '#17223E', height: '410px', width: '100%' }}>
        <h1 style={{ color: 'white', padding: '9%' }}>Produtos</h1>
        <Busca />
      </div>
      <SeparatorRoot2 />
    </>
  )
};

const SeparatorRoot = styled(Separator.Root, {
  width: '100%',
  backgroundColor: 'gray',
  '&[data-orientation=horizontal]': {
    height: 1,
    color: '#17223E',
  },
});

const SeparatorRoot2 = styled(Separator.Root, {
  color: 'gray',
  position: 'relative',
  bottom: 120,
  left: 30,
  width: '95%',
  backgroundColor: 'gray',
  '&[data-orientation=horizontal]': {
    height: 1,
    color: '#17223E',
  },
});

const AvatarRoot = styled(AvatarPrimitive.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  userSelect: 'none',
  width: 45,
  height: 45,
  borderRadius: '100%',
  backgroundColor: blackA.blackA3,

});

const AvatarImage = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
});

const AvatarFallback = styled(AvatarPrimitive.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  color: violet.violet11,
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
});

export default Nav;