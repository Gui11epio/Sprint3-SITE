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

export const CorpoPrincipal = styled.main`
    background-color: #42BCEC; /* Azul escuro */
    height: 100vh; /* Ajuste conforme necessário */
    width: 100%; /* Ajuste conforme necessário */
    flex-grow: 1;

    h1{
        color: black;
        font-family: 'Times New Roman', Times, serif;
        justify-content: center;
        text-align: center;
        padding: 20px;

    }

`

export const SectionPrincipal = styled.section`

    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: left;
    text-align: left;

    h2{
        color: white;
        text-align: left;
        justify-content: left;
        margin: 10px;
        font-family: 'Times New Roman', Times, serif;
    }

    p{
        color: white;
        text-align: left;
        justify-content: left;
        margin: 10px;
        font-family: 'Times New Roman', Times, serif;
    }

`

export const Rodape = styled.footer`

    width: 100%;
    min-height: 5vh;
    background-color: white;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    p{
        color: #00008B;
        text-align: center;
    }

`

export const BodyMembros = styled.body`

div{
    background-color: #00008B;
    height: 171;
    width: 1440;
}

.sec{
    grid-area: 'sec';
    background-color: white;
}   

h1{
    color: #42bcec;
    
    font-style: italic;
}

h2{
    text-align: center;
}

p{
    text-align: left;
}


input{
    align-self:center ;
}

legend{
    text-align: center;
}
#participante h2, .participante p {
    color: #FFFFFF; /* Altere para a cor que você deseja */
    
}

#participante img {
    width: 300px; /* Ajuste para o tamanho desejado */
    height: 350px;
}
`

export const ImagemCabec = styled.img`

    width:50px;
    height: 50px;

`

export const FormCadastro = styled.form`

    

`