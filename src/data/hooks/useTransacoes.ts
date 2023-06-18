import { useState, useEffect, useContext, useCallback } from 'react'
import Trasacao from "@/logic/core/financas/Transacao";
import servicos from '@/logic/core';
import AutentificacaoContext from '../contexts/AutentificacaoContext';

export default function useTransacoes(){
    const { usuario } = useContext(AutentificacaoContext)
    const [trasacoes, setTransacoes] = useState<Trasacao[]>([])
    const [transacao, setTransacao] = useState<Trasacao | null>(null)

    const buscarTransacoes = useCallback(async function(){
        if(!usuario) return
        const transacoes = await servicos.financas.consultar(usuario)
        setTransacoes(transacoes)
    }, [usuario])

    useEffect(()=>{
        buscarTransacoes()
    }, [buscarTransacoes])


    async function salvar(transacao: Trasacao){
        if(!usuario) return

        await servicos.financas.salvar(transacao, usuario)
        setTransacao(null)
        await buscarTransacoes()
    }
    async function excluir(transacao: Trasacao){
        if(!usuario) return
        await servicos.financas.excluir(transacao, usuario)
        setTransacao(null)
        await buscarTransacoes()
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

