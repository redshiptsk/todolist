import { FunctionComponent, useEffect, useState } from 'react';
import { toDosStore } from '../../../stores';
import { Container, ListContainer, Button, ListItem, GreenListItem, RedButton, ButtonsBlock } from './list-styles'
import { observer } from 'mobx-react-lite';
import { useIntersectionObserver } from '@siberiacancode/reactuse';
const List: FunctionComponent = observer(() => {
    const [page, setPage] = useState(10);
    
    useEffect(() => {
        toDosStore.getToDos(page)
    }, [page])

    const { ref } = useIntersectionObserver<HTMLDivElement>({
        threshold: 1,
        onChange: (entry) => {
            if (entry.isIntersecting) {
                setPage((prev) => prev + 10)
                toDosStore.setPageSize()
            };
        },
    });
    const { data, meta } = toDosStore.toDos; 
    const allLoaded = (meta.pagination.pageSize >= meta.pagination.total);


    
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
                )) : <></>}
                { allLoaded? <div>Загружены все задачи</div> : <div ref={ref}>Loading...</div>} 

            </ListContainer>

        </Container>
    )
})

export default List;