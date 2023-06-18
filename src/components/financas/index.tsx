import { useState } from 'react'
import { IconPlus } from '@tabler/icons-react'

import Trasacao, { transacaoVazia } from "@/logic/core/financas/Transacao";
import Id from '@/logic/core/comum/Id';
import transacoesFalsas from "@/data/constants/transacoesFalsas";
import Cabecalho from "../templates/Cabecalho";
import Conteudo from "../templates/Conteudo";
import Pagina from "../templates/Pagina";
import Lista from "./Lista";
import Sumario from './Sumario';
import Formulario from './Formulario';
import useTransacoes from '@/data/hooks/useTransacoes';
import NaoEncontrado from '../templates/NãoEncontrado';

export default function Financas(){
    const { 
        transacao, trasacoes, selecionar , cancelar, excluir, salvar 
    } = useTransacoes()

    return(
        <Pagina>
            <Cabecalho/>
            <Conteudo className='gap-5'>
                <Sumario transacoes={trasacoes}/>
                <div>
                    <button 
                        className='btn bg-blue-500'
                        onClick={()=> selecionar(transacaoVazia)}
                    >
                        <IconPlus/>    
                        <span>Nova Transação</span>
                    </button>
                </div>
                {transacao ? (
                    <Formulario
                        transacao={transacao}
                        cancelar={cancelar}
                        salvar={salvar}
                        excluir={excluir}
                    />
                ) : trasacoes.length > 0 ?(
                    <Lista 
                        transacoes={trasacoes} 
                        selecionarTransacao={selecionar}
                    />
                ): (
                    <NaoEncontrado>
                        Nenhuma transação encontrada
                    </NaoEncontrado>
                )
                
            }
            </Conteudo>
        </Pagina>
    )
}