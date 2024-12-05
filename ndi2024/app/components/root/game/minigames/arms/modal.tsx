import { useEffect, ReactNode } from 'react';

interface ModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  children?: ReactNode;
}

const Modal = ({ showModal, setShowModal, title, children }: ModalProps) => {
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
          <div className="bg-white rounded-lg shadow-xl p-6 relative z-10 max-w-xl">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <div>{children}</div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
