import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Form from './components/Form'
import Resultado from './components/Resultado'
import SpinnerComp from './components/SpinnerComp'
import News from './components/News'

const Contenedor = styled.div`
padding: 3rem;
margin: 0 auto;
width: 90%;
display: flex;
flex-direction: column-reverse;
@media (min-width: 1080px) {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}
`

const Image = styled.img`
max-width: 400px;
width: 80%;
margin: 30px auto 0 auto;
display: block;

@media screen and (min-width: 960px) { 
  margin-top: 80px;
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
  const [spinnerNews, setSpinnerNews] = useState(false)
  const [currencies, setCurrencies] = useState({})
  const [news, setNews] = useState([])

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

    const news = async () => {
      setSpinnerNews(true)
      const url = `https://gnews.io/api/v4/search?q=${currencies.stateCrypto || 'cryptocurrency'}&lang=en&max=6&token=${import.meta.env.VITE_TOKEN}`
      const response = await fetch(url)
      const result = await response.json()
      setNews(result.articles)
      setSpinnerNews(false)
    }

    const result = [
    {
        "title": "What's next for bitcoin as the cryptocurrency wrestles with $24,000",
        "description": "Bitcoin is struggling at the $24,000 level after finding its perceived low for the cycle in June and going on to rise more than 26% in July.",
        "content": "Bitcoin is struggling at the $24,000 level after finding its perceived low for the cycle in June and going on to rise more than 20% in July, for its best month of the year. The cryptocurrency rose above $24,000 twice this week. It also touched that l... [2585 chars]",
        "url": "https://www.cnbc.com/2022/08/12/whats-next-for-bitcoin-as-the-cryptocurrency-wrestles-with-24000.html",
        "image": "https://image.cnbcfm.com/api/v1/image/107005904-1643117857182-gettyimages-1237577245-widak-bitcoind220106_npTUo-1.jpg?v=1653668844&w=1920&h=1080",
        "publishedAt": "2022-08-12T15:24:20Z",
        "source": {
            "name": "CNBC",
            "url": "https://www.cnbc.com"
        }
    },
    {
        "title": "Ethereum (CRYPTO:ETH) Jumps 13% as Major Network Upgrade Nears",
        "description": "The world’s second-largest cryptocurrency by market value might dethrone the first mover with the launching of its network upgrade in September 2022.",
        "content": "The world’s second-largest cryptocurrency by market value might dethrone the first mover with the launching of its network upgrade in September 2022.\nYou’re reading a free article with opinions that may differ from The Motley Fool’s premium investing... [3455 chars]",
        "url": "https://www.fool.ca/2022/08/12/ethereum-cryptoeth-jumps-13-as-major-network-upgrade-nears/",
        "image": "https://www.fool.ca/wp-content/uploads/2022/03/Crypto.jpg",
        "publishedAt": "2022-08-12T12:45:00Z",
        "source": {
            "name": "The Motley Fool Canada",
            "url": "https://www.fool.ca"
        }
    },
    {
        "title": "China's Huobi founder looks to sell stake for over $1 bln- Bloomberg News",
        "description": "The founder of China's Huobi Group, which runs one of the world's largest cryptocurrency exchanges, is in talks with investors to sell his almost 60% stake in the exchange for over $1 billion, Bloomberg News reported on Friday.",
        "content": "The founder of China's Huobi Group, which runs one of the world's largest cryptocurrency exchanges, is in talks with investors to sell his almost 60% stake in the exchange for over $1 billion, Bloomberg News reported on Friday. Leon Li's stake sale w... [1367 chars]",
        "url": "https://www.devdiscourse.com/article/business/2141692-chinas-huobi-founder-looks-to-sell-stake-for-over-1-bln--bloomberg-news",
        "image": "https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/devnews/12_08_2022_13_40_39_3933483.png?width=920&format=jpeg",
        "publishedAt": "2022-08-12T08:03:21Z",
        "source": {
            "name": "Devdiscourse",
            "url": "https://www.devdiscourse.com"
        }
    },
    {
        "title": "Firm providing cryptocurrency services claims Irish sub-contractor defrauded it of over €460,000",
        "description": "Light Technology obtained an interim injunction preventing accounts manager from dissipating or moving cryptocurrency",
        "content": "Earlier this week the company claims Niall Ryan admitted doing wrong and regretting his actions, and that he was trying to fix it, and that he wished to return the funds. Photograph: Kin Cheung/ AP\nThe High Court has granted temporary orders freezing... [3298 chars]",
        "url": "https://www.irishtimes.com/crime-law/courts/2022/08/11/firm-providing-cryptocurrency-services-claims-irish-sub-contractor-defrauded-it-of-over-460000/",
        "image": "https://www.irishtimes.com/resizer/zvRpyxncgEDwEjtfPPyS_HNLXtc=/1200x630/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/ZJZVK23DNP4Z3QBLDVTC5UCUUQ.jpg",
        "publishedAt": "2022-08-11T18:33:00Z",
        "source": {
            "name": "The Irish Times",
            "url": "https://www.irishtimes.com"
        }
    },
    {
        "title": "Cryptocurrency prices today: Bitcoin, dogecoin fall while ether, Solana gain. Check latest rates",
        "description": "The global cryptocurrency market cap today was down nearly 2% in the last 24 hours at $1.19 trillion",
        "content": "Cryptocurrency prices today were mixed with Bitcoin trading below the $24,000 mark. The world's largest and most popular cryptocurrency Bitcoin was trading over 2% lower at $23,978. The global crypto market cap today was above the $1 trillion mark, e... [2013 chars]",
        "url": "https://www.livemint.com/market/cryptocurrency/cryptocurrency-prices-today-bitcoin-dogecoin-fall-while-ether-solana-gain-11660271346590.html",
        "image": "https://images.livemint.com/img/2022/08/12/600x338/cryptocurrency_1660271451331_1660271451476_1660271451476.JPG",
        "publishedAt": "2022-08-11T18:30:00Z",
        "source": {
            "name": "Livemint",
            "url": "https://www.livemint.com"
        }
    },
    {
        "title": "Avalanche And MetaCryp Could Help Diversify Your Crypto Portfolio",
        "description": "They are also renowned for their high volatility and profit margins. Making the right cryptocurrency investment can earn you plenty of money. Avalanche (AVAX) and MetaCryp (MTCR) are top crypto tokens that can potentially explode your portfolio",
        "content": "Today, we live in a completely different world from what we are used to. People now demand different types of solutions that will save them time and solve unique problems. They want a solution that can equally serve as a means of investment while pro... [4640 chars]",
        "url": "https://www.livemint.com/brand-stories/avalanche-and-metacryp-could-help-diversify-your-crypto-portfolio-11660306548641.html",
        "image": "https://images.livemint.com/img/2022/08/12/600x338/03_(22)_1660307791975_1660307797915_1660307797915.jpg",
        "publishedAt": "2022-08-11T18:30:00Z",
        "source": {
            "name": "Livemint",
            "url": "https://www.livemint.com"
        }
    }
]

    //setNews(result)
    news()

  }, [currencies])

  return (
    <Contenedor>
      <div>
      {spinnerNews ?  <SpinnerComp />
      : <News news={news} />
      }
      </div>
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
