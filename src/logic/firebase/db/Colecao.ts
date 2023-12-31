import {
    getFirestore,
    doc,
    setDoc,
    OrderByDirection,
    collection,
    QueryConstraint,
    orderBy,
    getDocs,
    getDoc,
    deleteDoc,
    query,
    DocumentSnapshot,
    DocumentData
} from 'firebase/firestore'
import { app } from '../config/app'
import Id from '@/logic/core/comum/Id'


export default class Colecao{
    
    async salvar(caminho: string, entidade: any): Promise<any>{
        const db = getFirestore(app)
        const idFinal = entidade.id ?? Id.novo()
        const docRef = doc(db, caminho, idFinal)
        await setDoc(docRef, entidade)
    
        return{
            ...entidade,
            id: entidade.id ?? idFinal
        }
    }

    async consultar(caminho: string, ordenarPor?: string, direcao?: OrderByDirection): Promise<any>{
        const db = getFirestore(app)
        const colecaoRef = collection(db, caminho)
        const filtro: QueryConstraint[] = []
        const ordenacao = ordenarPor ? [orderBy(ordenarPor, direcao)] : []
        const consulta = query(colecaoRef, ...filtro, ...ordenacao)
        const resultado = await getDocs(consulta)
        
        return resultado.docs.map(this._converterDoFirebase) ?? []
    }

    async excluir(caminho: string, id?: string): Promise<boolean>{
        if(!id) return false

        const db = getFirestore(app)
        const docRef = doc(db, caminho, id)
        const itemNoBanco = await getDoc(docRef)
        if(!itemNoBanco.exists()) return false
        await deleteDoc(docRef)
        return true
    }

    private _converterDoFirebase(snapshot: DocumentSnapshot<DocumentData>){
        const entidade: any = { ...snapshot.data(), id: snapshot.id }
        if (!entidade) return entidade
        return Object.keys(entidade).reduce((obj: any, atributo: string) => {
            const valor: any = entidade[atributo]
            return { ...obj, [atributo]: valor.toDate?.() ?? valor }
        }, {})
    }
}