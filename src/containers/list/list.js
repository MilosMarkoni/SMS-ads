import React, { Component } from "react";
import * as links from "../../links";
import SingleMessage from "../singleMessage";

class Table extends Component {
	state = {
		loading: true,
		data: []
	};

	componentDidMount() {
		fetch(links.apiURL)
			.then(response => response.json())
			.then(messages => {
				console.log(messages.data[0]);
				this.setState(prevState => ({
					...prevState,
					loading: false,
					data: messages.data
				}));
			});
	}

	render() {
		const messages = this.state.data.map(elem => (
			<SingleMessage key={elem.messageID} data={elem}></SingleMessage>
		));

		return (
			<div>
				{this.state.loading ? <div>Loading...</div> : <div>{messages}</div>}
			</div>
		);
	}
}

export default Table;
