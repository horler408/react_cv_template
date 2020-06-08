import React, { Component } from 'react';

class SuccessPage extends Component {

	continue = (e) => {
		e.preventDefault();
		this.props.nextStep();
	}

	render() {
		return (
			<div className="success w-75">
				<h2 className="text-center">Your response has been submitted successfully</h2>
				
				<center><button
					className="btn btn-light w-25 font-weight-bold"
					type="submit"
					onClick={this.continue}>
					View Your CV
				</button></center>
			</div>
		); 
	}
}

export default SuccessPage;