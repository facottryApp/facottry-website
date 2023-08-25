import React from 'react'
import { BsPlusCircleFill } from 'react-icons/bs'
import RadioButton from "./RadioButton"

type Props = {
    title: string,
    themes: {
        name: string,
        desc: string,
        image: any;
    }[],
}

export const Accordion = ({title, themes}:Props) => {
    return (
        <section className="w-full">
            <details open className="bg-white p-4 rounded-xl shadow-md group max-h-[56px] overflow-x-hidden max-w-screen-lg open:!max-h-[80vh] transition-[max-height] duration-500 dark:text-white dark:bg-darkblue300">
                <summary
                    className="flex items-center justify-between outline-none cursor-pointer font-semibold marker:text-transparent group-open:before:rotate-90  before:origin-center relative before:w-[18px] before:h-[18px] before:transition-transform before:duration-200 before:-left-1 before:top-2/4 before:-translate-y-2/4 before:absolute before:bg-no-repeat before:bg-[length:18px_18px] before:bg-center "
                >
                    <p>{title}</p>
                    <BsPlusCircleFill />
                </summary>

                <hr className="my-2 scale-x-150" />

                <div className="text-sm -m-4 -mt-2 p-4 bg-gray-50 dark:text-white dark:bg-darkblue300">
                    <RadioButton themes={themes}/>
                </div>
            </details>
        </section>
    )
}
