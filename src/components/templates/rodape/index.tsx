import Link from "next/link";
import Area from "../../landing/comum/Area";
import Logo from "../../landing/comum/Logo";
import RedesSociais from "./RedesSociais";

export default function Rodape(){
    return(
        <Area className="bg-black py-8">
            <div className="flex flex-col items-center md:items-start gap-5">
                <Logo/>
                <div className="mt-3 text-zinc-400 text-center md:text-left">
                    <div>Plataforma financeira</div>
                    <div className="flex gap-1.5">
                        que
                        <span className={`
                            font-black text-transparent 
                            bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600
                        `}>simplifica</span>
                        sua vida
                    </div>
                </div>

                <Link href='' className={`
                    flex justify-center items-center cursor-pointer
                    text-zinc-300 p-4 rounded-md h-9
                    bg-gradient-to-r from-indigo-600 to-cyan-600
                `}>
                    Meu portfólio
                </Link>
                <RedesSociais/>
            </div>
        </Area>
    )
}