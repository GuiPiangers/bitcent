import { useContext } from "react"
import Financas from "@/components/financas";
import Landing from "@/components/landing";
import AutentificacaoContext from "@/data/contexts/AutentificacaoContext";
import Carregando from "@/components/templates/Carregando";
// import Pagina from "@/components/templates/Pagina";

export default function Home() {
  const { usuario, carregando } = useContext(AutentificacaoContext)
  if(carregando) return <Carregando/>
  return usuario ? <Financas/>:<Landing/>
}
