import {useState} from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
    color: #D0D0D0;
    display: block;
    font-size: 20px;
    line-height: 32px;
    margin: 15px 0;
    font-family: inherit;
`

const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 10px;
    border-radius: 5px;
`

function useSelectCurrency(label, options) {

    const [state, setState] = useState('')

    const SelectCurrency = () => (
        <>
            <Label>{label}</Label>
            <Select
                value={state}
                onChange={e => setState(e.target.value)}
            >
            <option>Select</option>
                {options.map(option => (
                    <option 
                        key={option.id}
                        value={option.id}
                    >
                        {option.name}
                    </option>
                ))}
            </Select>
        </>
    )
    return [state, SelectCurrency]
}

export default useSelectCurrency
