import styled from '@emotion/styled'

const Contain = styled.div`
    background-color: #FFF;
    color: #126782;
    border-radius: 5px;
    margin: 20px 0;
    padding: 0px 10px; 
    display: grid;
    grid-template-columns: 20% 35% 35%;
    @media screen and (min-width: 960px) { 
        grid-gap: 1rem;
    }
`

const ImgContaint = styled.div`
    display: flex;
    align-items: center;
`

const Last = styled.div`
    text-align: right;
`

const Texto = styled.p`
    font-weight: 700;
    font-size: 16px;
`

const Price = styled.p`
    font-weight: 300;
`

const Down = styled.p`
    color: #F44250;
    font-family: inherit;
    font-weight: 700;
`

const Up = styled.p`
    color: #6BD968;
    font-family: inherit;
    font-weight: 700;
    text-align: right;
`

const Image = styled.img`
    width: 60%;
    @media screen and (min-width: 960px) { 
        width: 90%;
    }
`

function Resultado({result, currencies}) {

    const {PRICE, TOTALVOLUME24HTO, CHANGEPCT24HOUR, IMAGEURL} = result
    const {stateCrypto, stateCurrency} = currencies
    const url = 'https://www.cryptocompare.com/'

    return (
        <Contain>
            <ImgContaint>
                <Image src={`${url}${IMAGEURL}`} alt="icon" />
           </ImgContaint>
           <div>
            <Texto><span>{stateCrypto}</span></Texto>
            <Price><span>{PRICE}</span></Price>
            </div>
            <Last>
                <Texto><span>{TOTALVOLUME24HTO}</span></Texto>
                {
                CHANGEPCT24HOUR < 0 ? 
                (<Down><i className="fas fa-sort-down"></i>{' '}<span>{CHANGEPCT24HOUR}%</span></Down>) : 
                (<Up><i className="fas fa-sort-up"></i>{' '}<span>{CHANGEPCT24HOUR}%</span></Up>)
                }
            </Last>
        </Contain>
    )
}

export default Resultado
