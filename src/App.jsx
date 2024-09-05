import "./App.css";

function App() {
	return (
		<div className="App">
			<h1>Olá, Mobile First UI com React</h1>
			<nav className="menu">
				<ul>
					<li className="item-menu">Home</li>
					<li className="item-menu">Lojas</li>
					<li className="item-menu">Produtos</li>
					<li className="item-menu">Contato</li>
				</ul>
			</nav>
			<div id="pai">
				<div className="box">box 1</div>
				<div className="box">box 2</div>
				<div className="box">box 3</div>
			</div>
		</div>
	);
}

export default App;
