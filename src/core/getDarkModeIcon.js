import MoonIcon from '../icons/MoonIcon';
import SunIcon from '../icons/SunIcon';
import SparklesIcon from '../icons/SparklesIcon';

const getDarkModeIcon = (darkMode) => {
    const darkModeIcons = {
        dark: <MoonIcon/>,
        light: <SunIcon/>,
        os: <SparklesIcon/>,
    };

    return darkModeIcons[darkMode];
};

export default getDarkModeIcon;