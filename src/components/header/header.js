import React from "react";

const Header = () => {
	return (
		<div>
			<header>
				<div className="ui-content">
					<div className="ui-main-label ui-font-size__27px ui-float__right">
						Pošalji SMS na 1311: TXT tekst_poruke
					</div>
					<p className="clear" />
					<div className="ui-price-message">
						Cena poruke: 100 RSD+PDV+Cena standardne SMS poruke Važi za Srbiju - sve
						mobilne mreže.
					</div>
				</div>
			</header>
			<p className="clear" />
			<div className="ui-warning-panel ui-text-align__center">
				<h3>Pošaljite SMS na broj: 1311, u obliku: "TXT tekst_poruke"</h3>
				<h3>SMS oglasi na SVIM mrežama koštaju: 100 RSD+PDV+Cena standardne SMS poruke</h3>
			</div>
		</div>
	);
};

export default Header;
