const light = {
	header: { opacity: "0" },
	body: "#4FADF6",
	scrollbars: {
		webkit_track: "transparent",
		webkit_thumb: "#F7F7F7",
		color: "transparent #F7F7F7"
	},
	errors: {
		message: { color: "#F7F7F7"},
		link: { color: "#F7F7F7" }
	},
	simpleCity: {
		background: "#F7F7F7",
		color: "black",
		box_shadow: "#E7E6E6",
		hover: { background: "#EDEDED", box_shadow: "#DDDCDC" },
		pressed: { box_shadow: "#DDDCDC" },
		scd_button: {
			background: "#EDEDED",
			fill: "black",
			box_shadow: "#DDDCDC",
			hover: { background: "#E3E3E3", box_shadow: "#D3D2D2" }
		},
		scd_menu: {
			background: "#EDEDED",
			fill: "black",
			box_shadow: "rgba(0,0,0,0.3)",
			hover: {
				background: "khaki",
				color: "black",
				fill: "black",
				red: {
					background: "#ED2939",
					color: "white",
					fill: "white"
				}
			}
		}
	},
	addSimpleCity: {
		border: "#F7F7F7",
		hover: { background: "rgba(247, 247, 247, 0.2)" },
		expand: { background: "#F7F7F7", box_shadow: "#E7E6E6" },
		showForm: { fill: "#F7F7F7" },
		fields: {
			placeholder: "rgba(59, 58, 58, 0.5)",
			border: "#3B3A3A",
			focus: { border: "#5B86E5" }
		},
		addBtn: {
			background: "#5B86E5",
			color: "#F5F5F5",
			fill: "#F5F5F5",
			box_shadow: "#4B75D4",
			hover: {
				background: "#517CDB",
				color: "#EBEBEB",
				fill: "#EBEBEB",
				box_shadow: "#416BCA"
			},
			active: { box_shadow: "#416BCA" }
		},
		cancelBtn: {
			background: "#ED2939",
			fill: "#A00000",
			box_shadow: "#DD1828",
			hover: {
				background: "#E31F2F",
				fill: "#8C0000",
				box_shadow: "#D30E1E"
			},
			active: { box_shadow: "#D30E1E" }
		}
	},
	cityDetails: { background: "#F7F7F7", color: "black", },
	detailedCity: {
		header: { background: "#EDEDED", box_shadow: "#E7E6E6" },
		section: {
			color: "black",
			filter: "invert(0%) sepia(0%) saturate(30%) hue-rotate(313deg) brightness(105%) contrast(102%);",
			hover: { color: "#517CDB", filter: "invert(46%) sepia(90%) saturate(401%) hue-rotate(184deg) brightness(95%) contrast(88%)" }
		}
	},
	logReg: {
		background: "#F7F7F7",
		color: "black",
		link: { color: "#969696" }
	},
	inputField: {
		background: "#FFFFFF",
		color: "#99A3BA",
		placeholder: "#CBD1DC",
		border: "#CDD9ED",
		focus: { border: "#275EFE" },
		focusError: { border: "#CC0E27" },
		label: {
			background: "#EEF4FF",
			color: "#99A3BA",
			border: "#CDD9ED",
			focus_within: {
				background: "#678EFE",
				color: "#FFFFFF",
				border: "#275EFE"
			}
		},
		labelError: {
			background: "#ED2939",
			color: "#960000",
			border: "#CC0E27",
			focus_within: {
				background: "#ED2939",
				color: "#960000",
				border: "#CC0E27"
			}
		}
	}
};

const dark = {
	header: { opacity: "1" },
	body: "#0C1445",
	scrollbars: {
		webkit_track: "transparent",
		webkit_thumb: "#2E3566",
		color: "transparent #2E3566"
	},
	errors: {
		message: { color: "#9CA4D9" },
		link: { color: "#5B86E5" }
	},
	simpleCity: {
		background: "#202859",
		color: "#9CA4D9",
		box_shadow: "#1A2152",
		hover: { background: "#2A3263", box_shadow: "#242B5C" },
		pressed: { box_shadow: "#242B5C" },
		scd_button: {
			background: "#2A3263",
			fill: "#9CA4D9",
			box_shadow: "#242B5C",
			hover: { background: "#343C6D", box_shadow: "#242B5C" }
		},
		scd_menu: {
			background: "#2A3263",
			fill: "#9CA4D9",
			box_shadow: "rgba(0,0,0,0.3)",
			hover: {
				background: "khaki",
				color: "#9CA4D9",
				fill: "#9CA4D9",
				red: {
					background: "#ED2939",
					color: "white",
					fill: "white"
				}
			}
		}
	},
	addSimpleCity: {
		border: "#202859",
		hover: { background: "rgba(32, 40, 89, 0.2)" },
		expand: { background: "#202859", box_shadow: "#1A2152" },
		showForm: { fill: "#202859" },
		fields: {
			color: "#9CA4D9",
			placeholder: "rgba(156, 164, 217, 0.5)",
			border: "#2A3263",
			focus: { border: "#5B86E5" }
		},
		addBtn: {
			background: "#5B86E5",
			color: "#F5F5F5",
			fill: "#F5F5F5",
			box_shadow: "#4B75D4",
			hover: {
				background: "#517CDB",
				color: "#EBEBEB",
				fill: "#EBEBEB",
				box_shadow: "#416BCA"
			},
			active: { box_shadow: "#416BCA" }
		},
		cancelBtn: {
			background: "#ED2939",
			fill: "#A00000",
			box_shadow: "#DD1828",
			hover: {
				background: "#E31F2F",
				fill: "#8C0000",
				box_shadow: "#D30E1E"
			},
			active: { box_shadow: "#D30E1E" }
		}
	},
	cityDetails: { background: "#202859", color: "#9CA4D9" },
	detailedCity: {
		header: { background: "#2A3263", box_shadow: "#1A2152" },
		section: {
			color: "#9CA4D9",
			filter: "invert(63%) sepia(31%) saturate(352%) hue-rotate(195deg) brightness(97%) contrast(98%);",
			hover: { color: "#517CDB", filter: "invert(46%) sepia(90%) saturate(401%) hue-rotate(184deg) brightness(95%) contrast(88%)" }
		}
	},
	logReg: {
		background: "#202859",
		color: "#9CA4D9",
		link: { color: "#8890C5" }
	},
	inputField: {
		background: "#283061",
		color: "#9CA4D9",
		placeholder: "rgba(156, 164, 217, 0.5)",
		border: "#5A5673",
		focus: { border: "#5C74D9" },
		focusError: { border: "#CC0E27" },
		label: {
			background: "#393B61",
			color: "#75779D",
			border: "#5A5673",
			focus_within: {
				background: "#9CA4D9",
				color: "#FFFFFF",
				border: "#5C74D9"
			}
		},
		labelError: {
			background: "#ED2939",
			color: "#960000",
			border: "#CC0E27",
			focus_within: {
				background: "#ED2939",
				color: "#960000",
				border: "#CC0E27"
			}
		}
	}
};

const Themes = { light, dark };
export default Themes;