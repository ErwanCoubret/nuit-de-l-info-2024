import React, { useState } from "react";

type Props = {
	ans: string;
	setAns: (ans: string) => void;
	option1: string;
	option2: string;
	option3: string;
	option4: string;
	correctAnswer: string;
};

const Reponse = ({
	option1,
	option2,
	option3,
	option4,
	correctAnswer,
	setAns,
}: Props) => {
	const [selectedOption, setSelectedOption] = useState<string | null>(null);

	const handleClick = (option: string) => {
		if (selectedOption !== null) return;
		setSelectedOption(option);
		setAns(option); // Met à jour la réponse
	};

	const getButtonStyle = (option: string) => {
		if (selectedOption === null) return "bg-white";
		if (option === correctAnswer) return selectedOption === option ? "bg-green-500" : "bg-white";
		return selectedOption === option ? "bg-red-500" : "bg-white";
	};

	return (
		<>
			{/* Version mobile */}
			<div className="flex flex-col gap-4 justify-center mt-4 sm:hidden">
				<button
					onClick={() => handleClick(option1)}
					className={`${getButtonStyle(option1)} border-2 py-2 px-4 rounded-xl w-full`}
				>
					{option1}
				</button>
				<button
					onClick={() => handleClick(option2)}
					className={`${getButtonStyle(option2)} border-2 py-2 px-4 rounded-xl w-full`}
				>
					{option2}
				</button>
				<button
					onClick={() => handleClick(option3)}
					className={`${getButtonStyle(option3)} border-2 py-2 px-4 rounded-xl w-full`}
				>
					{option3}
				</button>
				<button
					onClick={() => handleClick(option4)}
					className={`${getButtonStyle(option4)} border-2 py-2 px-4 rounded-xl w-full`}
				>
					{option4}
				</button>
			</div>

			{/* Version desktop */}
			<div className="hidden sm:flex gap-4 mt-4">
				<button
					onClick={() => handleClick(option1)}
					className={`${getButtonStyle(option1)} border-2 py-2 px-4 rounded-xl w-full`}
				>
					{option1}
				</button>
				<button
					onClick={() => handleClick(option2)}
					className={`${getButtonStyle(option2)} border-2 py-2 px-4 rounded-xl w-full`}
				>
					{option2}
				</button>
				<button
					onClick={() => handleClick(option3)}
					className={`${getButtonStyle(option3)} border-2 py-2 px-4 rounded-xl w-full`}
				>
					{option3}
				</button>
				<button
					onClick={() => handleClick(option4)}
					className={`${getButtonStyle(option4)} border-2 py-2 px-4 rounded-xl w-full`}
				>
					{option4}
				</button>
			</div>
		</>
	);
};

export default Reponse;
