import {IconBrandYoutube, IconBrandInstagram, IconBrandLinkedin, IconBrandGithub} from '@tabler/icons-react'
import RedeSocial from "./RedeSocial";

export default function RedesSociais(){
    
    return(
        <div className='flex'>
            <RedeSocial icone={<IconBrandGithub/>} url="https://github.com/GuiPiangers/bitcent" />
            <RedeSocial icone={<IconBrandLinkedin/>} url="https://www.linkedin.com/in/guilherme-piangers-431a1a27b/" />
        </div>
    )

}