import { useTheme } from "../contexts/ThemeContext";

const ThemeToggleButton = () => {
    const { theme, toggleTheme} = useTheme();

    return (
        <button onClick={toggleTheme}>
            { theme === 'light'? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        </button>
    );
};

export default ThemeToggleButton;