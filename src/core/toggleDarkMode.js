import setLocalStorageItem from './local_storage/setLocalStorageItem';
import {DARK_MODE} from './constants';

const toggleDarkMode = (darkMode, callbackFn) => {
    const nextDarkModes = {
        dark: 'light',
        light: 'os',
        os: 'dark',
    };

    const nextDarkMode = nextDarkModes[darkMode];

    if (nextDarkMode === 'light') {
        document.querySelector('html').classList.remove('dark');
    } else if (nextDarkMode === 'dark') {
        document.querySelector('html').classList.add('dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.querySelector('html').classList.add('dark');
    }

    setLocalStorageItem(DARK_MODE, nextDarkMode);
    callbackFn(nextDarkMode);
};

export default toggleDarkMode;