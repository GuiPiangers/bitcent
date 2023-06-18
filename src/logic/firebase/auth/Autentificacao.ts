import Usuario from "@/logic/core/usuario/Usuario";
import { 
    User, 
    getAuth, 
    signInWithPopup, 
    Auth, 
    GoogleAuthProvider, 
    signOut,
    onIdTokenChanged,
} from 'firebase/auth'
import { app } from "../config/app";
import { type } from "os";

type MonitorarUsuario = (usuario: Usuario | null) => void
export type CancelarMonitoramento = () => void

export default class Autentificacao{
    private _auth:Auth

    constructor(){
        this._auth = getAuth(app)
    }

    async loginGoogle(): Promise<Usuario | null>{
        const resp = await signInWithPopup(this._auth, new GoogleAuthProvider()) 
        return this._converterParaUsuario(resp.user)
    }
    async logout(): Promise<void>{
        await signOut(this._auth)
    }

    monitorar(notificar: MonitorarUsuario): CancelarMonitoramento{
        return onIdTokenChanged(this._auth, async(usuarioFirebase) => {
            const usuario = this._converterParaUsuario(usuarioFirebase)
            notificar(usuario)
        })
    }

    private _converterParaUsuario(usuarioFirebase: User | null): Usuario | null{
        if(!usuarioFirebase?.email) return null
        const nomeAlternativo = usuarioFirebase.email!.split('@')[0]

        return {
            id: usuarioFirebase.uid,
            nome: usuarioFirebase.displayName ?? nomeAlternativo,
            email: usuarioFirebase.email,
        }

    }
}