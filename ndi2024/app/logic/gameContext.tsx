"use client";

import React, { createContext, useState, ReactNode, useContext } from "react";

// Définir le type des flags
type Flags = {
	armsFlag: number;
	chestFlag: number;
	headFlag: number;
	legsFlag: number;
};

// Définir le type du contexte
type GameContextType = {
	flags: Flags;
	updateFlag: (flagName: keyof Flags, value: number) => void;
};

// Créer le contexte avec un type par défaut
const GameContext = createContext<GameContextType | undefined>(undefined);

// Fournisseur du contexte
type GameProviderProps = {
	children: ReactNode;
};

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
	const [flags, setFlags] = useState<Flags>({
		armsFlag: 0,
		chestFlag: 0,
		headFlag: 0,
		legsFlag: 0,
	});

	const updateFlag = (flagName: keyof Flags, value: number) => {
		setFlags((prevFlags) => ({
			...prevFlags,
			[flagName]: value,
		}));
	};

	return (
		<GameContext.Provider value={{ flags, updateFlag }}>
			{children}
		</GameContext.Provider>
	);
};

// Hook personnalisé pour utiliser le contexte
export const useGameContext = (): GameContextType => {
	const context = useContext(GameContext);
	if (!context) {
		throw new Error("useGameContext must be used within a GameProvider");
	}
	return context;
};
