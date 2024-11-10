import { styled } from "styled-components"
const Form = styled.form`
    width: 80%;
    margin: 0 auto;
    background-color: #f8f9fa;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding: 20px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease-in-out;
    
`

const Input = styled.input`
    width: 100%;
    padding: 10px;
    border-radius: 4px;
`

const Button = styled.button`
    padding: 10px 20px;
    border-radius: 4px;
    background-color: #4caf50;
    color: white;
    cursor: pointer;
`

export {Form, Input, Button}