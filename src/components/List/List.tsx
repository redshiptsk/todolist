import { FunctionComponent, useEffect, useState } from 'react';
import { toDosStore } from '../../../stores';
import { Container, ListContainer, Button, ListItem, GreenListItem, RedButton, ButtonsBlock } from './list-styles'
import { observer } from 'mobx-react-lite';
import { useIntersectionObserver, useQuery } from "@siberiacancode/reactuse";





const List: FunctionComponent = observer(() => {


    useEffect(() => {
        toDosStore.getToDos()
    }, [])

    const { data } = toDosStore.toDos
    return (

        <Container>
            <ListContainer>
                {data ? toDosStore.toDos.data.map((item) => (
                    (item.attributes.status !== 'done') ? <ListItem key={item.id} >
                        {item.attributes.name}
                        <ButtonsBlock>
                            <Button onClick={() => { toDosStore.toggleToDo(item.id) }}>Выполнить</Button>
                            <RedButton onClick={() => { toDosStore.removeToDo(item.id) }}> Удалить</RedButton>
                        </ButtonsBlock>
                    </ListItem>
                        : <GreenListItem key={item.id}>
                            {item.attributes.name}
                            <ButtonsBlock>
                                <Button onClick={() => { toDosStore.toggleToDo(item.id) }}>Отменить</Button>
                                <RedButton onClick={() => { toDosStore.removeToDo(item.id) }}> Удалить</RedButton>
                            </ButtonsBlock>

                        </GreenListItem>
                )): <></>}
            </ListContainer>
        </Container>
    )
})/* 
export function List()  {

    return (

        <Container>
            <ListContainer>
                {toDosStore.getToDos().map((item) => (
                    toDosStore.toDos ? <ListItem key={item.id} >
                        {item.attributes.name} <Button onClick={() => { toDosStore.toggleToDo(item.id) }}>Выполнено</Button>
                    </ListItem> :
                        <GreenListItem key={item.id}>
                            {item.attributes.name} <Button onClick={() => { toDosStore.toggleToDo(item.id) }}>Отменить</Button>
                        </GreenListItem>
                ))}
            </ListContainer>
        </Container>
    )

} */

export default List;