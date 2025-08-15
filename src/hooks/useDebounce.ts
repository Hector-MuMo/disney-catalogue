import { useEffect, useState } from 'react';

const useDebounce = (value: string, delay: number): string => {
  const [debounceValue, setDebounceValue] = useState<string>('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return (): void => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debounceValue;
};

export default useDebounce;
