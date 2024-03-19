import React, { useEffect, useState } from 'react';

type UseDebouncedStateReturnValue = [string, (value: string) => void];

const useDebouncedState = (
  initialValue: string,
  debouncedTime: number
): UseDebouncedStateReturnValue => {
  const [value, setValue] = useState(initialValue);
  const [debouncedValue, setDebouncedValue] = useState(initialValue);

  // 1. new value is set
  // 2. we listen to the value
  // 3. if the value has changed - we wait debounced time (500ms)
  // 4. if the value hasn't changed in 500ms again - we set debounced value
  // 5. if the value has changed in 500ms = we don't set this value - and we wait another 500ms

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setDebouncedValue(value);
    }, debouncedTime);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [value]);

  return [debouncedValue, setValue];
};
export default useDebouncedState;
