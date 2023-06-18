import Autentificacao from "../firebase/auth/Autentificacao";
import ServicosFinancas from "./financas/ServicosFinancas";

class Servicos{
    get financas(){
        return new ServicosFinancas()
    }
    get autenticacao() { return new Autentificacao() }
}

const servicos = new Servicos()
export default servicos