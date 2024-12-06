import { useEffect, ReactNode } from 'react';
import { IoCloseSharp } from 'react-icons/io5';

interface ModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  children?: ReactNode;
  score: number;
  setScore: (score: number) => void;
  currentQuestion: number;
  setCurrentQuestion: (currentQuestion: number) => void;
}

const Modal = ({ showModal, setShowModal, title, children, score, setScore, currentQuestion, setCurrentQuestion }: ModalProps) => {
  const handleSuivant = () => {
    if (title === "Super ! ✅") {
      setScore(score + 1);
    }
    setShowModal(false);
    setCurrentQuestion(currentQuestion + 1);
  };

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.keyCode === 27) {
        setShowModal(false);
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [setShowModal]);

  return (
    <>
      {showModal ? (
        <div className="fixed ml-5 mr-5 inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50" onClick={() => setShowModal(false)}></div>
          <div className="flex flex-col bg-white rounded-lg shadow-xl p-6 relative items-center z-10 max-w-xl">
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <div>{children}</div>
            {title !== "Indice 💡" && <button
                  className={`w-64 px-4 py-2 text-white font-bold rounded-md items-center shadow-md bg-gray-500 hover:bg-gray-600 mt-5`}
                  onClick={handleSuivant}
              >
                  Suivant
              </button>}
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={() => setShowModal(false)}
              >
                <IoCloseSharp />
              </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
