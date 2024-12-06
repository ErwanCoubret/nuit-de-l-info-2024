import BoutonBar from "./BoutonBar";


export default function QuestionBar({ number, text, score, setScore, answer, answerText, help, currentQuestion, setCurrentQuestion } : { number: number, text: string, score: number, setScore: any, answer: boolean, answerText: string, help: string, currentQuestion: number, setCurrentQuestion: any }) {

    var text1 = "Oui";
    var text2 = "Non";
    if (currentQuestion == 3) {
        text1 = "Campagne ensoleillée";
        text2 = "Ville Industrielle";
    }
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
                    <BoutonBar text={text1} bgColor="bg-blue-500" hoverBgColor="bg-blue-600 mt-5" score={score} setScore={setScore} answer={answer} answerText={answerText} help={help} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion}/>
                    <BoutonBar text={text2} bgColor="bg-blue-500" hoverBgColor="bg-blue-600 mt-5" score={score} setScore={setScore} answer={answer} answerText={answerText} help={help} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion}/>
                </div>
            </div>

        </>
    );
}