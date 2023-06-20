import Pagina from "../templates/Pagina";
import Cabecalho from "./cabecalho";
import Depoimentos from "./depoimentos";
import Destaque from "./destaque";
import Rodape from "../templates/rodape";
import Vantagens from "./vantagens";

export default function Landing(){
    return(
        <Pagina externa>
            <Cabecalho/>
            <Destaque/>
            <Vantagens/>
            <Depoimentos/>
        </Pagina>
    )
}