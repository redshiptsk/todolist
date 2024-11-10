import styled from "styled-components";
export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`
export const ListContainer = styled.div`
    width: 80%;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 20px;
    padding: 20px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f8f9fa;
    flex-direction: column;
    
    @media (min-width: 768px) {
        flex-direction: column;
    }
    @media (min-width: 992px) {
        flex-direction: column;
    }
    @media (min-width: 1200px) {
        flex-direction: column;
    }
    @media (min-width: 1600px) {
        flex-direction: column;
    }
    @media (min-width: 1920px) {
        flex-direction: column;
    }
`
export const ListItem = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    font-size: 18px;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    
    transition: background-color 0.3s ease-in-out;
    &:hover {
        background-color: #f1f3f5;
    }
    
`;

export const GreenListItem = styled(ListItem)`
    background-color: #dff0d8;
    &:hover {
        background-color: #dfffd8;
    }
`;

export const ButtonsBlock = styled.div`
    display: flex;

`

export const Button = styled.button`
    padding: 10px 20px;
    border-radius: 4px;
    background-color: #4caf50;
    color: white;
    cursor: pointer;
`
export const RedButton = styled(Button)`
background-color: #f00;`

