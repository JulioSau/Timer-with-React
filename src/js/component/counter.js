import React from "react";
import BoxCounter from "./boxCounter";
//include images into your bundle

//create your first component
export class Counter extends React.Component {
	constructor() {
		super();
		this.state = { count: 0, count2: 0 };
	}
	componentDidMount() {
		setInterval(() => {
			if (this.state.count == 9) {
				this.setState({ count: 0 });
				console.log(this.state.count);
			} else {
				this.setState({ count: this.state.count + 1 });
			}
		}, 1000);
		setInterval(() => {
			if (this.state.count2 == 9) {
				this.setState({ count2: 0 });
				console.log(this.state.count2);
			} else {
				this.setState({ count2: this.state.count2 + 1 });
			}
		}, 10000);
	}
	render() {
		return (
			<div className="container">
				<div className="row justify-content-center py-2 bg-dark">
					<BoxCounter />
					<BoxCounter />
					<BoxCounter />
					<BoxCounter />
					<BoxCounter />
					<BoxCounter clock={this.state.count2} />
					<BoxCounter clock={this.state.count} />
				</div>
			</div>
		);
	}
}
