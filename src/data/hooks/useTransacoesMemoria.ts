import { useState, useEffect } from 'react'
import Trasacao from "@/logic/core/financas/Transacao";
import transacoesFalsas from "@/data/constants/transacoesFalsas";
import Id from '@/logic/core/comum/Id';

export default function useTransacoes(){
    const [trasacoes, setTransacoes] = useState<Trasacao[]>([])
    const [transacao, setTransacao] = useState<Trasacao | null>(null)

    useEffect(buscarTransacoes, [])

    function buscarTransacoes(){
        setTransacoes(transacoesFalsas)
    }

    function salvar(transacao: Trasacao){
        const outras = trasacoes.filter(t => t.id != transacao.id)
        setTransacoes([
            ...outras,
            {...transacao, id: transacao.id ?? Id.novo()}
        ])
        setTransacao(null)
    }
    function excluir(transacao: Trasacao){
        const outras = trasacoes.filter(t => t.id != transacao.id)
        setTransacoes(outras)
        setTransacao(null)
    }

    function cancelar(){
        setTransacao(null)
    }

    function selecionar(transacao: Trasacao){
        setTransacao(transacao)
    }

    return{
        trasacoes,
        transacao,
        selecionar, 
        salvar,
        excluir,
        cancelar,
    }
}

