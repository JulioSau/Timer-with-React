import React from "react";
import PropTypes from "prop-types";

export default function BoxCounter(props) {
	return (
		<div className="col-1 py-3 mr-3 bg-dark rounded d-flex justify-content-center border border-white">
			<h1 className="text-white ">{props.clock}</h1>
		</div>
	);
}

BoxCounter.propTypes = {
	clock: PropTypes.number
};
