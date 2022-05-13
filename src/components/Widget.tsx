import React from 'react'
import {ChatTeardropDots} from "phosphor-react"
import {Popover} from '@headlessui/react'
import { WidgetLabel } from './WidgetLabel'



export function Widget(){   
    return(
        <Popover className='absolute bottom-2 right-2 md:bottom-8 md:right-8  flex flex-col items-end'>        
            <Popover.Panel>
                <WidgetLabel/>
            </Popover.Panel>

            <Popover.Button>
                <button className='flex items-center bg-brand-500 rounded-full px-3 h-12 group'>
                    <ChatTeardropDots className='w-6 h-6 text-white'/>
                    <span className='max-w-0 overflow-hidden group-hover:max-w-lg transition-all duration-500 ease-linear'>
                    <span className='ml-2'></span>Feedback</span>
                </button>
            </Popover.Button>
        </Popover>       
    )
}