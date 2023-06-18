import {IconBrandYoutube, IconBrandInstagram, IconBrandFacebook, IconBrandGithub} from '@tabler/icons-react'
import RedeSocial from "./RedeSocial";

export default function RedesSociais(){
    
    return(
        <div className='flex'>
            <RedeSocial icone={<IconBrandYoutube/>} url="/" />
            <RedeSocial icone={<IconBrandInstagram/>} url="/" />
            <RedeSocial icone={<IconBrandFacebook/>} url="/" />
            <RedeSocial icone={<IconBrandGithub/>} url="/" />
        </div>
    )

}