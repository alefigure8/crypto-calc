import React from 'react'
import styled from '@emotion/styled'
import Cards from './Cards'

const Grid = styled.div`
margin: 0 auto;
height: 100%;
@media (min-width: 792px) {
  width: 90%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 2rem;
}
`


const News = ({news}) => {
  return (
    <Grid>
      {
        news.map(item => ( <Cards key={item.title} item={item}/>))
      }
    </Grid>
  )
}

export default News