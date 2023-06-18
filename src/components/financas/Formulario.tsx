import { useState } from 'react'
import { IconCheck, IconX, IconTrash } from '@tabler/icons-react'

import Trasacao from "@/logic/core/financas/Transacao";
import Data from "@/logic/utils/Data";
import { TipoTransacao } from '@/logic/core/financas/TipoTransacao';

interface FormularioProps{
    transacao: Trasacao
    cancelar?: ()=> void
    salvar?: (transacao: Trasacao)=> void
    excluir?: (transacao: Trasacao)=> void
}

export default function Formulario(props: FormularioProps){
    const [dados, setDados] = useState<Trasacao>(props.transacao)
    return(
        <div className={`
            flex flex-col border border-zinc-700
            rounded-xl overflow-hidden
        `}>
            <div className="bg-black py-3 px-7 text-zinc-400">
                Formulário
            </div>
            <div className="flex flex-col gap-4 p-4 sm:p-7">
                <input
                    type="text"
                    placeholder="Descrição"
                    className="input"
                    value={dados.descricao ?? ''}
                    onChange={e=> {
                        setDados({
                            ...dados, 
                            descricao: e.target.value
                        })
                    }}
                />
                <input
                    type="number"
                    placeholder="Valor"
                    className="input"
                    value={dados.valor ?? 0}
                    onChange={e=> {
                        setDados({
                            ...dados, 
                            valor: +e.target.value
                        })
                    }}
                />
                <input
                    type="date"
                    placeholder="Data"
                    className="input"
                    value={Data.yymmdd.formatar(dados.data ) ?? new Date()}
                    onChange={e=> {
                        setDados({
                            ...dados, 
                            data: new Date(`${e.target.value} `)
                        })
                    }}
                />
                <div className="flex gap-8">
                    <div className="flex gap-2">
                        <input 
                            type="radio"
                            id="radio-receita"
                            name="radio"
                            value="receita"              
                            checked={dados.tipo === 'receita'}
                            onChange={()=> {
                                setDados({
                                    ...dados, 
                                    tipo: TipoTransacao.RECEITA
                                })
                            }}
                        />
                        <label htmlFor="radio-receita">Receita</label>
                    </div>
                    <div className="flex gap-2">
                        <input 
                            type="radio"
                            id="radio-despesa"
                            name="radio"
                            value="despesa"              
                            checked={dados.tipo === 'despesa'}
                            onChange={()=> {
                                setDados({
                                    ...dados, 
                                    tipo: TipoTransacao.DESPESA
                                })
                            }}
                        />
                        <label htmlFor="radio-despesa">Despesa</label>
                    </div>
                </div>
            </div>
            <div className="flex px-4 sm:px-7 py-4 gap-3 bg-zinc-800">
                <button 
                    className="btn bg-green-500"
                    onClick={()=>{props.salvar?.(dados)}}
                    >
                        <IconCheck/>
                        <span className='hidden sm:inline'>Salvar</span>
                </button>
                <button 
                    className="btn bg-zinc-500"
                    onClick={()=>{props.cancelar?.()}}
                    >
                        <IconX/>
                        <span className='hidden sm:inline'>Cancelar</span>
                </button>
                <span className='flex-1'></span>
                {props.transacao.id && (
                    <button 
                        className="btn bg-red-500"
                        onClick={()=>props.excluir?.(dados)}
                    >
                        <IconTrash/>
                        <span className='hidden sm:inline'>Exluir</span>
                </button>
                )}
            </div>
        </div>
    )
}