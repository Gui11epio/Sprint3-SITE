import { BodyMembros } from "../../style";
import gui from '../../assets/guilherme.jpeg'
import fe from '../../assets/feernando.jpg'
import mateus from '../../assets/Mateus.jpg'

export default function PaginaMembros(){

    return(
        <BodyMembros>
            <div className="participante">
                <img src= {gui} alt="Imagem da Pessoa 1" />
                <h2>Nome: Guilherme Camasmie Laiber De Jesus</h2>
                <p>RM: 554894</p>
            </div>

            <div className="participante">
                <img src= {mateus} alt="Imagem da Pessoa 2"/>
                <h2>Nome: Mateus Nobrega</h2>
                <p>RM: 557223 </p>
            </div>

            <div className="participante" >
                <img src= {fe} alt="Imagem da Pessoa 3"/>
                <h2>Nome: Fernando Fernandes Prado </h2>
                <p>RM:  557982 </p>
            </div> 
        </BodyMembros>
    )
    
}