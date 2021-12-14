import React from 'react'
import styled from '@emotion/styled'

const Message = styled.div`
    color: #FFF;
    text-align: center;
    padding: 15px;
    text-transform: uppercase;
    font-weight: 700;
    border-radius: 5px;
    background-color: #FB8500;
`

function Error({children}) {
    return (
        <Message>
            {children}
        </Message>
    )
}

export default Error
