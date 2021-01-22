import "./App.css"

import { irr } from "node-irr"
// const { irr } = require('node-irr')
// const data = [-10, -10, 21]
function App() {
	const data = [-10, -10, 21]
	let result = irr(data)
	console.log(result)
	return (
		<div className="App">
			<h1> Hello World</h1>
			<h4>Result here</h4>
			{result}
		</div>
	)
}

export default App
