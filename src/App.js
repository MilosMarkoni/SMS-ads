import React from "react";
import List from "./containers/list/list";

function App() {
	return (
		<div className="App">
			<main>
				<List></List>

				<aside className="ui-side-box">Dummy text</aside>

				<p className="clear" />
			</main>
			<footer></footer>
		</div>
	);
}

export default App;
