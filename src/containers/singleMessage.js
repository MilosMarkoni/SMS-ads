import React from "react";

const SingleMessage = props => {
	const { message, sender } = props.data;

	return (
		<div>
			{message} {sender}
		</div>
	);
};

export default SingleMessage;
