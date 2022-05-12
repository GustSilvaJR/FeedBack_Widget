import React from 'react'

import {ChatTeardropDots} from "phosphor-react"

export function Widget(){
    return(
        <div className='absolute bottom-3 right-3'>
            <button className='flex items-center bg-brand-500 rounded-full px-3 h-12 group'>
                <ChatTeardropDots className='w-6 h-6 text-white'/>
                <span className='max-w-0 overflow-hidden group-hover:max-w-lg transition-all duration-500 ease-linear'>
                    Feedback
                </span>
            </button>
        </div>       
    )
}