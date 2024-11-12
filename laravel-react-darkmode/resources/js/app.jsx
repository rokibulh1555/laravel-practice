import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./contexts/ThemeContext";
import ThemeToggleButton from "./components/ThemeToggleButton";
import '../css/app.css';

const App = () => {
    return (
        <ThemeProvider>
            <div>
                <h1>Laravel Practice</h1>
                <ThemeToggleButton />
            </div>
        </ThemeProvider>
    );
};

createRoot(document.getElementById('app')).render(<App />);