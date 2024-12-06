"use client";

import { useState, useEffect } from "react";
import {
	generateGrid,
	initialGrid,
	initializeGridReveal,
	revealAllBombs,
	revealAdjacentCells,
	countAdjacentFlags,
} from "./gridUtils";

import Rectangle from "./rectangle";
import Bouton from "./bouton";
import Slider from "./slider";
import Modal from "./modal";
import { RiInformation2Line } from "react-icons/ri";
import { useRouter } from "next/router";

const DEM_CASE = "/arms/DemCase.png";
const DEM_FLAG = "/arms/DemFlag.png";
const DEM_BOMB = "/arms/DemBomb.png";
const DEM_NUMBERS = [
	"/arms/Dem0.png",
	"/arms/Dem1.png",
	"/arms/Dem2.png",
	"/arms/Dem3.png",
	"/arms/Dem4.png",
	"/arms/Dem5.png",
	"/arms/Dem6.png",
	"/arms/Dem7.png",
	"/arms/Dem8.png",
];

export default function Demineur() {
	const [sliderValue, setSliderValue] = useState(10);
	const [propValue, setPropValue] = useState(1);
	const [numBombs, setNumBombs] = useState(
		Math.floor((propValue / 100) * sliderValue ** 2)
	);

	const rows = sliderValue;
	const cols = sliderValue;
	// const cellSize = 16 / rows * 20;
	const [cellSize, setCellSize] = useState((16 / rows) * 50);
	const [windowWidth, setWindowWidth] = useState(500);

	const [cellImages, setCellImages] = useState(
		initialGrid(rows, cols, DEM_CASE)
	);
	const [gridReveal, setGridReveal] = useState(
		initialGrid(rows, cols, DEM_NUMBERS[0])
	);
	const [gameOver, setGameOver] = useState(false);
	const [flagCount, setFlagCount] = useState(0);
	const [firstClick, setFirstClick] = useState(false);
	const [time, setTime] = useState(0);
	const [timerActive, setTimerActive] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [load, setLoad] = useState(true);
	const [rule, setRule] = useState(false);

	useEffect(() => {
		let timer: NodeJS.Timeout | undefined;
		if (timerActive) {
			timer = setInterval(() => {
				setTime((prevTime) => prevTime + 1);
			}, 1000);
		} else if (!timerActive && time !== 0) {
			clearInterval(timer);
		}
		return () => clearInterval(timer);
	}, [timerActive, time]);

	const formatTime = (time: number) => {
		const minutes = Math.floor(time / 60)
			.toString()
			.padStart(2, "0");
		const seconds = (time % 60).toString().padStart(2, "0");
		return `${minutes}:${seconds}`;
	};

	const handleReset = () => {
		setNumBombs(Math.floor((propValue / 100) * sliderValue ** 2));
		setCellImages(initialGrid(rows, cols, DEM_CASE));
		setGridReveal(initialGrid(rows, cols, DEM_NUMBERS[0]));
		setGameOver(false);
		setFlagCount(0);
		setFirstClick(false);
		setTime(0);
		setTimerActive(false);
		setLoad(true);
	};

	useEffect(() => {
		handleReset();
	}, [sliderValue, propValue]);

	const handleFirstClick = (row: number, col: number) => {
		const newGridReveal = initializeGridReveal(
			rows,
			cols,
			numBombs,
			row,
			col,
			DEM_NUMBERS,
			DEM_BOMB
		);
		setGridReveal(newGridReveal);
		setFirstClick(true);
		setTimerActive(true); // Start the timer
		revealCellsOnFirstClick(row, col, newGridReveal);
	};

	const revealCellsOnFirstClick = (
		row: number,
		col: number,
		newGridReveal: string[][]
	) => {
		const newImages = cellImages.map((r, rowIndex) =>
			r.map((img, colIndex) =>
				rowIndex === row && colIndex === col
					? newGridReveal[row][col]
					: img
			)
		);

		if (newGridReveal[row][col] === DEM_NUMBERS[0]) {
			revealAdjacentCells(row, col, newImages, newGridReveal);
		}

		setCellImages(newImages);
	};

	const handleLeftClick = (row: number, col: number) => {
		if (!firstClick) {
			handleFirstClick(row, col);
			return;
		}

		const newImages = cellImages.map((r, rowIndex) =>
			r.map((img, colIndex) =>
				rowIndex === row && colIndex === col
					? gridReveal[row][col]
					: img
			)
		);

		if (cellImages[row][col] === DEM_CASE) {
			if (gridReveal[row][col] === DEM_BOMB) {
				revealAllBombs(newImages, gridReveal, DEM_BOMB);
				setGameOver(true);
			} else if (gridReveal[row][col] === DEM_NUMBERS[0]) {
				revealAdjacentCells(row, col, newImages, gridReveal);
			}
			setCellImages(newImages);
		} else if (
			gridReveal[row][col].includes("Dem") &&
			!gridReveal[row][col].includes("Bomb") &&
			!gridReveal[row][col].includes("0")
		) {
			const bombCount = parseInt(
				gridReveal[row][col]
					.replace("/arms/Dem", "")
					.replace(".png", "")
			);
			const nb_adjacentflags = countAdjacentFlags(
				row,
				col,
				cellImages,
				DEM_FLAG,
				gridReveal,
				DEM_BOMB
			);
			if (nb_adjacentflags === bombCount) {
				revealAdjacentCells(row, col, newImages, gridReveal);
			} else if (nb_adjacentflags === bombCount + 10) {
				revealAllBombs(newImages, gridReveal, DEM_BOMB);
				setGameOver(true);
				setTimerActive(false); // Stop the timer
			}
			setCellImages(newImages);
		}

		const allBombsFlagged = gridReveal.every((r, rowIndex) =>
			r.every(
				(cell, colIndex) =>
					(cell !== DEM_BOMB &&
						newImages[rowIndex][colIndex] !== DEM_CASE) ||
					(cell === DEM_BOMB &&
						newImages[rowIndex][colIndex] === DEM_FLAG)
			)
		);

		if (allBombsFlagged) {
			setGameOver(true); // Fin de partie lorsque toutes les bombes sont bien signalées
			setTimerActive(false); // Stop the timer
			setShowModal(true); // Victory Modal
		}
	};

	const handleRightClick = (row: number, col: number) => {
		if (event) {
			event.preventDefault(); // Empêche le menu contextuel par défaut
		}

		if (
			cellImages[row][col] !== DEM_CASE &&
			cellImages[row][col] !== DEM_FLAG
		) {
			return;
		}

		const newImages = cellImages.map((r, rowIndex) =>
			r.map((img, colIndex) =>
				rowIndex === row && colIndex === col
					? cellImages[row][col] === DEM_FLAG
						? DEM_CASE
						: DEM_FLAG
					: img
			)
		);
		setFlagCount((prevCount) =>
			cellImages[row][col] === DEM_FLAG ? prevCount - 1 : prevCount + 1
		);
		setCellImages(newImages);

		const allBombsFlagged = gridReveal.every((r, rowIndex) =>
			r.every(
				(cell, colIndex) =>
					(cell !== DEM_BOMB &&
						newImages[rowIndex][colIndex] !== DEM_CASE) ||
					(cell === DEM_BOMB &&
						newImages[rowIndex][colIndex] === DEM_FLAG)
			)
		);

		if (allBombsFlagged) {
			setGameOver(true); // End game when all bombs are correctly flagged
			setTimerActive(false); // Stop the timer
			setShowModal(true); // Victory Modal
		}
	};

	const handleRule = () => {
		setRule(true);
	};

	useEffect(() => {
		function updateCellSize() {
			const newCellSize =
				window.innerWidth < 768
					? (16 / rows) * (window.innerWidth / 18)
					: (16 / rows) * 42;
			setCellSize(newCellSize);
			setWindowWidth(window.innerWidth);
		}

		// Update cellSize on initial render
		updateCellSize();

		// Add event listener for window resize
		window.addEventListener("resize", updateCellSize);

		// Cleanup the event listener on component unmount
		return () => window.removeEventListener("resize", updateCellSize);
	}, [rows]);

	useEffect(() => {
		if (gameOver) {
      window.localStorage.setItem("armsFlag", "1");
			window.location.href = "/game/main";
		}
	}, [gameOver]);

	return (
		<>
			<div className="flex flex-col">
				<div className="flex flex-col bg-cyan-300 h-screen items-center py-20">
					<RiInformation2Line
						className="md:hidden ml-auto mr-5 mb-1 cursor-pointer"
						onClick={handleRule}
						color="white"
						size={40}
					/>
					<div
						className="hidden md:flex flex-row text-xl gap-1 mb-5 bg-white p-2 items-center rounded-lg cursor-pointer"
						onClick={handleRule}
					>
						<RiInformation2Line
							className="cursor-pointer"
							onClick={handleRule}
							size={40}
						/>
						<p> Comment Jouer ?</p>
					</div>
					{rule && (
						<Modal
							showModal={rule}
							setShowModal={setRule}
							title={"Règle du MarineSweeper ! 🧐"}
						>
							<div
								style={{
									textAlign: "justify",
									lineHeight: "1.6",
								}}
							>
								<p style={{ marginBottom: "1em" }}>
									Le Démineur est un jeu de logique où vous
									devez découvrir toutes les cases d'une
									grille sans cliquer sur celles qui cachent
									des déchets.
								</p>
								<p style={{ marginBottom: "1em" }}>
									Chaque clic sur une case révèle un chiffre
									indiquant combien de déchets se trouvent
									dans les cases adjacentes. Si vous cliquez
									sur un déchet, la partie est perdue.
								</p>
								<p style={{ marginBottom: "1em" }}>
									Vous pouvez marquer les cases suspectes avec
									un drapeau. Le but est de révéler toutes les
									cases sans déchets pour gagner.
								</p>
							</div>
						</Modal>
					)}
					<div
						className="relative"
						style={{
							width: `${cols * cellSize}px`,
							height: `${rows * cellSize}px`,
						}}
					>
						<div className="grid gap-0.5 grid-cols-1 items-center bg-white p-2 rounded-lg">
							{load &&
								generateGrid(
									cellImages,
									handleLeftClick,
									handleRightClick,
									gameOver,
									rows,
									cols,
									cellSize,
									DEM_CASE,
									DEM_FLAG
								)}
						</div>
					</div>
					<div className="flex mt-5 gap-5">
						<Rectangle
							content={`${flagCount} / ${numBombs}`}
							image={"/arms/DemFlag.png"}
							className=""
						/>
						<Bouton
							content={"⟳ Rejouer"}
							onClick={handleReset}
							className=""
						/>
					</div>
				</div>
			</div>
		</>
	);
}
