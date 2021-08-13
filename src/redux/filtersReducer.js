const init = {
	startDate: "",
	endDate: "",
	clientName: "",
	onlyMe: false
	//sorting: (() => ({ field: '', order: 'asc' }))(),
};

export default function filtersReducer(state = init, action) {
	switch (action.type) {
		case 'select/clear':
			return {
        ...state,
				startDate: "",
				endDate: "",
				clientName: '',
				onlyMe: false,
			};

		case 'edit/start_date':
			return {...state, startDate: action.date};

		case 'edit/end_date':
			return {...state, endDate: action.date};

		case 'edit/client_name':
			return {...state, clientName: action.name};

		case 'toggle/only_me':
			let value = !state.onlyMe;
			return {...state, onlyMe: value};

		default:
			return state;
	}
}
