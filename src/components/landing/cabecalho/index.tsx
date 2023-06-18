import Area from "../comum/Area";
import Logo from "../comum/Logo";
import Menu from "./Menu";

export default function Cabecalho(){
    return(
        <Area className="bg-black">
            <div className="flex h-20 justify-between items-center">
                <Logo/>
                <Menu/>
            </div>
        </Area>
    )
}