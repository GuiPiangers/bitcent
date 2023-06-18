import { useContext } from 'react'
import AutentificacaoContext from '@/data/contexts/AutentificacaoContext';


export default function InfoUsuario(){

    const { usuario ,logout } = useContext(AutentificacaoContext)


    return(
        <div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={logout}
        >
            <div className="flex flex-col select-none text-right">
                <span className="text-sm font-bold text-zinc-200">
                    {usuario?.nome}
                </span>
                <span className="text-xs text-zinc-400">
                    {usuario?.email}
                </span>
            </div>
        </div>
    )
}