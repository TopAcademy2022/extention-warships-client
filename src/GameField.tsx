import * as React from 'react';
import Figure from './GameFigure';


class GameField extends React.Component<any, any>
{
	field: any;
	indexTr: any;

	constructor(props: any)
	{
		super(props);
		this.field = props.value;
		this.indexTr = props.index;
	}

	render()
	{
		return (
			<>
				<tr className={this.indexTr}>
					<Figure value={this.field[0]} index={0} />
					<Figure value={this.field[1]} index={1} />
					<Figure value={this.field[2]} index={2} />
					<Figure value={this.field[3]} index={3} />
					<Figure value={this.field[4]} index={4} />
					<Figure value={this.field[5]} index={5} />
					<Figure value={this.field[6]} index={6} />
					<Figure value={this.field[7]} index={7} />
					<Figure value={this.field[8]} index={8} />
					<Figure value={this.field[9]} index={9} />
				</tr>
			</>
		);
	}
}

export default GameField;