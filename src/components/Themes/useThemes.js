import { useState, useEffect } from "react";
import config from "../../config/config.js";

const useThemes = () => {
	// Init state
	const [ theme, setTheme ] = useState(config.themes.default);
	const [ ready, setReady ] = useState(false);

	// Add a function to save theme to localStorage
	const setPersistent = thm => {
		window.localStorage.setItem(config.themes.storageKey, thm);
		setTheme(thm);
	};

	// Add a function to toggle theme
	const toggleTheme = () => {
		theme === "light" ? setPersistent("dark") : setPersistent("light");
	};

	// Check on component mount if the theme is already defined
	useEffect(() => {
		const currentTheme = window.localStorage.getItem(config.themes.storageKey);
		currentTheme && setTheme(currentTheme);
		setReady(true);
	}, []);

	return [ theme, toggleTheme, ready ];
};

export default useThemes;