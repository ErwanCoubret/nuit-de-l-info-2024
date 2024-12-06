import React from 'react';

type Props = {
    option1: string;
    option2: string;
    option3: string;
    option4: string;
    correctAnswer: string;
};

const Reponse = ({ option1, option2, option3, option4, correctAnswer }: Props) => {
    return (
        <>
            <div className='sm:hidden flex gap-4 justify-center mt-4'>
                <div className='flex flex-wrap'>
                    <button className='bg-white border-10 py-2 px-4 border-black rounded-xl'>
                        {option1}
                    </button>
                    <button className='bg-white border-10 py-2 px-4 border-black rounded-xl'>
                        {option2}
                    </button>
                </div>
                <div className='flex flex-wrap'>
                    <button className='bg-white border-10 py-2 px-4 border-black rounded-xl'>
                        {option3}
                    </button>
                    <button className='bg-white border-10 py-2 px-4 border-black rounded-xl'>
                        {option4}
                    </button>
                </div>
            </div>

            <div className='hidden sm:flex gap-4 mt-4'>
                <button className='bg-white border-10 py-2 px-4 border-black rounded-xl'>
                    {option1}
                </button>
                <button className='bg-white border-10 py-2 px-4 border-black rounded-xl'>
                    {option2}
                </button>
                <button className='bg-white border-10 py-2 px-4 border-black rounded-xl'>
                    {option3}
                </button>
                <button className='bg-white border-10 py-2 px-4 border-black rounded-xl'>
                    {option4}
                </button>
            </div>
        </>
    );
};

export default Reponse;
