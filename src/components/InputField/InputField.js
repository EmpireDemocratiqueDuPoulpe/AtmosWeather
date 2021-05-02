import PropTypes from "prop-types";
import "./InputField.css";

function InputField(props) {
	const { autoComplete, autoFocus, disabled, readonly, required, type, value, label, showLabel, placeholder, onChange } = props;
	const id = `${label.replace(/[`~!@#$%^&*()\s_|+\-=?;:'",.<>{}[\]\\/]/gi, "").toLowerCase()}-input`;

	const handleChange = event => {
		if(!onChange) return;
		onChange(type === "checkbox" ? event.target.checked : event.target.value);
	};

	return (
		<div className="input-field">
			{showLabel && <label htmlFor={id}>{label}</label>}
			<input
				id={id}
				name={id}
				autoComplete={autoComplete}
				autoFocus={autoFocus}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={handleChange}
				disabled={disabled}
				readOnly={readonly}
				required={required}
			/>
		</div>
	);
}

InputField.propTypes = {
	autoComplete: PropTypes.string,
	autoFocus: PropTypes.bool,
	disabled: PropTypes.bool,
	readonly: PropTypes.bool,
	required: PropTypes.bool,
	type: PropTypes.oneOf([
		"button", "checkbox", "color", "date", "datetime-local", "email", "file", "hidden", "image", "month", "number",
		"password", "radio", "range", "reset", "search", "submit", "tel", "text", "time", "url", "week"
	]).isRequired,
	value: PropTypes.string,
	label: PropTypes.string.isRequired,
	showLabel: PropTypes.bool,
	placeholder: PropTypes.string,
	onChange: PropTypes.func
};

InputField.defaultProps = {
	autoComplete: "on",
	autoFocus: false,
	disabled: false,
	readonly: false,
	required: false,
	showLabel: true
};

export default InputField;