import React, { useEffect } from 'react'
import styled from '@emotion/styled'

const Card = styled.div`
margin: 0 auto;
width: 95%;
gap: 1rem;
color: #000;
background-color: #fff;
border-radius: 20px;
margin-bottom: 1rem;
overflow: hidden;
transition: all 0.3s ease-in-out;
&:hover{
  cursor: pointer;
  transform: translate( 0px, 5px);
}

@media (min-width: 992px) {
  margin-bottom: 0rem;
  display: flex;
  width: 90%;
}
`

const CardContainer = styled.div`
color: #000;
background-color: #fff;
border-radius: 20px;
margin: 0 auto;
padding: 1rem;
gap: 1rem;
`

const Title = styled.h3`
margin-top: 1rem;
font-size: 17px;
@media (min-width: 992px) {
  margin: 0;
}
`

const Parraph = styled.p`
font-size: 15px;
`

const Btn = styled.a`
color: #000;
font-size: 15px;
text-decoration: none;
font-weight: 700;
display: block;
text-align: center;
margin-bottom: 1rem;
&:hover{
    color: #333;
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 0.5rem;
}
@media (min-width: 992px) {
  text-align: left;
}
`

const Image = styled.img`
width: 100%;
min-height: 200px;
max-height: 200px;
object-fit: cover;
object-position: center center;
@media (min-width: 992px) {
  max-width: 35%;
  min-height: 100%;
}
`

const ImageLoad = styled.img`
background-color: #ddd;
width: 100%;
min-height: 200px;
max-height: 200px;
object-fit: cover;
object-position: center center;
@media (min-width: 992px) {
  min-width: 130px;
  min-height: 100%;
}
`

const Cards = ({item}) => {
  const [image, setImage] = React.useState(true)

  return (
      <Card key={item.id}>
        {image && <ImageLoad/>}
        <Image src={item.image} alt="{item.title}" onLoad={()=> setImage(false)}/>
        <CardContainer>
          <Title>{item.title.split(' ').splice(0, 5).join(' ')}</Title>
          <Parraph>{item.description.substr(0, 100)}...</Parraph>
          <Btn href={item.url} target="_blank">Read More</Btn>
        </CardContainer>
      </Card>

    )
}

export default Cards