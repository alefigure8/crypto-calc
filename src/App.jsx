import { useState } from 'react'
import styled from '@emotion/styled'
import imgCrypto from './img/imagen-criptos.png'
import Form from './components/Form'

const Contenedor = styled.div`
max-width: 900px;
margin: 0 auto;
width: 90%;
@media (min-width: 992px) {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
}
`

const Image = styled.img`
max-width: 400px;
width: 80%;
margin: 100px auto 0 auto;
display: block;
`

const Heading = styled.h1`
font-family: 'Noto Sans', sans-serif;
color: #fff;
text-align: center;
font-weight: 700;
margin-top: 80px;
margin-bottom: 50px;
font-size: 34px;

&::after {
  content: '';
  width: 100px;
  height: 6px;
  background-color: #FB8500;
  display: block;
  margin: 10px auto 0 auto
}
`

function App() {

  return (
    <Contenedor>
      <Image 
      src={imgCrypto}
      alt='image crypto'
      />
      <div>
        <Heading>Cryptocurrency Calculator</Heading>
        <Form />
      </div>
    </Contenedor>
  )
}

export default App
