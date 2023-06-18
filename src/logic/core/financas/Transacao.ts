import { TipoTransacao } from "./TipoTransacao"

export default interface Trasacao{
    id?: string
    descricao: string
    valor: number
    data: Date
    tipo: TipoTransacao
}

export const transacaoVazia: Trasacao = {
    descricao: '',
    valor: 0,
    data: new Date(),
    tipo: TipoTransacao.DESPESA,
}