import { useContext } from "react"
import { IconBrandGoogle } from "@tabler/icons-react"
import MenuItem from "./MenuItem"
import AutentificacaoContext from "@/data/contexts/AutentificacaoContext"

export default function Menu() {

  const { loginGoogle } = useContext(AutentificacaoContext)

  return (
    <div>
      <MenuItem onClick={loginGoogle} className="bg-gradient-to-r from-indigo-600 to-cyan-600">
          <div className="flex gap-2 items-center">
              <IconBrandGoogle size={15}/>
              <span>Login</span>
          </div>
      </MenuItem>
    </div>
  )
}
  