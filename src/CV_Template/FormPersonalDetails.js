import React, { Component } from 'react';


export class FormPersonalDetails extends Component {
	state = {
		careerObjError: '',
		contactError: '',
		maritalStatusError: '',
		nationalityError: '',
		stateOfOriginError: '',
		localGovtError: '',
		religionError: ''
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
			careerObjError: '',
			contactError: '',
			maritalStatusError: '',
			nationalityError: '',
			stateOfOriginError: '',
			localGovtError: '',
			religionError: ''
		}


		if (!fields.careerObj) {
			isValid = false
			errors.careerObjError = "*This field is neccessary"
		}

		if (!fields.contact) {
			isValid = false
			errors.contactError = "*This fields is neccessary"
		}

		if (!fields.maritalStatus) {
			isValid = false
			errors.maritalStatusError = "This field is neccessary"
		}

		if (!fields.nationality) {
			isValid = false
			errors.nationalityError = "This field is neccessary"
		}

		if (!fields.stateOfOrigin) {
			isValid = false
			errors.stateOfOriginError = "This field is neccessary"
		}

		if (!fields.localGovt) {
			isValid = false
			errors.localGovtError = "This field is neccessary"
		}

		if (!fields.religion) {
			isValid = false
			errors.religionError = "This field is neccessary"
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
				<h1>User Personal Details</h1>
				<div className="infoMsg">All Fields With * Are Compulsory</div>
				<div className="form-group">
					<label>Career Objectives<span className="errorMsg"> *</span></label>
					<textarea 
						className="form-control"
						placeholder="Describe Your Career Objectives"
						onChange={handleChange('careerObj')}
						value={values.careerObj}>
					</textarea>
					<div className="errorMsg">{this.state.careerObjError}</div>
				</div>

				<div className="row">
					<div className="form-group col-12 col-lg-6">
						<label>Contact Address<span className="errorMsg"> *</span></label>
						<input
							name="contactAddress"
							className="form-control" 
							placeholder="e.g 5 Mafoluku street Anthony Village, Ikeja, Lagos state."
							onChange={handleChange('contact')}
							value={values.contact}
						/>
						<div className="errorMsg">{this.state.contactError}</div>
					</div>
					<div className="form-group col-12 col-lg-6">
						<label>Marital Status<span className="errorMsg"> *</span></label>
						<select className="form-control"
							onChange={handleChange('maritalStatus')}>
							<option value="">--Choose--</option>
							<option value="Single">Single</option>
							<option value="Married">Married</option>
							<option value="Divorced">Divorced</option>
						</select>
						<div className="errorMsg">{this.state.maritalStatusError}</div>
					</div>
				</div>

				<div className="row">	
					<div className="form-group col-12 col-lg-6">
						<label>Nationality<span className="errorMsg"> *</span></label>
						<input
							name="nationality"
							className="form-control" 
							placeholder="Enter Your Countryof Origin"
							onChange={handleChange('nationality')}
							value={values.nationality}
						/>
						<div className="errorMsg">{this.state.nationalityError}</div>
					</div>
					<div className="form-group col-12 col-lg-6">
						<label>State of Origin<span className="errorMsg"> *</span></label>
						<input
							name="stateOfOrigin"
							className="form-control" 
							placeholder="Enter Your State of Origin"
							onChange={handleChange('stateOfOrigin')}
							value={values.stateOfOrigin}
						/>
						<div className="errorMsg">{this.state.stateOfOriginError}</div>
					</div>
				</div>

				<div className="row">
					<div className="form-group col-12 col-lg-6">
						<label>Local Government<span className="errorMsg"> *</span></label>
						<input
							name="localGovt"
							className="form-control" 
							placeholder="Enter Your Local Government Of Origin"
							onChange={handleChange('localGovt')}
							value={values.localGovt}
						/>
						<div className="errorMsg">{this.state.localGovtError}</div>
					</div>
					
					<div className="form-group col-12 col-lg-6">
						<label>Religion<span className="errorMsg"> *</span></label>
						<select className="form-control"
							onChange={handleChange('religion')}>
							<option value="">--Choose--</option>
							<option value="Islam">Islam</option>
							<option value="Christianity">Christianity</option>
							<option value="Traditionalist">Traditionalist</option>
						</select>
						<div className="errorMsg">{this.state.religionError}</div>
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

export default FormPersonalDetails;