import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  .cities-wrapper {
		background-color: ${({ theme }) => theme.body};
    transition: background-color 0.50s linear;
	}
`;

export default GlobalStyles;