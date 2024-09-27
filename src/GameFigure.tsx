import * as React from 'react';


class GameFigure extends React.Component<any, any>
{
	indexTd: any;

	constructor(props: any)
	{
		super(props);
		this.state = { figure: props.value };
		this.indexTd = props.index;
		this.indexTd += ' border border-black p-0 text-center';
	}

	RenderGameFigure = (cellValue: number) =>
	{
		switch (cellValue)
		{
			case 0:
				return <span className='opacity-0 p-0 m-0' >&#9744;</span>;
			case 1:
				return <span className='p-0 m-0' style={{ width: 25, height: 25 }}>&#9744;</span>;
			case 2:
				
				return <span className='p-0 m-0'>&#9746;</span>;
			case 3:
				return <span className='p-0 m-0'>&#9737;</span>;
		}
	}

	GunClick = (eventClick: any) =>
	{
		let y = eventClick.currentTarget.classList[0];
		let x = eventClick.currentTarget.parentElement.classList[0];

		let xhr = new XMLHttpRequest();
		xhr.open("POST", "https://localhost:7028/Data", false);
		xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		xhr.send(JSON.stringify({ "x": x, "y": y }));

		this.setState({ figure: JSON.parse(xhr.response) });

	}

	onFigurChange = () =>
	{
		switch(this.state.figure)
		{
		case 2:
			alert("Попал");
			// messeng.innerHTML += "<div>Попал</div>";
			break;
		case 3:
			alert("Промох");
			// messeng.innerHTML += "<div>Промох</div>";
			break;
		}
	}

	render()
	{
		return (
			<>
				<td className={this.indexTd} style={{ width: 25 }} onClick={this.GunClick}>{this.RenderGameFigure(this.state.figure)}</td>
				{this.onFigurChange()}
			</>
		);
	}
}

export default GameFigure;