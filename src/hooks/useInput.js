import { useState, useCallback } from 'react';

const useInput = (initialState = null) => {
  const [value, setValue] = useState(initialState);
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return [value, onChange, setValue];
};

export default useInput;
