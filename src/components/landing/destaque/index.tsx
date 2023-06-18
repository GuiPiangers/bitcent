import Area from "../comum/Area";
import ImagemResponsiva from "../comum/ImagemResponsiva";
import Slogan from "./Slogan";
import princiapl from "../../../../public/principal.jpg"


export default function Destaque(){
    return(
        <Area>
            <div className={`
                flex items-center justify-around
                h-[500px]
            `}>                
                <Slogan/>
                <ImagemResponsiva 
                    imagem={princiapl}
                    clasName="rotate-3 hidden md:inline"
                />
            </div>
        </Area>
    )
}