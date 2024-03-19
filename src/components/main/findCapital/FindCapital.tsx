import React, { useEffect, useState } from 'react';
import './FindCapital.scss';
import StandardInput from '../../inputs/StandardInput';

const FindCapital = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (inputValue) {
      getResults(inputValue);
    }
  }, [inputValue]); // listening for change in inputValue

  const getResults = async (searchValue: string) => {
    const result = await (
      await fetch(
        `http://localhost:3005/countries/search?country=${searchValue}`
      )
    ).json();
    setResults(result);
  };

  // 1. call on change - set the component state
  // 2. listen to a state change in the useEffect hook
  // 3. make an API call to the server to search for the capitals
  // 4. if there are results from ther server -
  // we need another state to set up the results

  return (
    <div className="find-capital__container">
      <StandardInput
        placeholder="Find a capital by country..."
        isLoading={false}
        onChange={(value) => {
          setInputValue(value);
        }}
      />
    </div>
  );
};

export default FindCapital;
