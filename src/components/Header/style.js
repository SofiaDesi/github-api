import styled from 'styled-components'

export const Box = styled.header`
    width: 100%;
    height: 70px;
    background-color: #24292E;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const H1 = styled.h1`
    color: white;
    font-size: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    
`
export const Image = styled.img`
    width: 45px;
    height: 45px;
    color: white;
    margin-right: 10px;
`
export const Search = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`


export const Input = styled.input`
    font-size: 12px;
    height: 23px;
    border-radius: 5px;
    background-color: #24292E;
    border: 1px solid #444D56;
    outline: none;
    padding: 5px 10px;
    color: white;
    box-shadow: 0 0 0 0;
`
export const Btn = styled.button`
    font-size: 12px;
    border-radius: 5px;
    padding: 9px 12px;
    border: 1px solid #2C974B;
    outline: none;
    margin-left: 5px;
    background-color: #24292E;
    color: #2C974B;
    cursor: pointer;
    font-weight: bold;
    transition: 0.1s;
    &:hover {
        color: #24292E;
        background-color: #298545;
    }
`
