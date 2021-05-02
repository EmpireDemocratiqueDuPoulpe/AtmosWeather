const config = {
	auth: {
		persistent: true
	},
	themes: {
		storageKey: "theme",
		default: "light"
	},
	awApi: {
		users: {
			register: "http://localhost:8080/api/users",
			login: "http://localhost:8080/api/users/login"
		},
		cities: {
			add: "http://localhost:8080/api/cities",
			getOf: "http://localhost:8080/api/cities",
			delete: "http://localhost:8080/api/cities"
		}
	},
	oweather: {
		current: "pro.openweathermap.org/data/2.5/weather",
		forecast: "pro.openweathermap.org/data/2.5/forecast",
		key: "72cb4362c039ad5fcb8238acf6c04b0f",
		units: "metric",
		speedToKmh: true,
		lang: "fr",
		getTemperatureUnit() {
			const floatingO = "\u00b0";

			// Unicode character corresponding to unit taken from https://www.compart.com/fr/unicode/
			switch (this.units) {
			case "metric":
				return `${floatingO}C`;
			case "imperial":
				return `${floatingO}F`;
			case "standard":
			default:
				return `${floatingO}C`;
			}
		},
		getSpeedUnit() {
			// Unicode character corresponding to unit taken from https://www.compart.com/fr/unicode/
			switch (this.units) {
			case "metric":
				return this.speedToKmh ? "km/h" : "m/s";
			case "imperial":
				return "mph";
			case "standard":
			default:
				return this.speedToKmh ? "km/h" : "m/s";
			}
		}
	}
};

export default config;