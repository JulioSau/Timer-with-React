import React from "react";
import BoxCounter from "./boxCounter";
import Reloj from "./Reloj";
//include images into your bundle

//create your first component
export class Counter extends React.Component {
	constructor() {
		super();
		this.state = {
			count: 0,
			count2: 0,
			count3: 0,
			count4: 0,
			count5: 0,
			count6: 0
		};
	}
	componentDidMount() {
		setInterval(() => {
			this.setState({ count: this.state.count + 1 });
			if (this.state.count == 10) {
				this.setState({ count: 0, count2: this.state.count2 + 1 });
			}
			if (this.state.count2 == 10) {
				this.setState({ count2: 0, count3: this.state.count3 + 1 });
			}
			if (this.state.count3 == 10) {
				this.setState({ count3: 0, count4: this.state.count4 + 1 });
			}
			if (this.state.count4 == 10) {
				this.setState({ count4: 0, count5: this.state.count5 + 1 });
			}
			if (this.state.count5 == 10) {
				this.setState({ count5: 0, count6: this.state.count6 + 1 });
			}
		}, 1000);
	}
	render() {
		return (
			<div className="container">
				<div className="row justify-content-center py-2 bg-secondary">
					<Reloj />
					<BoxCounter clock={this.state.count6} />
					<BoxCounter clock={this.state.count5} />
					<BoxCounter clock={this.state.count4} />
					<BoxCounter clock={this.state.count3} />
					<BoxCounter clock={this.state.count2} />
					<BoxCounter clock={this.state.count} />
				</div>
			</div>
		);
	}
}
