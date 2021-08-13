function stringToDate(str) {
	if (str.length > 0) {
		let year = str.substring(0, str.indexOf('-'));
		let month = str.substring(str.indexOf('-') + 1, str.lastIndexOf('-'));
		let day = str.substring(str.lastIndexOf('-') + 1, str.length);

		return new Date(Number(year), Number(month), Number(day));
	}
	return "";
}

export default function filterData(props) {

	let status = props.selectors.selected_status.value;
	let doctor = props.selectors.selected_doctor.value;
	let comp = props.selectors.selected_complaint.value;
	let client = props.filters.clientName;

	let endDate = stringToDate(props.filters.endDate);
	let startDate = stringToDate(props.filters.startDate);

	let arr = props.visits
		.filter(elem => status === 'all' || elem.status === status)
		.filter(elem => doctor === 'all' || elem.doctor === doctor)
		.filter(elem => comp === 'all' || elem.complaint === comp)
		.filter(elem => client === '' || elem.clientName === client)
		.filter(elem =>
				(startDate.length === 0 && endDate.length === 0) ||
				(stringToDate(elem.date) >= startDate && stringToDate(elem.date) <= endDate) ||
				(stringToDate(elem.date) >= startDate && endDate == "") ||
				(stringToDate(elem.date) <= endDate && startDate == "")
		);

	props.setSelectedData(arr);
}
