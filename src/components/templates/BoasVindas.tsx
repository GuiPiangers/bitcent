import { useContext } from 'react'
import AutentificacaoContext from '@/data/contexts/AutentificacaoContext'

export default function BoasVindas(){
    const { usuario } = useContext(AutentificacaoContext)

    return(
        <div className="text-3xl font-black">
            Olá <span className="hiddn sm:inline">
                {usuario?.nome?.split(' ')[0]}
            </span>!
        </div>
    )
}