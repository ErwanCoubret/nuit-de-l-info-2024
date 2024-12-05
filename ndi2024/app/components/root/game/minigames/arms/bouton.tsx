import React, { MouseEventHandler } from 'react';

const Bouton = ({ content, className = "", onClick }: { content: string, className?: string, onClick?: MouseEventHandler<HTMLButtonElement> }) => {

    return (
    <button className={`w-36 h-11 text-xl py-2 px-4 bg-white rounded-lg ${className}`} onClick={onClick}>
        {content}
    </button>
    )
}

export default Bouton 