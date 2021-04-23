const config = {
	themes: {
		storageKey: "theme",
		default: "light"
	},
	oweather: {
		current: "pro.openweathermap.org/data/2.5/weather",
		forecast: "pro.openweathermap.org/data/2.5/forecast",
		key: "72cb4362c039ad5fcb8238acf6c04b0f",
		units: "metric",
		lang: "fr",
		getTemperatureUnit() {
			// Unicode character corresponding to unit taken from https://www.compart.com/fr/unicode/
			switch (this.units) {
			case "metric":
				return "\u2103";
			case "imperial":
				return "\u2109";
			case "standard":
			default:
				return "\u212A";
			}
		},
		getSpeedUnit() {
			// Unicode character corresponding to unit taken from https://www.compart.com/fr/unicode/
			switch (this.units) {
			case "metric":
				return "m/s";
			case "imperial":
				return "mph";
			case "standard":
			default:
				return "m/s";
			}
		}
	}
};

export default config;