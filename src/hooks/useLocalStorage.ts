import { useState } from 'react';
export function useLocalStorage (key:string, initialValue:string | boolean) {
  const [storedValue, setValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item !== null ? item === "true" ? true : item === "false" ? false : JSON.parse(item) : initialValue
    } catch (e) {
      return initialValue
    }
  })

  const setLocalStorage = (value:string | boolean) => {

    try {
      localStorage.setItem(key, JSON.stringify(value));
      setValue(value);
    } catch (e) {
      console.error(e);
    }
  }

  return [storedValue, setLocalStorage]
}
