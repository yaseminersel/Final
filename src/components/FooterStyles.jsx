// components/FooterStyles.js

import styled from "styled-components";

export const Box = styled.div`
	padding: 2.5% 2.5%;
	background:  rgb(128, 128, 128);
	// position: absolute;
	bottom: 0;
	width: 100%;
	
    

	@media (max-width: 1000px) {
		
	}
`;

export const FooterContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: auto;
	margin: 0 auto;

`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	margin-left: 50px;
`;

export const Row = styled.div`
	display: grid;
	grid-template-columns: repeat(
		auto-fill,
		minmax(185px, 1fr)
	);
	grid-gap: 60px;

	@media (max-width: 1000px) {
		grid-template-columns: repeat(
			auto-fill,
			minmax(200px, 1fr)
		);
	}
`;

export const FooterLink = styled.a`
	color: #fff;
	margin-bottom: 20px;
	font-size: 12px;
	text-decoration: none;

	&:hover {
		color: green;
		transition: 200ms ease-in;
	}
`;

export const Heading = styled.p`
	font-size: 16px;
	color: #fff;
	margin-bottom: 40px;
	font-weight: bold;
`;
