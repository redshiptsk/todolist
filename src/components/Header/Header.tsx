import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
    background-color: #9292f5;
    color: white;
`
export function ToDoHeader() {
    return (
        <Header>
            <h1>ToDo List</h1>
        </Header>
    )
}