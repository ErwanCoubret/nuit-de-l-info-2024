"use client";

import { useEffect, useState } from "react";
import Question from "./Question";
import Reponse from "./Reponse";

const ModalENd = ({  resultMessage } :
    { resultMessage: string }) => {

    useEffect(() => {
        if (resultMessage.includes("Félicitations")) {
            window.localStorage.setItem("legsFlag", "1");
        }
    }, []);

    return (
        <div className="mt-8 bg-white text-black p-4 rounded-md shadow-md text-center mx-8">
					<p>{resultMessage}</p>
					{!resultMessage.includes("Félicitations") ? (
						<button
							onClick={() => window.location.reload()}
							className="mt-4 bg-red-500 text-white font-bold py-2 px-4 rounded"
						>
							Rejouer
						</button>
					) : (
						<button
							onClick={() =>
								(window.location.href = "/game/main")
							}
							className="mt-4 bg-green-500 text-white font-bold py-2 px-4 rounded"
						>
							Continuer
						</button>
					)}
				</div>
    )
}

const Text = () => {
	const [ans1, setAns1] = useState("");
	const [ans2, setAns2] = useState("");
	const [ans3, setAns3] = useState("");
	const [ans4, setAns4] = useState("");
	const [resultMessage, setResultMessage] = useState("");

	const correctAnswers = {
		1: "changements",
		2: "biodiversité",
		3: "marées",
		4: "jambes",
	};

	const calculateScore = () => {
		let score = 0;
		if (ans1 === correctAnswers[1]) score++;
		if (ans2 === correctAnswers[2]) score++;
		if (ans3 === correctAnswers[3]) score++;
		if (ans4 === correctAnswers[4]) score++;
		return score;
	};

	const handleButtonClick = () => {
		const score = calculateScore();
		if (score >= 3) {
			setResultMessage(
				`🎉 Félicitations ! Vous avez obtenu ${score} bonnes réponses sur 4.`
			);
		} else {
			setResultMessage(
				`😞 Dommage ! Vous avez obtenu ${score} bonnes réponses sur 4. Essayez à nouveau.`
			);
		}
	};

	const allAnswersSelected = ans1 && ans2 && ans3 && ans4;

	return (
		<div className="relative min-h-screen flex flex-col items-center justify-center bg-primary-800 py-20">
			<div className="flex flex-col gap-8 w-4/5 lg:w-1/2">
				<div className="bg-primary-300 w-full px-8 pt-2 pb-8 rounded-md">
					<Question
						questionNumber={1}
						questionText="L’océan Atlantique, comme une jambe humaine exposée au froid, peut souffrir de courants glacials qui provoquent des ________ climatiques drastiques."
					/>
					<Reponse
						ans={ans1}
						setAns={setAns1}
						option1="changements"
						option2="réchauffements"
						option3="montagnes"
						option4="hurlements"
						correctAnswer="changements"
					/>
				</div>
				<div className="bg-primary-300 w-full px-8 pt-2 pb-8 rounded-md">
					<Question
						questionNumber={2}
						questionText="Tout comme une jambe blessée peut limiter les déplacements, la pollution des océans réduit la ______ marine."
					/>
					<Reponse
						ans={ans2}
						setAns={setAns2}
						option1="brise"
						option2="gothique"
						option3="végétation"
						option4="biodiversité"
						correctAnswer="biodiversité"
					/>
				</div>
				<div className="bg-primary-300 w-full px-8 pt-2 pb-8 rounded-md">
					<Question
						questionNumber={3}
						questionText="Les _____ montantes, semblables à des muscles tendus, peuvent entraîner des catastrophes naturelles si elles sont amplifiées par le réchauffement climatique."
					/>
					<Reponse
						ans={ans3}
						setAns={setAns3}
						option1="chaussures"
						option2="marches"
						option3="marées"
						option4="vagues"
						correctAnswer="marées"
					/>
				</div>
				<div className="bg-primary-300 w-full px-8 pt-2 pb-8 rounded-md">
					<Question
						questionNumber={4}
						questionText="Les _____ montantes, semblables à des muscles tendus, peuvent entraîner des catastrophes naturelles si elles sont amplifiées par le réchauffement climatique."
					/>
					<Reponse
						ans={ans4}
						setAns={setAns4}
						option1="cheveux"
						option2="chaussures"
						option3="jambes"
						option4="classements"
						correctAnswer="jambes"
					/>
				</div>
			</div>

			{/* Bouton pour vérifier les résultats */}
			{allAnswersSelected && (
				<div className="mt-8">
					<button
						onClick={handleButtonClick}
						className="bg-primary-500 text-white font-bold py-2 px-4 rounded"
					>
						Vérifier les réponses
					</button>
				</div>
			)}

			{/* Message des résultats */}
			{resultMessage && (
                <ModalENd resultMessage={resultMessage} />
			)}
		</div>
	);
};

export default Text;
