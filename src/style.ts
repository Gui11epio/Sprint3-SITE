import styled from "styled-components";

export const CabecHeader = styled.header`
    background-color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
    color: #42BCEC;
`;

export const ContainerCabecalho = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const TituloCabecalho = styled.h1`
    font-family: 'Courier New', Courier, monospace;
    font-size: 35px;
    margin-left: 20px; 
    margin-right: 20px; 
`;

export const BotoesCabecalho = styled.li`
    display: flex;
    gap: 10px;
    margin-right: auto; 
    margin-left: 20px; 
`;

export const BotaoCliente = styled.div`
`;

export const LinhaEstilizada = styled.hr`
    border: 2px solid #42BCEC; 
    margin-top: 20px; 
`;

export const LinkEstilizado = styled.a`
    text-decoration: none;
    color: #000;

    &:visited {
        color: #000; 
    }
`;

export const BotaoEstilizado = styled.button`
    text-decoration: none;
    color: #000;
    background-color: #f0f0f0;
    border: 3px solid #42BCEC;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background-color 0.3s;
`;