import { BotaoEstilizado,DivErro,LinkEstilizado } from "../../style";

export default function Error(){
    return(
        <DivErro>
            <h1>Sinto muito...Página não encontrada.</h1>
            <h1>Resolveremos em Breve!</h1>
            <BotaoEstilizado>
                <LinkEstilizado href="/">Voltar</LinkEstilizado>
            </BotaoEstilizado>
        </DivErro>
    )
    
}