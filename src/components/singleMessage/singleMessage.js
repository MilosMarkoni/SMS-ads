import React from "react";
import * as utils from "../../utils/utils";

// the hook
import { useTranslation } from "react-i18next";

const SingleMessage = props => {
	const { t } = useTranslation();

	const { message, sender, dateCreated, statusApproved } = props.data;

	return (
		<tr>
			<td>
				<div className="ui-contant-label">#{props.indexElem + 1}</div>
				<div className="ui-contant-label">{utils.getTimeDate(dateCreated)}</div>
				<div className="ui-contant-label">{utils.hidePhoneNumber(sender)}</div>

				<div className="ui-contant-label status">
					{statusApproved ? t("Approved") : t("NotApproved")}
				</div>
				<p className="clear" />
				<div>{message}</div>
			</td>
		</tr>
	);
};

export default SingleMessage;
