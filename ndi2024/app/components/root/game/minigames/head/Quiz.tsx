"use client";
import { useEffect, useState } from "react";
import Question from "./Question";

function GoodEnd({ score }: { score: number }) {
	useEffect(() => {
		window.localStorage.setItem("headFlag", "1");
	}, []);

	return (
		<div className="w-full flex flex-col items-center justify-center text-center bg-white p-5 rounded-lg">
			<p className="text-2xl font-bold w-3/4 mb-4">
				Félicitations! Vous avez obtenu {score} points sur 6
			</p>
			<button
				className="bg-green-500 text-white font-bold py-2 px-4 rounded"
				onClick={() => {
					window.location.href = "/game/main";
				}}
			>
				Continuer ➜
			</button>
		</div>
	);
}

function BadEnd({ score }: { score: number }) {
	return (
		<div className="w-full flex flex-col items-center justify-center text-center bg-white p-5 rounded-lg">
			<p className="text-2xl font-bold w-3/4 mb-4">
				Dommage! Vous avez obtenu {score} points sur 6. Essayez à
				nouveau.
			</p>
			<button
				className="bg-red-500 text-white font-bold py-2 px-4 rounded"
				onClick={() => {
					window.location.reload();
				}}
			>
				Rejouer !
			</button>
		</div>
	);
}

export default function Quiz() {
	const questions = [
		"Les océans produisent environ 30 % de l'oxygène que le cerveau humain consomme.",
		"Les coraux émettent des substances qui pourraient un jour être utilisées pour soigner des lésions cérébrales.",
		"Les marées océaniques, avec leurs cycles réguliers, peuvent être comparées au rythme circadien du corps humain.",
		"La pollution océanique n'affecte pas la santé marine de manière similaire à la façon dont les radicaux libres affectent le corps humain",
		"Les organismes bioluminescents dans l'océan qui émettent de la lumière peuvent être comparés aux impulsions électriques du cerveau qui transmettent des signaux, bien que ces impulsions soient générées par des réactions chimiques, comme la bioluminescence.",
		"Les fractures des plaques tectoniques sous-marines, qui libèrent de l'énergie, peuvent être comparées aux ruptures des connexions neuronales après un traumatisme cérébral",
	];

	const answerbooleans = [false, true, true, false, false, false];
	const answertext = [
		"Les océans produisent plus de 50 % de l'oxygène que nous respirons grâce au phytoplancton...",
		"Les coraux, et plus largement les organismes marins, produisent des substances bioactives...",
		"Oui, les marées océaniques peuvent être comparées au rythme circadien du corps humain...",
		"Les océans sont pollués par des substances comme les plastiques...",
		"Les impulsions électriques du cerveau ne sont pas générées par des réactions chimiques...",
		"Les fractures des plaques tectoniques libèrent de l'énergie...",
	];

	const help = [
		"Pensez à certains petits végétaux marins !",
		"Les substances bioactives sont des molécules tirées d'une source naturelle biologique...",
		'Le rythme circadien est un cycle biologique de 24 heures régulé par une "horloge interne"...',
		"Les radicaux libres sont des molécules instables...",
		"La bioluminescence est la production et l'émission de lumière par un organisme vivant...",
		'La Terre n\'est pas un bloc uniforme, mais est constituée de plusieurs "morceaux"...',
	];

	const [currentQuestion, setCurrentQuestion] = useState(1);
	const [score, setScore] = useState(0);

	return (
		<section className="w-full min-h-screen flex flex-col items-center justify-center bg-primary-500">
			<div className="w-full max-w-3xl">
				{/* Affichage de la question */}
				{currentQuestion < 7 && (
					<Question
						number={currentQuestion}
						text={questions[currentQuestion - 1]}
						score={score}
						setScore={setScore}
						answer={answerbooleans[currentQuestion - 1]}
						answerText={answertext[currentQuestion - 1]}
						help={help[currentQuestion - 1]}
						currentQuestion={currentQuestion}
						setCurrentQuestion={setCurrentQuestion}
					/>
				)}
				{/* Fin du quiz */}
				{currentQuestion === 7 && score >= 3 && (
					<GoodEnd score={score} />
				)}
				{/* Échec au quiz */}
				{currentQuestion === 7 && score < 3 && <BadEnd score={score} />}
			</div>
		</section>
	);
}
