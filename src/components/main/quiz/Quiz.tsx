import React, { useRef, useState, useEffect } from 'react';
import StandardInput from '../../inputs/StandardInput';
import StandardButton from '../../buttons/StandardButton';
import CapitalResult from '../../../models/CapitalResult.interface';
import './Quiz.scss';

const Quiz = () => {
  const [randomCapital, setRandomCapital] = useState<CapitalResult | null>(
    null
  );
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [isError, setIsError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const fetchRandomCapital = async () => {
    setRandomCapital(null);
    const result = await (
      await fetch('http://localhost:3005/countries/random')
    ).json();

    setRandomCapital(result);
  };

  const checkResult = () => {
    if (inputRef.current) {
      if (inputRef.current.value === randomCapital?.city) {
        setIsDisabled(true);
        setIsAnswerCorrect(true);

        return;
      }

      setIsError(true);
    }
  };

  const showAnswer = () => {
    if (inputRef.current && randomCapital) {
      inputRef.current.value = randomCapital?.city;

      setIsDisabled(true);
      setIsError(false);
    }
  };

  const handleNextQuestion = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }

    setIsAnswerCorrect(false);
    setIsDisabled(false);
    setIsError(false);

    fetchRandomCapital();
  };

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        checkResult();
      }
    };

    window.addEventListener('keydown', keyDownHandler);

    fetchRandomCapital();

    return () => {
      window.removeEventListener('keydown', keyDownHandler);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return !!randomCapital ? (
    <div className="quiz__container">
      <h3 className="ui header">
        What is the capital of {randomCapital?.country}?
      </h3>
      <StandardInput
        placeholder="Type your answear here!"
        onChange={() => setIsError(false)}
        ref={inputRef}
        disabled={isDisabled}
        isError={isError}
      />
      <div className="quiz__buttons">
        <StandardButton onClick={handleNextQuestion} title="Next question" />
        <StandardButton
          onClick={showAnswer}
          title="Show answer"
          disabled={isDisabled}
        />
        <StandardButton
          onClick={checkResult}
          title="Check"
          disabled={isDisabled}
          color={isAnswerCorrect ? 'green' : ''}
        />
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default Quiz;
