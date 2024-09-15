import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
        box-sizing: border-box;
    }

    #root{
        width: 100vw;
        min-height: 100vw;
        display: flex;
        flex-direction: column;
    }

    /* Para desktop*/
    @media (min-width: 1024px) {
        body{
            font-size: 16px;
        }

        .conteiner{
            width: 80%;
            margin: 0 auto;
        }

        header{
            display: flex;
            justify-content: space-between;
            padding: 20px 0;
        }

    }

    /* Para Tablets */
    @media (min-width: 786px) and (max-width: 1023px) {
        body{
            font-size: 14px;
        }

        .conteiner{
            width: 90%;
            margin: 0 auto;
        }

        header{
            display: block;
            text-align: center;
        }
    }

    /* Para Mobile */
    @media (max-width:767px) {
        body{
            font-size: 12px;
        }

        .conteiner{
            width: 100%;
            padding: 0 auto;
        }

        header{
            display: block;
            text-align: center;
            padding: 10px 0;
        }
    }
`

export default GlobalStyle