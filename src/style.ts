import styled from "styled-components";

export const CabecHeader = styled.header`

background-color: white;
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-between;
text-align: left;
color: #42BCEC;

h1{
    font-family: 'Courier New', Courier, monospace;
    text-align: left;
    font-size: 35px;
}

/* .cabecario{
    display: flex;
    justify-content: left;
    gap: 10px;
} */

#cabecario{
    display: flex;
    justify-content:left;
    text-align: center;
    
}

.botao{
    display: flex;
    justify-content: center;
    gap: 10px;
}

hr{
    color: #42BCEC;
    size: 10px;
}

button{
    text-decoration: none;
    color: #000;
    background-color: #f0f0f0;
    border: 3px solid #42BCEC;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background-color 0.3s;
}


`;





