import icone from '../assets/icone.jpg';
import { BotaoCliente, BotaoEstilizado, BotoesCabecalho, CabecHeader, ContainerCabecalho, ImagemCabec, LinhaEstilizada, LinkEstilizado, TituloCabecalho } from "../style";
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
                    <LinkEstilizado href="/cadastro">
                        <ImagemCabec src={icone} id='icone' />
                    </LinkEstilizado>
                </BotaoCliente>
            </ContainerCabecalho>
            <LinhaEstilizada />
        </CabecHeader>
    );
}
