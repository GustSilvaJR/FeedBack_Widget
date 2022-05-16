import { CloseButton } from "./CloseButton";

export function WidgetLabel(){
    return(
        <div className="relative bg-zinc-700 flex flex-col rounded-2xl p-4 mb-4 items-center shadow-lg  w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>
                <CloseButton/>
            </header>

            <footer>
                <span>Feito com ♥ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br" >Rocketseat</a></span>
            </footer>
        </div>
    )
}