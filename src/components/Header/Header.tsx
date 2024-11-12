import styled from 'styled-components'

const Header = styled.div`
    width: 80%;
    height: 50px;
    border-radius: 3px;
    font-size: 24px;
    font-weight: bold;
    background-color: #c9c9dd;
    color: #352d2d;
    margin: auto;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    text-align: center;
`
const HeaderText = styled.h1`
    margin: 0;
    padding: 0;
    line-height: 50px;
    letter-spacing: 1px;
`
export function ToDoHeader() {
    return (
        <Header>
            <HeaderText>ToDo List</HeaderText>
        </Header>
    )
}