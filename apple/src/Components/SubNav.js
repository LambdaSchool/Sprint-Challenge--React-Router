import React from "react";
import styled from "styled-components";

const SubNavWrapperWrapper = styled.div`
	padding: 10px 30px;
	background-color: ${props => props.color};
`;

const SubNavWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: ${props => props.font};
	font-family: "Roboto", sans-serif;
	font-size: 1.3rem;
	margin: 0 auto;
	max-width: 800px;
`;

const SubNav = props => {
	let linkName = props.match.params.name;
	let dark = linkName === "Mac" || linkName === "TV";
	let color = dark ? "rgba(0, 0, 0, 0.83)" : "rgba(242, 242, 242, 0.7)";
	let font = dark ? "white" : "rgb(17, 17, 17)";
	return (
		<SubNavWrapperWrapper color={color}>
			<SubNavWrapper font={font}>
				{props.data.length > 0 &&
					props.data
						.find(e => e.name === props.match.params.name)
						.subLinks.map(ele => (
							<div>
								<img src={ele.img} alt="" />
								<p>{ele.name}</p>
							</div>
						))}
			</SubNavWrapper>
		</SubNavWrapperWrapper>
	);
};

export default SubNav;
