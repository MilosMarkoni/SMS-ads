export const getTimeDate = timestamp => {
	const convertedTimeStamp = new Date(Number(timestamp));

	return `${convertedTimeStamp.getDate()}/${convertedTimeStamp.getMonth() +
		1}/${convertedTimeStamp.getFullYear()}`;
};
