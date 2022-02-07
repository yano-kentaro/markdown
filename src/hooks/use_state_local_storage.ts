import { useState } from 'react'

export const useStateLocalStorage = (init: string, key: string): [string, (s: string) => void] => {
    const [value, setValue] = useState<string>(localStorage.getItem(key) || init)

    const setValueLocalStorage = (newValue: string): void => {
        setValue(newValue);
        localStorage.setItem(key, newValue);
    }

    return [value, setValueLocalStorage];
}