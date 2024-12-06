"use client";
import { useState } from "react";
import Question from "./Question";



export default function Quiz() {
    const questions = ["Les océans produisent environ 30 % de l'oxygène que le cerveau humain consomme.",
                       "Les coraux émettent des substances qui pourraient un jour être utilisées pour soigner des lésions cérébrales.",
                       "Les marées océaniques, avec leurs cycles réguliers, peuvent être comparées au rythme circadien du corps humain.",
                       "La pollution océanique n'affecte pas la santé marine de manière similaire à la façon dont les radicaux libres affectent le corps humain",
                       "Les organismes bioluminescents dans l'océan qui émettent de la lumière peuvent être comparés aux impulsions électriques du cerveau qui transmettent des signaux, bien que ces impulsions soient générées par des réactions chimiques, comme la bioluminescence.",
                       "Les fractures des plaques tectoniques sous-marines, qui libèrent de l'énergie, peuvent être comparées aux ruptures des connexions neuronales après un traumatismecérébral"];
    
    const answerbooleans = [false, true, true, false, false, false];
    const answertext = ["Les océans produisent plus de 50 % de l'oxygène que nous respirons grâce au phytoplancton. Ces organismes microscopiques réalisent la photosynthèse, un processus où ils absorbent le dioxyde de carbone (CO₂) et produisent de l'oxygène en présence de lumière. Les océans jouent donc un rôle majeur dans la régénération de l'oxygène sur Terre.",
                        "Les coraux, et plus largement les organismes marins, produisent des substances bioactives aux propriétés médicales potentielles, dont certaines pourraient être utilisées pour traiter des lésions cérébrales",
                        "Oui, les marées océaniques peuvent être comparées au rythme circadien du corps humain en raison de leur nature cyclique et leur influence sur des processus biologiques et environnementaux. Voici pourquoi cette comparaison est pertinente.",
                        "Les océans sont pollués par des substances comme les plastiques, les produits chimiques, les métaux lourds et les hydrocarbures. Ces polluants peuvent perturber les écosystèmes marins, affecter la santé des poissons, des coraux et d'autres organismes marins, et altérer la biodiversité. Par exemple, les métaux lourds comme le mercure peuvent s'accumuler dans les tissus des poissons et nuire à leurs fonctions biologiques. Ces radicaux libres peuvent endommager les cellules, l'ADN et provoquer des inflammations, contribuant à des maladies comme le cancer, les maladies cardiovasculaires et le vieillissement prématuré.De la même manière que les radicaux libres provoquent des dommages cellulaires dans le corps humain, les polluants marins agissent comme des agents toxiques qui perturbent la santé des organismes marins. Les deux sont des sources de stress oxydatif et de dégradation des systèmes biologiques",
                        "Les impulsions électriques du cerveau ne sont pas générées par des réactions chimiques, alors qu'elles sont en réalité le résultat de changements dans les charges électriques à travers les membranes neuronales (potentiels d'action), et non de réactions chimiques similaires à celles de la bioluminescence.",
                        "Les fractures des plaques tectoniques libèrent de l'énergie sous forme de tremblements de terre ou d'activité volcanique, affectant l'environnement géologique, tandis que les ruptures des connexions neuronales après un traumatisme cérébral perturbent les circuits neuronaux du cerveau, affectant les fonctions cognitives et physiques. Les processus géologiques et biologiques ont des causes, des dynamiques et des conséquences distinctes."];

    const help = ["Pensez à certains petits végétaux marins !",
                  "Les substance bioactives sont des molécules tirées d'une source naturelle biologique (animale ou végétale), ayant des propriétés physico-chimiques bénéfiques",
                  "Le rythme circadien est un cycle biologique de 24 heures régulé par une \"horloge interne\" dans le cerveau, influencé principalement par la lumière. Il contrôle des fonctions corporelles comme le sommeil, la température corporelle et la sécrétion d'hormones.",
                  "Les radicaux libres sont des molécules instables produites par des processus naturels dans le corps, mais aussi par des facteurs externes comme la pollution, le tabac, ou l'alimentation",
                  "La bioluminescence est la production et l'émission de lumière par un organisme vivant via une réaction chimique au cours de laquelle l'énergie chimique est convertie en énergie lumineuse.",
                  "La Terre n'est pas un bloc uniforme, mais est constituée de plusieurs \"morceaux\" collés les uns aux autres : les plaques tectoniques. Ces plaques bougent chaque année (s'éloignent, se rapprochent...).",];

    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [score, setScore] = useState(0);

    return (
        <>  
            <div className="mt-8 ml-8 mr-8">

                {currentQuestion < 7 && <Question number={currentQuestion} text={questions[currentQuestion - 1]} score={score} setScore={setScore} answer={answerbooleans[currentQuestion - 1]} answerText={answertext[currentQuestion - 1]} help={help[currentQuestion - 1]} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} />}
            </div>
            {currentQuestion === 7 && score >= 3 && (
                <div className="flex flex-col items-center justify-center h-screen border-10 border-cyan-300">
                    <p className="text-2xl text-center font-bold w-3/4 mb-4">
                        Félicitations! Vous avez obtenu {score} points sur 6
                    </p>
                    <button className="bg-green-500 text-white font-bold py-2 px-4 rounded">
                        Continuer ➜
                    </button>
                </div>
            )}
            {currentQuestion === 7 && score < 3 && (
                <button className="flex justify-center text-center bg-red-500 text-white font-bold py-2 px-4 rounded">
                    Rejouer !
                </button>
            )}
        </>
    );
}