export default function Slogan() {
    function renderizarFrase(){
        return(
            <div className={`
                flex flex-col items-center md:items-start
                text-3xl sm:text-4xl lg:text-6xl text-white font-light
            `}>
                <span>Melhor maneira</span>
                <span>de organizar</span>
                <span>seu dineiro</span>
            </div>
        )
    }
    return (
      <div className="flex flex-col justify-center gap-5">
        {renderizarFrase()}
        <div className="text-sm lg:text-lg font-thin text-zinc-500 text-center sm:text-left">
            Plataforma financeira que simplifica usa vida!
        </div>
      </div>
    )
  }
  