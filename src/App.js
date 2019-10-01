import React from "react";
import List from "./containers/list/list";

// the hook
import { useTranslation } from "react-i18next";

function App() {
	const { t } = useTranslation();

	return (
		<div className="App">
			<main>
				<List></List>

				<aside className="ui-side-box">{t("WelcomeToReact")}</aside>

				<p className="clear" />
			</main>
			<footer></footer>
		</div>
	);
}

export default App;
