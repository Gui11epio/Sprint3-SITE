import { CabecHeader } from "../style";


export default function Cabecalho(){

    return(
        <CabecHeader>
            
            
            {/* <div className="cabecario">
            </div> */}
            <h1 id="cabecario">HELPY SEGUROS</h1>

            <li className="botao">
                <button>
                    <a href="#">Página Principal</a>
                </button>
                
                <button>
                    <a href="#">HELPY</a>
                </button>
                
                <button>
                    <a href="#">Área do cliente</a>
                </button>
            </li >
            <hr />
               
        </CabecHeader>


    )
}