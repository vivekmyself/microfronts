import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

//function to start the app
const mount = (el) => {
	ReactDOM.render(<App />, el);
};

//In Development
if (process.env.NODE_ENV === "development") {
	const devRoot = document.querySelector("#_marketing-dev-root");
	if (devRoot) { mount(devRoot);}
}

//In Production
export { mount };
