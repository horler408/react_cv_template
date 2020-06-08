import React, { Component } from 'react';


class Referees extends Component {
	state = {
		ref1Error: '',
		refAdd1Error: '',
		refPhone1Error: '',
		refEmail1Error: '',
		ref2Error: '',
		refAdd2Error: '',
		refPhone2Error: '',
		refEmail2Error: '',
		ref3Error: '',
		refAdd3Error: '',
		refPhone3Error: '',
		refEmail3Error: ''
	}

	continue = e => {
		e.preventDefault();
		this.props.nextStep();
	}

	back = e => {
		e.preventDefault();
		this.props.prevStep();
	}


	validate = () => {
		let fields = this.props.values
		let isValid = true;
		const errors = {
			ref1Error: '',
			refAdd1Error: '',
			refPhone1Error: '',
			refEmail1Error: '',
			ref2Error: '',
			refAdd2Error: '',
			refPhone2Error: '',
			refEmail2Error: '',
			ref3Error: '',
			refAdd3Error: '',
			refPhone3Error: '',
			refEmail3Error: ''
		}


		if (!fields.ref1) {
			isValid = false
			errors.ref1Error = "*Please enter your referee's name"
		}

		if (!fields.refAdd1) {
			isValid = false
			errors.refAdd1Error = "*This field is neccessary" 
		}

		if (!fields.refEmail1.includes('@')) {
			isValid = false
			errors.refEmail1Error = "*Invalid or empty email address"
		}

		if(typeof fields.refPhone1 !== "undefined") {
			if (!fields.refPhone1.match(/^[0-9]{11}$/)) {
				isValid = false
				errors.refPhone1Error = "Enter a valid Phone Number"
			}
		}

		if (!fields.ref2) {
			isValid = false
			errors.ref2Error = "*Please enter your referee's name"
		}

		if (!fields.refAdd2) {
			isValid = false
			errors.refAdd2Error = "*This field is neccessary"
		}

		if (!fields.refEmail2.includes('@')) {
			isValid = false
			errors.refEmail2Error = "*Invalid or empty email address"
		}

		if(typeof fields.refPhone2 !== "undefined") {
			if (!fields.refPhone2.match(/^[0-9]{11}$/)) {
				isValid = false
				errors.refPhone2Error = "Enter a valid Phone Number"
			}
		}

		if (!fields.ref3) {
			isValid = false
			errors.ref3Error = "*Please enter your referee's name"
		}

		if (!fields.refAdd3) {
			isValid = false
			errors.refAdd3Error = "*This field is neccessary"
		}

		if (!fields.refEmail3.includes('@')) {
			isValid = false
			errors.refEmail3Error = "*Invalid or empty email address"
		}

		if(typeof fields.refPhone3 !== "undefined") {
			if (!fields.refPhone3.match(/^[0-9]{11}$/)) {
				isValid = false
				errors.refPhone3Error = "Enter a valid Phone Number"
			}
		}

		this.setState({
			...this.state,
			...errors
		})


		return isValid
	}

	handleSubmit = (e) => {
		e.preventDefault();
		if (this.validate()) {
			this.props.nextStep();
		}
		else {
			alert("Fill all the neccessary fields");
		}
	}

