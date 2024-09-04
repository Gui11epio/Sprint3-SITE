
import { CabecHeader, ContainerCabecalho, TituloCabecalho, BotoesCabecalho, BotaoCliente, LinhaEstilizada, LinkEstilizado, BotaoEstilizado } from "../style";
export default function Cabecalho() {
    return (
        <CabecHeader>
            <ContainerCabecalho>
                <TituloCabecalho id="cabecario">HELPY SEGUROS</TituloCabecalho>
                <BotoesCabecalho className="botao">
                    <BotaoEstilizado>
                        <LinkEstilizado href="/">Página Principal</LinkEstilizado>
                    </BotaoEstilizado>
                    <BotaoEstilizado>
                        <LinkEstilizado href="/helpy">HELPY</LinkEstilizado>
                    </BotaoEstilizado>
                    <BotaoEstilizado>
                        <LinkEstilizado href="/membros">Página dos Membros</LinkEstilizado>
                    </BotaoEstilizado>
                </BotoesCabecalho>
                <BotaoCliente>
                    <BotaoEstilizado>
                        <LinkEstilizado href="#">Área do cliente</LinkEstilizado>
                    </BotaoEstilizado>
                </BotaoCliente>
            </ContainerCabecalho>
            <LinhaEstilizada />
        </CabecHeader>
    );
}
