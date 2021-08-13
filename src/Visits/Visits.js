// import Visit from "./Visit";
import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { connect } from 'react-redux';

const Visits = props => {

	let pageNum = Math.ceil(props.visits.length / props.pageSize);
	const pages = {1: []};

	let k = 0;
	let j = 1;
  const pagesElem = [];
	for (let i = 1; i <= pageNum; i++) {
		pages[i] = [];
    pagesElem.push(i)
		while (k < props.visits.length && k < j * props.pageSize) {
			pages[i].push(props.visits[k])
			k++;
		}
		j++;
	}

	return (
		<div>
      <div className="pages--container">
        {pagesElem.map(elem => (<span
				className={`page--elem ${elem == props.currentPage ? 'selected': ""}`}
				onClick={props.changeCurrentPage}
				page={elem}>{elem}</span>
				))}
      </div>
			<BootstrapTable classes="visits" keyField="id" data={pages[props.currentPage]} columns={props.columns} />
		</div>
	);
};

const mapStateToProps = state => {
	return {
		visits: state.data.filtered,
		columns: [
			{dataField: 'clientName', text: 'client', sort: true},
			{dataField: 'complaint', text: 'complaint', sort: true},
			{dataField: 'status', text: 'status', sort: true},
			{dataField: 'doctor', text: 'doctor', sort: true},
			{dataField: 'date', text: 'date', sort: true},
		],
		pageSize: state.data.pageSize,
		currentPage: state.data.currentPage,
	};
};
const mapDispatchToProps = dispatch => {
	return {
    changeCurrentPage: (e) => {
      let page = e.target.getAttribute("page");
      dispatch({type:"change/current_page", page})
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Visits);