	render() {
		const { values, handleChange } = this.props;

		return (
			<div className="App">
				<h1>Referees</h1>
				<div className="infoMsg">All Fields With * Are Compulsory</div>
				<div className="row">
					<div className="form-group col-12 col-lg-6">
						<label>Referee 1<span className="errorMsg"> *</span></label> 
						<input
							className="form-control"
							type="text"
							name="ref1"
							placeholder="Enter Your Referee Name"
							onChange={handleChange('ref1')}
							value={values.ref1}
						/>
						<div className="errorMsg">{this.state.ref1Error}</div>	
					</div>
					<div className="form-group col-12 col-lg-6">
						<label>Contact Address of Referee<span className="errorMsg"> *</span></label> 
						<input
							className="form-control"
							type="text"
							name="refAdd1"
							placeholder="Enter Your Referee Name"
							onChange={handleChange('refAdd1')}
							value={values.refAdd1}
						/>
						<div className="errorMsg">{this.state.refAdd1Error}</div>	
					</div>
				</div>

				<div className="row">
					<div className="form-group col-12 col-lg-6">
						<label>Referee Phone Number<span className="errorMsg"> *</span></label> 
						<input
							className="form-control"
							type="text"
							name="ref1"
							placeholder="Phone Number"
							onChange={handleChange('refPhone1')}
							value={values.refPhone1}
						/>
						<div className="errorMsg">{this.state.refPhone1Error}</div>	
					</div>
					<div className="form-group col-12 col-lg-6">
						<label>Referee Email Address<span className="errorMsg"> *</span></label> 
						<input
							className="form-control"
							type="email"
							name="refEmail1"
							placeholder="Enter Your Referee Name"
							onChange={handleChange('refEmail1')}
							value={values.refEmail1}
						/>
						<div className="errorMsg">{this.state.refEmail1Error}</div>	
					</div>
				</div>				
					
				<div className="row">
					<div className="form-group col-12 col-lg-6">
						<label>Referee 2<span className="errorMsg"> *</span></label> 
						<input
							className="form-control"
							type="text"
							name="ref2"
							placeholder="Enter Your Referee Name"
							onChange={handleChange('ref2')}
							value={values.ref2}
						/>
						<div className="errorMsg">{this.state.ref2Error}</div>	
					</div>
					<div className="form-group col-12 col-lg-6">
						<label>Contact Address of Referee<span className="errorMsg"> *</span></label> 
						<input
							className="form-control"
							type="text"
							name="refAdd2"
							placeholder="Enter Your Referee Name"
							onChange={handleChange('refAdd2')}
							value={values.refAdd2}
						/>
						<div className="errorMsg">{this.state.refAdd2Error}</div>	
					</div>
				</div>

				<div className="row">
					<div className="form-group col-12 col-lg-6">
						<label>Referee Phone Number<span className="errorMsg"> *</span></label> 
						<input
							className="form-control"
							type="text"
							name="ref2"
							placeholder="Phone Number"
							onChange={handleChange('refPhone2')}
							value={values.refPhone2}
						/>
						<div className="errorMsg">{this.state.refPhone2Error}</div>	
					</div>
					<div className="form-group col-12 col-lg-6">
						<label>Referee Email Address<span className="errorMsg"> *</span></label> 
						<input
							className="form-control"
							type="email"
							name="refEmail2"
							placeholder="Email  Address"
							onChange={handleChange('refEmail2')}
							value={values.refEmail2}
						/>
						<div className="errorMsg">{this.state.refEmail2Error}</div>	
					</div>
				</div>
										
				<div className="row">
					<div className="form-group col-12 col-lg-6">
						<label>Referee 3<span className="errorMsg"> *</span></label> 
						<input
							className="form-control"
							type="text"
							name="ref3"
							placeholder="Enter Your Referee Name"
							onChange={handleChange('ref3')}
							value={values.ref3}
						/>
						<div className="errorMsg">{this.state.ref3Error}</div>	
					</div>
					<div className="form-group col-12 col-lg-6">
						<label>Contact Address of Referee<span className="errorMsg"> *</span></label> 
						<input
							className="form-control"
							type="text"
							name="refAdd3"
							placeholder="Enter Your Referee Name"
							onChange={handleChange('refAdd3')}
							value={values.refAdd3}
						/>
						<div className="errorMsg">{this.state.refAdd3Error}</div>	
					</div>
				</div>

				<div className="row">
					<div className="form-group col-12 col-lg-6">
						<label>Referee Phone Number<span className="errorMsg"> *</span></label> 
						<input
							className="form-control"
							type="text"
							name="ref3"
							placeholder="Phone Number"
							onChange={handleChange('refPhone3')}
							value={values.refPhone3}
						/>
						<div className="errorMsg">{this.state.refPhone3Error}</div>	
					</div>
					<div className="form-group col-12 col-lg-6">
						<label>Referee Email Address<span className="errorMsg"> *</span></label> 
						<input
							className="form-control"
							type="email"
							name="refEmail3"
							placeholder="Email  Address"
							onChange={handleChange('refEmail3')}
							value={values.refEmail3}
						/>
						<div className="errorMsg">{this.state.refEmail3Error}</div>	
					</div>
				</div>
				
				<div className="row"> 
					<div className="col-12 col-lg-6 my-2"> 
						<button 
							className="btn btn-primary w-100 font-weight-bolder"
							type="submit"
							onClick={this.handleSubmit}>
							Continue
						</button>
					</div>
					<div className="col-12 col-lg-6 my-2"> 
						<button 
							className="btn btn-light w-100 font-weight-bolder"
							type="submit"
							onClick={this.back}>
							Back
						</button>
					</div>
				</div>

				<div className="font-weight-bolder text-center mt-3">Page {this.props.page} of 6</div>
			</div>
		);
	}
}

export default Referees;