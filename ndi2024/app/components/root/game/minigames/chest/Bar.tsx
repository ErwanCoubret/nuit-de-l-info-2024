export default function Bar({
    score,
    maxScore,
}: {
    score: number;
    maxScore: number;
}) {
    // Validation des valeurs pour éviter les comportements inattendus
    const validScore = Math.min(Math.max(score, -maxScore), maxScore);

    // Calcul de la position en pourcentage pour l'axe -maxScore à maxScore
    const getPercentage = (value: number) => ((value + maxScore) / (2 * maxScore)) * 100;

    // Déterminer la couleur en fonction de la valeur du score
    const barColor = validScore >= 0 ? "text-green-500" : "text-red-500";

    return (
        <div className="flex flex-col items-center space-y-4">
            {/* Barre principale */}
            <div className="relative w-3/4 h-2 bg-gray-300 rounded">
                {/* Barre de progression */}
                <div
                    className={`absolute top-0 h-2 rounded ${validScore > 0 ? "bg-green-500" : "bg-red-500"}`}
                    style={{
                        left: validScore > 0 ? `${getPercentage(0)}%` : `${getPercentage(validScore)}%`,
                        width: `${Math.abs(getPercentage(validScore) - getPercentage(0))}%`,
                    }}
                />

                {/* Boule gauche (point -maxScore) */}
                <div
                    className="absolute top-[-6px] h-6 w-1 bg-gray-600"
                    style={{
                        left: "0.3%",
                        transform: "translateX(-50%)", // Centrer la boule
                    }}
                ></div>

                {/* Curseur du score - trait fin */}
                <div
                    className="absolute top-[-6px] h-6 w-1 bg-gray-600"
                    style={{
                        left: `${getPercentage(validScore)}%`,
                        transform: "translateX(-50%)",
                    }}
                ></div>

                {/* Affichage du score avec couleur dynamique */}
                <div
                    className={`absolute text-xs font-semibold ${barColor}`}
                    style={{
                        top: "30px", // Positionner en dessous du curseur
                        left: `${getPercentage(validScore)}%`,
                        transform: "translateX(-50%)", // Centrer le texte sous le curseur
                    }}
                >
                    {validScore}
                </div>

                {/* Boule droite (point maxScore) */}
                <div
                    className="absolute top-[-6px] h-6 w-1 bg-gray-600"
                    style={{
                        left: "99%",
                        transform: "translateX(50%)", // Centrer la boule
                    }}
                ></div>
            </div>

            {/* Légendes */}

            <div className="flex justify-between w-3/4 text-sm text-gray-600">
                {score !== -maxScore && <span>-{maxScore}</span>}
                {score === -maxScore && <span> </span>}
                {score !== 0 && <span> 0 </span>}
                {score === 0 && <span> </span>}
                {score !== maxScore && <span>{maxScore}</span>}
                {score === maxScore && <span> </span>}
            </div>
        </div>
    );
}
