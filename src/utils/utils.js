export const getTimeDate = timestamp => {
	const convertedTimeStamp = new Date(Number(timestamp));

	return `${convertedTimeStamp.getDate()}/${convertedTimeStamp.getMonth() +
		1}/${convertedTimeStamp.getFullYear()}`;
};

export const hidePhoneNumber = phoneNumber =>
	`${phoneNumber.substring(0, phoneNumber.length - 3)}XXX`;
