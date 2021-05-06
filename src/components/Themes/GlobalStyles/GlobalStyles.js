import { createGlobalStyle } from "styled-components";

const TRANSITION_TIME = "250ms";
const TRANSITION_TYPE = "linear";

const GlobalStyles = createGlobalStyle`
  /* ---- Global ---------------------------------- */
  .custom-scrollbars::-webkit-scrollbar { width: 8px; }
  .custom-scrollbars::-webkit-scrollbar-track { background: ${({ theme }) => theme.scrollbars.webkit_track}; }
  .custom-scrollbars::-webkit-scrollbar-thumb {
	  border-radius: 50px;
	  background-color: ${({ theme }) => theme.scrollbars.webkit_thumb};
  }
  
  .custom-scrollbars {
	  scrollbar-width: thin;
	  scrollbar-color: ${({ theme }) => theme.scrollbars.color};
  }
  
  /* ---- Errors ---------------------------------- */
  .error-box .error-message {
    color: ${({ theme }) => theme.errors.message.color};
    transition: color ${TRANSITION_TIME} ${TRANSITION_TYPE};
  }
	  
  .error-box .error-link {
    color: ${({ theme }) => theme.errors.link.color};
    transition: color ${TRANSITION_TIME} ${TRANSITION_TYPE};
  }
  
  /* ---- App ------------------------------------- */
  /* This is a hack to use a transition with a gradient. It uses the opacity of the ::before pseudo-element to smoothly show or hide the new gradient.
     This is not perfect but good enough to keep it. */
  .App-header::before {
    opacity: ${({ theme }) => theme.header.opacity};
	transition: opacity ${TRANSITION_TIME} ${TRANSITION_TYPE};
  }
  
  .App-body {
    background-color: ${({ theme }) => theme.body};
    transition: background-color ${TRANSITION_TIME} ${TRANSITION_TYPE};
  }

  /* ---- Index ----------------------------------- */
  .city-detail {
    background: ${({ theme }) => theme.cityDetails.background};
    color: ${({ theme }) => theme.cityDetails.color};
    transition: background-color ${TRANSITION_TIME} ${TRANSITION_TYPE}, color ${TRANSITION_TIME} ${TRANSITION_TYPE};
  }
	
  /* ---- Simple City ----------------------------- */
  .simple-city {
    background-color: ${({ theme }) => theme.simpleCity.background};
    color: ${({ theme }) => theme.simpleCity.color};
    box-shadow: 3px 3px 0 3px ${({ theme }) => theme.simpleCity.box_shadow};
    -webkit-box-shadow: 3px 3px 0 3px ${({ theme }) => theme.simpleCity.box_shadow};
    -moz-box-shadow: 3px 3px 0 3px ${({ theme }) => theme.simpleCity.box_shadow};
    transition: background-color ${TRANSITION_TIME} ${TRANSITION_TYPE}, color ${TRANSITION_TIME} ${TRANSITION_TYPE}, box-shadow ${TRANSITION_TIME} ${TRANSITION_TYPE};
  }

  .simple-city:hover {
    background: ${({ theme }) => theme.simpleCity.hover.background};
    box-shadow: 3px 3px 0 3px ${({ theme }) => theme.simpleCity.hover.box_shadow};
    -webkit-box-shadow: 3px 3px 0 3px ${({ theme }) => theme.simpleCity.hover.box_shadow};
    -moz-box-shadow: 3px 3px 0 3px ${({ theme }) => theme.simpleCity.hover.box_shadow};
  }
	
  .simple-city.pressed {
    box-shadow: 1px 1px 0 1px ${({ theme }) => theme.simpleCity.pressed.box_shadow};
    -webkit-box-shadow: 1px 1px 0 1px ${({ theme }) => theme.simpleCity.pressed.box_shadow};
    -moz-box-shadow: 1px 1px 0 1px ${({ theme }) => theme.simpleCity.pressed.box_shadow};
  }

  .scd-button {
    background: ${({ theme }) => theme.simpleCity.scd_button.background};
    box-shadow: 1px 1px 0 1px ${({ theme }) => theme.simpleCity.scd_button.box_shadow};
    -webkit-box-shadow: 1px 1px 0 1px ${({ theme }) => theme.simpleCity.scd_button.box_shadow};
    -moz-box-shadow: 1px 1px 0 1px ${({ theme }) => theme.simpleCity.scd_button.box_shadow};
  }
  .scd-button svg { fill: ${({ theme }) => theme.simpleCity.scd_button.fill};  }

  .scd-button:hover,
  .simple-city-delete.menuOpened .scd-button {
    background: ${({ theme }) => theme.simpleCity.scd_button.hover.background};
    box-shadow: 1px 1px 0 1px ${({ theme }) => theme.simpleCity.scd_button.hover.box_shadow};
    -webkit-box-shadow: 1px 1px 0 1px ${({ theme }) => theme.simpleCity.scd_button.hover.box_shadow};
    -moz-box-shadow: 1px 1px 0 1px ${({ theme }) => theme.simpleCity.scd_button.hover.box_shadow};
  }
	
  .scd-menu {
    background: ${({ theme }) => theme.simpleCity.scd_menu.background};
    box-shadow: 6px 6px 15px -1px ${({ theme }) => theme.simpleCity.scd_menu.box_shadow};
    -webkit-box-shadow: 6px 6px 15px -1px ${({ theme }) => theme.simpleCity.scd_menu.box_shadow};
    -moz-box-shadow: 6px 6px 15px -1px ${({ theme }) => theme.simpleCity.scd_menu.box_shadow};
  }

  .scd-menu-item svg { fill: ${({ theme }) => theme.simpleCity.scd_menu.fill}; }

  .scd-menu-item:hover {
		background: ${({ theme }) => theme.simpleCity.scd_menu.hover.background};
		color: ${({ theme }) => theme.simpleCity.scd_menu.hover.color};
  }
  .scd-menu-item:hover svg { fill: ${({ theme }) => theme.simpleCity.scd_menu.hover.fill}; }
	
  .scd-menu-item.red-hover:hover {
    background: ${({ theme }) => theme.simpleCity.scd_menu.hover.red.background};
    color: ${({ theme }) => theme.simpleCity.scd_menu.hover.red.color};
  }
  .scd-menu-item.red-hover:hover svg { fill: ${({ theme }) => theme.simpleCity.scd_menu.hover.red.fill}; }
	
  /* ---- Add Simple City ------------------------- */
  .add-simple-city {
    border-color: ${({ theme }) => theme.addSimpleCity.border};
    transition: background-color ${TRANSITION_TIME} ${TRANSITION_TYPE}, color ${TRANSITION_TIME} ${TRANSITION_TYPE}, box-shadow ${TRANSITION_TIME} ${TRANSITION_TYPE};
  }
  .add-simple-city:hover { background: ${({ theme }) => theme.addSimpleCity.hover.background}; }
  .add-simple-city.expand {
    background: ${({ theme }) => theme.addSimpleCity.expand.background};
    box-shadow: 3px 3px 0 3px ${({ theme }) => theme.addSimpleCity.expand.box_shadow};
    -webkit-box-shadow: 3px 3px 0 3px ${({ theme }) => theme.addSimpleCity.expand.box_shadow};
    -moz-box-shadow: 3px 3px 0 3px ${({ theme }) => theme.addSimpleCity.expand.box_shadow};
  }

  .asc-show-form-btn svg { fill: ${({ theme }) => theme.addSimpleCity.showForm.fill}; }

  .asc-form-field input { border-bottom-color: ${({ theme }) => theme.addSimpleCity.fields.border}; }
  .asc-form-field input::placeholder { color: ${({ theme }) => theme.addSimpleCity.fields.placeholder}; }
  .asc-form-field input:focus,
  .asc-form-field input:not(:placeholder-shown) {  border-bottom-color: ${({ theme }) => theme.addSimpleCity.fields.focus.border}; }

  .asc-add-button {
    background: ${({ theme }) => theme.addSimpleCity.addBtn.background};
    box-shadow: 2px 2px 0 2px ${({ theme }) => theme.addSimpleCity.addBtn.box_shadow};
    -webkit-box-shadow: 2px 2px 0 2px ${({ theme }) => theme.addSimpleCity.addBtn.box_shadow};
    -moz-box-shadow: 2px 2px 0 2px ${({ theme }) => theme.addSimpleCity.addBtn.box_shadow};
  }

  .asc-add-button:hover {
    background: ${({ theme }) => theme.addSimpleCity.addBtn.hover.background};
    box-shadow: 2px 2px 0 2px ${({ theme }) => theme.addSimpleCity.addBtn.hover.box_shadow};
    -webkit-box-shadow: 2px 2px 0 2px ${({ theme }) => theme.addSimpleCity.addBtn.hover.box_shadow};
    -moz-box-shadow: 2px 2px 0 2px ${({ theme }) => theme.addSimpleCity.addBtn.hover.box_shadow};
  }

  .asc-add-button:active {
    box-shadow: 1px 1px 0 1px ${({ theme }) => theme.addSimpleCity.addBtn.active.box_shadow};
    -webkit-box-shadow: 1px 1px 0 1px ${({ theme }) => theme.addSimpleCity.addBtn.active.box_shadow};
    -moz-box-shadow: 1px 1px 0 1px ${({ theme }) => theme.addSimpleCity.addBtn.active.box_shadow};
  }

  .asc-add-button-content svg { fill: ${({ theme }) => theme.addSimpleCity.addBtn.fill}; }
  .asc-add-button-content span { color: ${({ theme }) => theme.addSimpleCity.addBtn.color}; }
  .asc-add-button-content:hover svg { fill: ${({ theme }) => theme.addSimpleCity.addBtn.hover.fill}; }
  .asc-add-button-content:hover span { color: ${({ theme }) => theme.addSimpleCity.addBtn.hover.color}; }

  .asc-cancel {
    background: ${({ theme }) => theme.addSimpleCity.cancelBtn.background};
    box-shadow: 2px 2px 0 2px ${({ theme }) => theme.addSimpleCity.cancelBtn.box_shadow};
    -webkit-box-shadow: 2px 2px 0 2px ${({ theme }) => theme.addSimpleCity.cancelBtn.box_shadow};
    -moz-box-shadow: 2px 2px 0 2px ${({ theme }) => theme.addSimpleCity.cancelBtn.box_shadow};
  }

  .asc-cancel:hover {
    background: ${({ theme }) => theme.addSimpleCity.cancelBtn.hover.background};
    box-shadow: 2px 2px 0 2px ${({ theme }) => theme.addSimpleCity.cancelBtn.hover.box_shadow};
    -webkit-box-shadow: 2px 2px 0 2px ${({ theme }) => theme.addSimpleCity.cancelBtn.hover.box_shadow};
    -moz-box-shadow: 2px 2px 0 2px ${({ theme }) => theme.addSimpleCity.cancelBtn.hover.box_shadow};
  }

  .asc-cancel:active {
    box-shadow: 1px 1px 0 1px ${({ theme }) => theme.addSimpleCity.cancelBtn.active.box_shadow};
    -webkit-box-shadow: 1px 1px 0 1px ${({ theme }) => theme.addSimpleCity.cancelBtn.active.box_shadow};
    -moz-box-shadow: 1px 1px 0 1px ${({ theme }) => theme.addSimpleCity.cancelBtn.active.box_shadow};
  }

  .asc-cancel svg { fill: ${({ theme }) => theme.addSimpleCity.cancelBtn.fill}; }
  .asc-cancel:hover svg { fill: ${({ theme }) => theme.addSimpleCity.cancelBtn.hover.fill}; }
	
  /* ---- Detailed City --------------------------- */
  .detailed-city-header {
    background: ${({ theme }) => theme.detailedCity.header.background};
    box-shadow: 0 3px 0 3px ${({ theme }) => theme.detailedCity.header.box_shadow};
    -webkit-box-shadow: 0 3px 0 3px ${({ theme }) => theme.detailedCity.header.box_shadow};
    -moz-box-shadow: 0 3px 0 3px ${({ theme }) => theme.detailedCity.header.box_shadow};
	transition: background-color ${TRANSITION_TIME} ${TRANSITION_TYPE}, color ${TRANSITION_TIME} ${TRANSITION_TYPE}, box-shadow ${TRANSITION_TIME} ${TRANSITION_TYPE};
  }
  
  /* ---- Section --------------------------------- */
  .section-header { color: ${({ theme }) => theme.detailedCity.section.color}; }
  .section-header .section-header-arrow { filter: ${({ theme }) => theme.detailedCity.section.filter}; }
	  
  .section-header:hover { color: ${({ theme }) => theme.detailedCity.section.hover.color}; }
  .section-header:hover .section-header-arrow { filter: ${({ theme }) => theme.detailedCity.section.hover.filter}; }
  
  /* ---- Login / Register ------------------------ */
  .login-box,
  .register-box {
    background: ${({ theme }) => theme.logReg.background};
	color: ${({ theme }) => theme.logReg.color};
	transition: background-color ${TRANSITION_TIME} ${TRANSITION_TYPE}, color ${TRANSITION_TIME} ${TRANSITION_TYPE};
  }
  
  .login-box .link,
  .register-box .link {
	color: ${({ theme }) => theme.logReg.link.color};
  }
  
  /* ---- Input field ----------------------------- */
  .input-field label {
    background: ${({ theme }) => theme.inputField.label.background};
    color: ${({ theme }) => theme.inputField.label.color};
    border-color: ${({ theme }) => theme.inputField.label.border};
	transition: background-color ${TRANSITION_TIME} ${TRANSITION_TYPE}, color ${TRANSITION_TIME} ${TRANSITION_TYPE}, border-color ${TRANSITION_TIME} ${TRANSITION_TYPE};
  }
  
  .input-field:focus-within > label {
    background: ${({ theme }) => theme.inputField.label.focus_within.background};
    color: ${({ theme }) => theme.inputField.label.focus_within.color};
    border-color: ${({ theme }) => theme.inputField.label.focus_within.border};
  }
  
  .input-field.field-error label {
    background: ${({ theme }) => theme.inputField.labelError.background};
    color: ${({ theme }) => theme.inputField.labelError.color}
    border-color: ${({ theme }) => theme.inputField.labelError.border};
  }
  
  .input-field.field-error:focus-within > label {
    background: ${({ theme }) => theme.inputField.labelError.focus_within.background};
    color: ${({ theme }) => theme.inputField.labelError.focus_within.color};
    border-color: ${({ theme }) => theme.inputField.labelError.focus_within.border};
  }
  
  .input-field input {
    background: ${({ theme }) => theme.inputField.background};
    color: ${({ theme }) => theme.inputField.color};
    border-color: ${({ theme }) => theme.inputField.border};
		transition: background-color ${TRANSITION_TIME} ${TRANSITION_TYPE}, color ${TRANSITION_TIME} ${TRANSITION_TYPE}, border-color ${TRANSITION_TIME} ${TRANSITION_TYPE};
  }
  .input-field input::placeholder { color: ${({ theme }) => theme.inputField.placeholder}; }
  .input-field input:focus { border-color: ${({ theme }) => theme.inputField.focus.border}; }
  .input-field.field-error input:focus { border-color: ${({ theme }) => theme.inputField.focusError.border}; }
`;

export default GlobalStyles;