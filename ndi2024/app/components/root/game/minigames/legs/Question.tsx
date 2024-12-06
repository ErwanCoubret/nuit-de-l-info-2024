import React from 'react';

interface QuestionProps {
  questionNumber: number;
  questionText: string;
}

const Question: React.FC<QuestionProps> = ({ questionNumber, questionText }) => {
  return (
    <div className='mt-10'>
      <h1 className='text-2xl font-bold'> 
        Question {questionNumber}
      </h1>
      <p className='mt-4'> 
        {questionText}
      </p>
    </div>
  );
};

export default Question;
