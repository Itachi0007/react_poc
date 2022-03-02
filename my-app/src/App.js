import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Page />
		</div>
	);
}

function Page() {
	return (
		<div className="header" id="header">
			<img src={logo} width="150px"></img>
			<h1>Fun facts about React</h1>
			<ul className="facts list">
				<li>It is declarative</li>
				<li>It is imperative</li>
				<li>It is a hireable skill</li>
			</ul>
		</div>
	);
}

export default App;
