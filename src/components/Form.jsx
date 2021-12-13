import styled from '@emotion/styled'

const InputSubmit = styled.input`
background-color: #219EBC;
border: none;
width: 100%;
padding: 10px;
color: #fff;
font-weight: 700;
text-transform: uppercase;
font-size: 20px;
border-radius: 5px;
transition: background-color .3s ease;
&:hover{
    background-color: #1e8ba6;
    
}
`

function Form() {
    return (
        <form>
            <InputSubmit 
                type="submit" 
                value="Calc"
            />
        </form>
    )
}

export default Form
