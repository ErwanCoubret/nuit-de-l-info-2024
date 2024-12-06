"use client";
import { useEffect, useState } from "react";
import QuestionBar from "./QuestionBar";
import Bar from "./Bar";
import Image from "next/image";

function GoodEnd() {
	useEffect(() => {
		window.localStorage.setItem("chestFlag", "1");
	}, []);

	return (
		<div className="w-full flex flex-col items-center justify-center text-center bg-white p-5 rounded-lg">
			<p className="text-2xl font-bold w-3/4 mb-4">
				Félicitations! Vous avez réussi à rester en positif ! 🥳🎉
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

function BadEnd() {
	return (
		<div className="w-full flex flex-col items-center justify-center text-center bg-white p-5 rounded-lg">
			<p className="text-2xl font-bold w-3/4 mb-4">
				Dommage! Vous avez n'avez pas réussi à rester en positif... 😢
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

export default function QuizBar() {
	const questions = [
		"Votre meilleur ami, après une longue journée, vous propose de fumer avec lui.",
		"Voulez vous effectuer des efforts physiques régulièrement ?",
		"Vous décidez de votre futur lieu de vie...",
	];

	const answerbooleans = [false, true, true];
	const answertextgood = [
		"Vous préservez vos poumons : les récifs coralliens ne sont pas abimés.",
		"Vos poumons se renforcent. Les océans s'éclaircissent",
		"Vos poumons se purifient. Les êtres vivants marins vivent une vie heureuse !",
	];

	const answertextbad = [
		"Vos poumons se détériorent : les récifs coralliens blanchissent petit à petit…",
		"Vos poumons s'affaiblissent. Les débris s'accumulent dans l'océan…",
		"Vos poumons deviennent impurs et s'assombrissent. Les être vivants marins commencent à développer des mutations…",
	];

	const [currentQuestion, setCurrentQuestion] = useState(1);
	const [score, setScore] = useState(0);

	return (
		<section className="w-full min-h-screen flex flex-col items-center justify-center bg-primary-500">
			<div className="w-full flex flex-col justify-center items-center max-w-3xl p-5">
				<Image
					src={"/Poumon.png"}
					alt="Brain"
					width={384}
					height={384}
					objectFit="absolute w-96 h-96 mx-auto w-full"
				/>
				{currentQuestion < 4 && (
					<QuestionBar
						number={currentQuestion}
						text={questions[currentQuestion - 1]}
						score={score}
						setScore={setScore}
						answer={answerbooleans[currentQuestion - 1]}
						answerText={answertextgood[currentQuestion - 1]}
						help={answertextbad[currentQuestion - 1]}
						currentQuestion={currentQuestion}
						setCurrentQuestion={setCurrentQuestion}
					/>
				)}
				{/* Fin du quiz */}
				{currentQuestion === 4 && score >= 0 && <GoodEnd />}
				{/* Échec au quiz */}
				{currentQuestion === 4 && score < 0 && <BadEnd />}
				<div className="w-full max-w-3xl mt-8">
					<Bar score={score} maxScore={15} />
				</div>
			</div>
		</section>
	);
}
