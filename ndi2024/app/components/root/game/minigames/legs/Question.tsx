import React from 'react';

interface QuestionProps {
  questionNumber: number;
  questionText: string;
}

const Question: React.FC<QuestionProps> = ({ questionNumber, questionText }) => {
  return (
    <div className='mt-10'>
      <p> 
        Question {questionNumber}
      </p>
      <p className='mt-4'> 
        {questionText}
      </p>
    </div>
  );
};

export default Question;
