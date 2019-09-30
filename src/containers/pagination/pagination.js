import React, { Component } from "react";

class Paginaton extends Component {
	state = {
		totalItems: this.props.totalItems,
	};

	render() {
		const pageLinks = [];

		for (let i = 0; i < Math.ceil(this.state.totalItems / this.props.perPage); i++) {
			pageLinks.push(
				<div className="paginationItem" key={i} onClick={() => this.props.changePage(i)}>
					{i + 1}
				</div>,
			);
		}

		return <div className="paginationWrapper">{pageLinks}</div>;
	}
}

export default Paginaton;
