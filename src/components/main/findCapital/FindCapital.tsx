import React, { useCallback, useEffect, useMemo, useState } from 'react';
import './FindCapital.scss';
import StandardInput from '../../inputs/StandardInput';
import CapitalResult from '../../../models/CapitalResult.interface';
import FindCapitalResults from './FindCapitalResults';
import useDebouncedState from '../../../hooks/useDebouncedState';

const FindCapital = () => {
  const [inputValue, setInputValue] = useDebouncedState('', 500);
  const [results, setResults] = useState<CapitalResult[]>([]);

  useEffect(() => {
    if (inputValue) {
      getResults(inputValue);
    }

    if (!inputValue) {
      setResults([]);
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
  // 4. if there are results from ther server - we need another state to set up the results

  //useMemo (JSX element)
  const CapitalResults = useMemo(
    () => <FindCapitalResults results={results} />,
    [results]
  );
  // we only change this component if results in dependency array changes

  //useCallback (function) && the difference is that u need to call it
  const renderResults = useCallback(
    () => <FindCapitalResults results={results} />,
    [results]
  );

  return (
    <div className="find-capital__container">
      <StandardInput
        placeholder="Find a capital by country..."
        isLoading={false}
        onChange={(value) => {
          setInputValue(value);
        }}
      />
      {renderResults()}
    </div>
  );
};

export default FindCapital;
