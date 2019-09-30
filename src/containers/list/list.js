import React, { Component } from "react";
import * as links from "../../links";
import SingleMessage from "../../components/singleMessage/singleMessage";

class List extends Component {
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
		const messages = this.state.data.map((elem, index) => (
			<SingleMessage
				key={elem.messageID}
				indexElem={index}
				data={elem}
			></SingleMessage>
		));

		return (
			<div className="ui-main-box">
				{this.state.loading ? (
					<div>Loading...</div>
				) : (
					<div>
						<table>
							<tbody>{messages}</tbody>
						</table>
					</div>
				)}
			</div>
		);
	}
}

export default List;
