import React, { useState, useRef , useEffect } from "react";
import PropTypes from "prop-types";
import "./Section.css";

const POSSIBLE_STATES = ["open", "close"];

const keyOf = sectionName => `${sectionName.toLowerCase()}-section-state`;

const getState = sectionName => {
	const state = localStorage.getItem(keyOf(sectionName));
	return state ? (POSSIBLE_STATES.includes(state) ? state : POSSIBLE_STATES[0]) : null;
};

const setState = (sectionName, state) => {
	localStorage.setItem(keyOf(sectionName), state);
};

function Section(props) {
	const { name, keyName, defaultState, children } = props;
	const [ currentState, setCurrentState ] = useState(getState(keyName || name) ?? defaultState);
	const [ wrapperHeight ] = useState("auto");
	const sectionWrapper = useRef(null);
	const sectionBody = useRef(null);

	const handleClick = () => {
		const newState = currentState === "open" ? "close" : "open";

		setCurrentState(newState);
		setState(keyName || name, newState);
	};

	const getWrapperStyle = () => {
		return { height: (currentState === "open" ? wrapperHeight : 0) };
	};

	// Update the wrapper height when a child is added/rendered
	useEffect(() => {
		// FIXME: This function isn't triggered when the child are re-rendered so the height might not be valid.
		/*
		if (sectionWrapper.current && sectionBody.current) {
			const currentHeight = sectionWrapper.current.clientHeight;
			const neededHeight = sectionWrapper.current.scrollHeight;

			if (currentHeight !== neededHeight) {
				setWrapperHeight(neededHeight);
			}

			if (wrapperHeight === "auto" && neededHeight > 0) {
				setWrapperHeight(neededHeight);
			}
		}*/
	});

	return (
		<div className="section">
			<div className="section-header" onClick={handleClick}>
				<div className={`section-header-arrow ${currentState}`}/>
				<h3 className="section-header-title highlight-font">{name} :</h3>
			</div>

			<div className="section-body-wrapper" ref={sectionWrapper} style={getWrapperStyle()}>
				<div className="section-body" ref={sectionBody}>
					{ children ? (<React.Fragment>{children}</React.Fragment>) : null }
				</div>
			</div>
		</div>
	);
}

Section.propTypes = {
	name: PropTypes.string.isRequired,
	keyName: PropTypes.string,
	defaultState: PropTypes.oneOf(POSSIBLE_STATES).isRequired,
	children: PropTypes.any
};

Section.defaultProps = {
	defaultState: "open"
};

export default Section;