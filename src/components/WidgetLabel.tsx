import { CloseButton } from "./CloseButton";

import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { useState } from "react";

const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto',
        },
    },

    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada',
        },
    },

    THOUGHT: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de um balão de pensamento',
        },
    },

};

type feedbackTypes = keyof typeof feedbackTypes /*Setando um tipo novo usando o TypeScript. Isso a partir da Key de cada opção que eu tneho: BUG, IDEA e THOUGHT
                                                  Isso tudo a partir do typescript                          */
export function WidgetLabel() {

    const [getFeedBackType, setFeedbackType] = useState<feedbackTypes | null>(null) //Seto que o useState só pode receber elementos do tipo feedbackTypes ou null

    return (
        <div className="relative bg-zinc-700 flex flex-col rounded-2xl p-4 mb-4 items-center shadow-lg  w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>
                <CloseButton />
            </header>

            {!getFeedBackType ? (
                <div className="flex py-8 gap-2 w-full">

                    {Object.entries(feedbackTypes).map(([key, value]) => {
                        return (
                            <button
                                key={key}
                                className='flex flex-1 flex-col rounded-lg bg-zinc-800 py-5 w-24 gap-2 items-center border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none'
                                type='button'
                                onClick={() => { setFeedbackType(key as feedbackTypes) }}
                            >

                                <img src={value.image.source} alt={value.image.alt} />
                                <span>{value.title}</span>
                                <span>State: {getFeedBackType}</span>
                            </button>
                        );
                    })}

                </div>
            ) : (
                    <p>Hello World!</p>
                )
            }

            <footer className="text-xs text-neutral-400">
                <span>Feito com ♥ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br" >Rocketseat</a></span>
            </footer>
        </div>
    )
}