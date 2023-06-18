import { IconCash, IconCreditCard, IconArrowsDoubleSwNe } from "@tabler/icons-react"
import Trasacao from "@/logic/core/financas/Transacao";
import { TipoTransacao } from "@/logic/core/financas/TipoTransacao";
import SumarioItem from "./SumarioItem";

interface SumarioProps{
    transacoes: Trasacao[]
    className?: string
}

export default function Sumario(props: SumarioProps){

    const totalizar = (total: number, receita: Trasacao) => total + receita.valor

    const receitas = props.transacoes
        .filter(receita => receita.tipo === TipoTransacao.RECEITA)
        .reduce(totalizar, 0)

    const despesas = props.transacoes
        .filter(receita => receita.tipo === TipoTransacao.DESPESA)
        .reduce(totalizar, 0)

    const total = receitas - despesas
    return(
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <SumarioItem 
                titulo="Receita" 
                valor={receitas}
                icone={<IconCash/>}
                inconeClassName="text-green-500"
            />
            <SumarioItem 
                titulo="Despesas" 
                valor={despesas}
                icone={<IconCreditCard/>}
                inconeClassName="text-red-500"
            />
            <SumarioItem 
                titulo="Total" 
                valor={total}
                icone={<IconArrowsDoubleSwNe/>}
                inconeClassName="text-yellow-500"
                valorClassName={total > 0 ? 'text-green-500' : total < 0 ? 'text-red-500' : ''}
            />
        </div>
    )
}