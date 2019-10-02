import React, { Component } from "react";
import * as links from "../../links";
import SingleMessage from "../../components/singleMessage/singleMessage";
import Paginaton from "../pagination/pagination";

class List extends Component {
	state = {
		loading: true,
		data: [],
		pageNum: 0,
		perPage: 20,
	};

	componentDidMount() {
		fetch(links.apiURL)
			.then(response => response.json())
			.then(parsedData => {
				this.setState(prevState => ({
					...prevState,
					loading: false,
					data: parsedData.data,
					totalItems: parsedData.count,
				}));
			});
	}

	changePage = pageNumber => {
		this.setState(prevState => ({
			...prevState,

			pageNum: Number(pageNumber),
		}));
	};

	render() {
		const messages = this.state.data
			.sort((first, second) => Number(first.dateCreated) - Number(second.dateCreated))
			.reverse()
			.slice(
				this.state.pageNum * this.state.perPage,
				(this.state.pageNum + 1) * this.state.perPage,
			)
			.map((elem, index) => (
				<SingleMessage key={elem.messageID} indexElem={index} data={elem}></SingleMessage>
			));

		return (
			<div className="ui-main-box">
				{this.state.loading ? (
					<div className="loader">
						<div className="gif"></div>
					</div>
				) : (
					<div>
						<table>
							<tbody>{messages}</tbody>
						</table>

						<Paginaton
							currentPage={this.state.currentPage}
							changePage={this.changePage}
							totalItems={this.state.totalItems}
							perPage={this.state.perPage}
							pageNum={this.state.pageNum}
						></Paginaton>
					</div>
				)}
			</div>
		);
	}
}

export default List;
