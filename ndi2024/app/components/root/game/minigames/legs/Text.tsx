import React from 'react';
import Question from './Question';
import Reponse from './Reponse';

const Text = () => {
  return (
    <>
        <div className='bg-cyan-300'>
            <Question questionNumber={1} questionText='L’océan Atlantique, comme une jambe humaine exposée au froid, peut souffrir de courants glacials qui provoquent des ________ climatiques drastiques.' />
            <Reponse option1='changements' option2='réchauffements' option3='montagnes' option4='hurlements' correctAnswer='changements' />
        </div>
        <div className='bg-cyan-300'>
            <Question questionNumber={2} questionText='Tout comme une jambe blessée peut limiter les déplacements, la pollution des océans réduit la ______ marine.' />
            <Reponse option1='brise' option2='gothique' option3='végétation' option4='biodiversité' correctAnswer='biodiversité' />
        </div>
        <div className='bg-cyan-300'>
            <Question questionNumber={3} questionText='Les _____ montantes, semblables à des muscles tendus, peuvent entraîner des catastrophes naturelles si elles sont amplifiées par le réchauffement climatique.' />
            <Reponse option1='chaussures' option2='marches' option3='marées' option4='vagues' correctAnswer='marées' />
        </div>
        <div className='bg-cyan-300'>
            <Question questionNumber={4} questionText='Les _____ montantes, semblables à des muscles tendus, peuvent entraîner des catastrophes naturelles si elles sont amplifiées par le réchauffement climatique.' />
            <Reponse option1='cheveux' option2='chaussures' option3='jambes' option4='classements' correctAnswer='jambes' />
        </div>
    </>
  )
};

export default Text;
