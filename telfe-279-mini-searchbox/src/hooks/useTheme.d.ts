import { default as React } from '../../node_modules/react';

declare const useTheme: () => {
    setTheme: (theme: string) => void;
    storedTheme: string | null;
    toggleTheme: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export default useTheme;
