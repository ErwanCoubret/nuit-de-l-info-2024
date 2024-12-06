import { useState } from 'react';
import Modal from './modal'; // Remplacez le chemin d'accès par le chemin d'accès réel de votre composant Modal

interface BoutonProps {
    text: string;
    bgColor: string;
    hoverBgColor: string;
    score: number;
    setScore: any;
    answer: any;
    answerText: string;
    help: string;
    currentQuestion: number;
    setCurrentQuestion: any;
}

export default function Bouton({ text, bgColor, hoverBgColor, score, setScore, answer, answerText, help = "", currentQuestion, setCurrentQuestion }: BoutonProps) {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    return (
        <>
            <button
                className={`w-64 px-4 py-2 text-white font-bold rounded-md shadow-md ${bgColor} hover:${hoverBgColor}`}
                onClick={handleClick}
            >
                {text}
            </button>
            {showModal && text === "Besoin d'aide ?" && (
                <Modal showModal={showModal} setShowModal={setShowModal} title="Indice 💡" score={score} setScore={setScore} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} >
                    <div style={{ textAlign: 'justify', lineHeight: '1.6' }}>
                        {help}
                    </div>
                </Modal>
            )}
            {showModal && (text === "Vrai" && answer || text === "Faux" && !answer) && (
                <Modal showModal={showModal} setShowModal={setShowModal} title="Super ! ✅" score={score} setScore={setScore} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion}>
                    <div style={{ textAlign: 'justify', lineHeight: '1.6' }}>
                        {answerText}
                    </div>
                </Modal>
            ) }
            {showModal && (text === "Vrai" && !answer || text === "Faux" && answer) && (
                <Modal showModal={showModal} setShowModal={setShowModal} title="Dommage... ❌" score={score} setScore={setScore} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion}>
                    <div style={{ textAlign: 'justify', lineHeight: '1.6' }}>
                        {answerText}
                    </div>
                </Modal>
            ) }
        </>
    );
}
  