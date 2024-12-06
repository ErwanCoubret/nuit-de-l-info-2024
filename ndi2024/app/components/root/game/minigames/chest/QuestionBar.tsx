import { useState, useEffect } from "react";
import BoutonBar from "./BoutonBar";

export default function QuestionBar({
	number,
	text,
	score,
	setScore,
	answer,
	answerText,
	help,
	currentQuestion,
	setCurrentQuestion,
}: {
	number: number;
	text: string;
	score: number;
	setScore: (value: number) => void;
	answer: boolean;
	answerText: string;
	help: string;
	currentQuestion: number;
	setCurrentQuestion: (value: number) => void;
}) {
	const [text1, setText1] = useState("Oui");
	const [text2, setText2] = useState("Non");

	useEffect(() => {
		if (currentQuestion === 3) {
			setText1("Campagne ensoleillée");
			setText2("Ville Industrielle");
		} else {
			setText1("Oui");
			setText2("Non");
		}
	}, [currentQuestion]);

	return (
		<>
			<div className="p-10 backdrop:mx-auto bg-white rounded-xl shadow-md space-y-4 w-full lg:w-1/2 mx-auto">
				<h1 className="text-2xl font-bold text-gray-900">
					Question {number}
				</h1>
				<p className="text-gray-700 text-md">{text}</p>
				<div className="flex gap-5 justify-center">
					<BoutonBar
						text={text1}
						bgColor="bg-blue-500"
						hoverBgColor="bg-blue-600 mt-5"
						score={score}
						setScore={setScore}
						answer={answer}
						answerText={answerText}
						help={help}
						currentQuestion={currentQuestion}
						setCurrentQuestion={setCurrentQuestion}
					/>
					<BoutonBar
						text={text2}
						bgColor="bg-blue-500"
						hoverBgColor="bg-blue-600 mt-5"
						score={score}
						setScore={setScore}
						answer={answer}
						answerText={answerText}
						help={help}
						currentQuestion={currentQuestion}
						setCurrentQuestion={setCurrentQuestion}
					/>
				</div>
			</div>
		</>
	);
}
