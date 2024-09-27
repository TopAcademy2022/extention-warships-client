import * as React from 'react';
import GameField from './GameField';

let b = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

class App extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = { test: Array };

		this.state.test[0] = this.queryFromDataBase();
	}

	queryFromDataBase = () => {
		let xhr = new XMLHttpRequest();
		xhr.open("GET", "https://localhost:7028/Data", false);
		xhr.send();
		return JSON.parse(xhr.response);
	}

	render() {
		return (
			<>
				<div id='messeng'>
					<div className='row'>
						<table className='col-6 d-flex justify-content-end'>
							<tbody>
								<GameField value={this.state.test[0][0]} index={0} />
								<GameField value={this.state.test[0][1]} index={1} />
								<GameField value={this.state.test[0][2]} index={2} />
								<GameField value={this.state.test[0][3]} index={3} />
								<GameField value={this.state.test[0][4]} index={4} />
								<GameField value={this.state.test[0][5]} index={5} />
								<GameField value={this.state.test[0][6]} index={6} />
								<GameField value={this.state.test[0][7]} index={7} />
								<GameField value={this.state.test[0][8]} index={8} />
								<GameField value={this.state.test[0][9]} index={9} />
							</tbody>
						</table>
						<table className='col-6 d-flex justify-content-start'>
							<tbody>
								<GameField value={b} index={0} />
								<GameField value={b} index={1} />
								<GameField value={b} index={2} />
								<GameField value={b} index={3} />
								<GameField value={b} index={4} />
								<GameField value={b} index={5} />
								<GameField value={b} index={6} />
								<GameField value={b} index={7} />
								<GameField value={b} index={8} />
								<GameField value={b} index={9} />
							</tbody>
						</table>
					</div>
				</div>
			</>
		);
	}
}

export default App;