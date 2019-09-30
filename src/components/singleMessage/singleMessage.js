import React from "react";
import * as utils from "../../utils/utils";

const SingleMessage = props => {
	const { message, sender, dateCreated, statusApproved } = props.data;

	return (
		<tr>
			<td>
				<div className="ui-contant-label">#{props.indexElem + 1}</div>
				<div className="ui-contant-label">{utils.getTimeDate(dateCreated)}</div>
				<div className="ui-contant-label">{sender}</div>
				<div className="ui-contant-label status">
					{statusApproved ? "Odobreno" : "Nije odobreno"}
				</div>
				<p className="clear" />
				<div>{message}</div>
			</td>
		</tr>
	);
};

export default SingleMessage;
