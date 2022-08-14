import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import useSelectCurrency from '../components/useSelectCurrency'
import Error from '../components/Error'
import {currency} from '../data/currency'


const InputSubmit = styled.input`
background-color: #3992FF;
font-family: inherit;
font-weight: 700;
border: none;
width: 100%;
padding: 10px;
color: #fff;
font-size: 20px;
border-radius: 5px;
transition: background-color .3s ease;
margin-top: 20px;
height: 4rem;
&:hover{
    cursor: pointer;
    background-color: #2c6cba;
}
`

const FormStyled = styled.form`
    margin: 0 auto 20px auto;
`

function Form({setCurrencies}) {

    const [crypto, setCrypto] = useState([])
    const [error, setError] = useState(false)

   const [stateCurrency, SelectCurrency] = useSelectCurrency('Select your Currency', currency)
   const [stateCrypto, SelectCrypto] = useSelectCurrency('Select your CriptoCurrency', crypto)

   useEffect(()=>{
       const api = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=15&tsym=USD'
            const response = await fetch(url)
            const result = await response.json()
            const arrayCrpto =  result.Data.map(crypto => {
                const obj = {
                    id: crypto.CoinInfo.Name, 
                    name: crypto.CoinInfo.FullName
                }
                return obj
            })  
            setCrypto(arrayCrpto)
       }
       api()
   }, [])

   const handleSubmit = (e) => {
        e.preventDefault()
        if([stateCrypto, stateCurrency].includes('')){
            setError(true)
            setTimeout(() => {
            setError(false)
            }, 3000);
            return
        }
        setCurrencies({stateCrypto, stateCurrency})
   }

   return (
        <>
            {error && (<Error>Todos los campos son obligatorios</Error>)}

            <FormStyled
                onSubmit={handleSubmit}
            >
                <SelectCurrency />
                <SelectCrypto />
                <InputSubmit 
                    type="submit" 
                    value="Calculate"
                />
            </FormStyled>
        </>
    )
}

export default Form
