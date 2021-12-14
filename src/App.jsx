import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import imgCrypto from './img/imagen-criptos.png'
import Form from './components/Form'
import Resultado from './components/Resultado'
import SpinnerComp from './components/SpinnerComp'

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
margin: 30px auto 0 auto;
display: block;

@media screen and (min-width: 960px) { 
  margin-top: 100px;
}
`

const Heading = styled.h1`
/*font-family: 'Noto Sans', sans-serif;*/
font-family: Founders;
color: #fff;
text-align: center;
font-weight: 700;
margin-top: 80px;
margin-bottom: 50px;
font-size: 50px;

&::after {
  content: '';
  width: 100px;
  height: 6px;
  border-radius: 10px;
  background-color: #FECC1B;
  display: block;
  margin: 10px auto 0 auto
}
`
function App() {

  const [result, setResult] = useState({})
  const [spinner, setSpinner] = useState(false)
  const [currencies, setCurrencies] = useState({})

 
  useEffect(()=>{
    const api = async () => {
      const {stateCrypto, stateCurrency} = currencies
      if (stateCrypto !== undefined) {
        setResult({})
        setSpinner(true)
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${stateCrypto}&tsyms=${stateCurrency},EUR`
        const response = await fetch(url)
        const result = await response.json()
        const resultArray = result.DISPLAY[stateCrypto][stateCurrency]
        setSpinner(false)
        setResult(resultArray)
      }
    }
    api()
  }, [currencies])

  return (
    <Contenedor>
      <Image 
      src={imgCrypto}
      alt='image crypto'
      />
      <div>
        <Heading>Cryptocurrency Calculator</Heading>
        <Form 
          setCurrencies={setCurrencies}
        />
        {spinner &&  <SpinnerComp />}
        { result.PRICE && <Resultado 
                            result={result}
                            currencies={currencies}
                          />}
      </div>
    </Contenedor>
  )
}

export default App
