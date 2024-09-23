import { Component } from 'react';

class GameField extends Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {field: [[], [], [], [], [], [], [], [], [], []]};

		for(let i = 0; i < 10; i++)
		{
			for(let k = 0; k < 10; k++)
			{
				this.state.field[i][k] = 1;
			}
		}
	}

	RenderGameField = (cellValue: number) => {
		switch(cellValue)
		{
			case 1:
				return (
					<>
						<span>&#9744;</span>
					</>
				);
			
			case 3:
				return (
					<>
						<span>&#9746;</span>
					</>
				);
		}
	}

	GunClick = (eventClick: any) => {
		// if(могу ли делать выстрел?)
		let column = eventClick.target.offsetParent;
		let row = column.parentNode;
		
		switch(this.state.field[row.className][column.className])
		{
			case 1:
				this.state.field[row.className][column.className] = 3;
		}

		this.setState({field: this.state.field});
	}

	render() {
		return (
			<>
				<table>
					<tbody>
						<tr className="0">
							<td className="0" onClick={this.GunClick}>{this.RenderGameField(this.state.field[0][0])}</td>
							<td className="1" onClick={this.GunClick}>{this.RenderGameField(this.state.field[0][1])}</td>
							<td>{this.RenderGameField(this.state.field[0][2])}</td>
							<td>{this.RenderGameField(this.state.field[0][3])}</td>
							<td>{this.RenderGameField(this.state.field[0][4])}</td>
							<td>{this.RenderGameField(this.state.field[0][5])}</td>
							<td>{this.RenderGameField(this.state.field[0][6])}</td>
							<td>{this.RenderGameField(this.state.field[0][7])}</td>
							<td>{this.RenderGameField(this.state.field[0][8])}</td>
							<td>{this.RenderGameField(this.state.field[0][9])}</td>
						</tr>
						<tr className="1">
							<td className="0" onClick={this.GunClick}>{this.RenderGameField(this.state.field[1][0])}</td>
							<td className="1">{this.RenderGameField(this.state.field[1][1])}</td>
							<td>{this.RenderGameField(this.state.field[1][2])}</td>
							<td>{this.RenderGameField(this.state.field[0][3])}</td>
							<td>{this.RenderGameField(this.state.field[0][4])}</td>
							<td>{this.RenderGameField(this.state.field[0][5])}</td>
							<td>{this.RenderGameField(this.state.field[0][6])}</td>
							<td>{this.RenderGameField(this.state.field[0][7])}</td>
							<td>{this.RenderGameField(this.state.field[0][8])}</td>
							<td>{this.RenderGameField(this.state.field[0][9])}</td>
						</tr>
					</tbody>
				</table>
			</>
		);
	}
}

export default GameField;