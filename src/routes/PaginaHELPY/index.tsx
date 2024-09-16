import { BotaoEstilizado, CorpoPrincipal,SecHelpy } from "../../style";
import helpy from '../../assets/menuHelpy-removebg-preview.png'
import { Link } from "react-router-dom";

export default function InicioHelpy(){

    return(
        <CorpoPrincipal>
            <h1 className="titulo">OLÁ, SOU O HELPY</h1>
            <SecHelpy>
                <p>O Chatbot feito para te ajudar com os problemas do seu carro. Apenas responda simples perguntas e descubra sobre o problema de seu veículo</p>
                <BotaoEstilizado>
                    <Link to="/bot" >Acesse o Helpy</Link>
                </BotaoEstilizado>
                <BotaoEstilizado>
                    <a href="https://t.me/Bothelpy_bot">Pelo Telegram!</a>
                </BotaoEstilizado>
                <div id="idHelpy">
                    <img src= {helpy} alt="" />
                </div>
            </SecHelpy>
        </CorpoPrincipal>
    )
}