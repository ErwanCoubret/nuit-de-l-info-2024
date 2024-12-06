import Bouton from "./Bouton";


export default function Question({ number, text, score, setScore, answer, answerText, help, currentQuestion, setCurrentQuestion } : { number: number, text: string, score: number, setScore: any, answer: boolean, answerText: string, help: string, currentQuestion: number, setCurrentQuestion: any }) {

    return (
        <>
            <div className="p-10 backdrop:mx-auto bg-white rounded-xl shadow-md space-y-4 w-full lg:w-1/2 mx-auto">
                <h1 className="text-2xl font-bold text-gray-900">
                    Question {number}
                </h1>
                <p className="text-gray-700 text-md">
                    {text}
                </p>
                <div className="flex gap-5 justify-center">
                    <Bouton text="Vrai" bgColor="bg-green-500" hoverBgColor="bg-green-600 mt-5" score={score} setScore={setScore} answer={answer} answerText={answerText} help={help} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion}/>
                    <Bouton text="Faux" bgColor="bg-red-500" hoverBgColor="bg-red-600 mt-5" score={score} setScore={setScore} answer={answer} answerText={answerText} help={help} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion}/>
                </div>
                <div className="flex justify-center">
                    <Bouton text="Besoin d'aide ?" bgColor="bg-gray-500" hoverBgColor="bg-gray-600" score={score} setScore={setScore} answer={answer} answerText={answerText} help={help} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion}/>
                </div>
            </div>

        </>
    );
}