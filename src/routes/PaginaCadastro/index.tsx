import { CorpoPrincipal, FormCadastro } from "../../style";

export default function PaginaCadastro() {
    return (
        <CorpoPrincipal>
            <FormCadastro>
                <h1>USUÁRIO</h1>

                <label>
                    Nome:
                    <input type="text" name="nome" />
                </label>

            </FormCadastro>
        </CorpoPrincipal>
    )
}