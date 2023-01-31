import React, {useEffect, useState} from 'react'

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(initialValue);
  // useEffect must be used to access window.localStorage in next JS to define it is being done on the client side not the server side
    useEffect(() => {
        try {
          // here we see if anything is already in local storage
            const localValue = window.localStorage.getItem(key);
            if (localValue) {
                setValue(JSON.parse(localValue));
            }
        } catch (err) {
            console.log(err)
        }
    }, [key]);

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value));
      //  clean up function that removes the key from localStorage when re-run
        return () => {
          window.localStorage.removeItem(key);
        }
    }, [value, key]);
  return [value, setValue]
}

export default useLocalStorage