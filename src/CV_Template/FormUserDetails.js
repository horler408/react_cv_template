import React, { Component } from 'react';


class FormUserDetails extends Component {
	state = {
		firstNameError: '',
		middleNameError: '',
		lastNameError: '',
		genderError: '',
		emailError: '',
		phoneNumberError: '',
		dobError: '',
		pobError: ''		
	}

	continue = e => {
		e.preventDefault();
		this.props.nextStep();
	}

	validate = () => {
		let fields = this.props.values
		let isValid = true;
		const errors = {
			firstNameError: '',
			middleNameError: '',
			lastNameError: '',
			genderError: '',
			emailError: '',
			phoneNumberError: '',
			dobError: '',
			pobError: ''
		}


		if (!fields.firstName) {
			isValid = false
			errors.firstNameError = "*Please Enter Your First Name";
		}

		if (!fields.middleName) {
			isValid = false
			errors.middleNameError = "*Please Enter Your Middle Name";
		}

		if (!fields.lastName) {
			isValid = false
			errors.lastNameError = "*Please Enter Your Last Name";
		}

		if (!fields.gender) {
			isValid = false
			errors.genderError = "*This field is neccessary";
		}

		if (!fields.email.includes('@')) {
			isValid = false
			errors.emailError = "*Invalid or Empty Email";
		}

		/*if (!fields.phoneNumber) {
			isValid = false
			errors.phoneNumberError = "*Please Enter Your Mobile Number";
		}*/
		if(typeof fields.phoneNumber !== "undefined") {
			if (!fields.phoneNumber.match(/^[0-9]{11}$/)) {
				isValid = false
				errors.phoneNumberError = "Enter a valid Phone Number"
			}
		}

		if (!fields.dob) {
			isValid = false
			errors.dobError = "*This field is neccessary";
		}

		if (!fields.pob) {
			isValid = false
			errors.pobError = "*This field is neccessary";
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
		 {
			alert("Fill all the neccessary fields");
		}
	}


	render() {
		const { values, handleChange } = this.props;

		return (
			<React.Fragment>
				<div className="intro">
					<p>
					Welcome to my resume builder's site. Feel free 
					to submitting your neccessary details and have your		
					professional resume delivered to your finger tips ...Dev Olaitan Abdulazeez
					</p>
				</div>
				<br/>
				<div className="App">
					<h1>User Information Details</h1>
					<div className="infoMsg">All Fields With * Are Compulsory</div>
					<div className="row">
						<div className="form-group col-12 col-lg-6">
							<label>First Name<span className="errorMsg"> *</span></label>
							<input
								className="form-control"
								type="text"
								name="firstName"  
								placeholder="Enter Your First Name"
								onChange={handleChange('firstName')}
								value={values.firstName}
							/>
							<div className="errorMsg">{this.state.firstNameError}</div>
						</div>	
						<div className="form-group col-12 col-lg-6">
							<label>Last Name<span className="errorMsg"> *</span></label>
							<input
								className="form-control"
								type="text"
								name="lastName"  
								placeholder="Enter Your Last Name"
								onChange={handleChange('lastName')}
								value={values.lastName}
							/>
							<div className="errorMsg">{this.state.lastNameError}</div>
						</div>
					</div>

					<div className="row">
						<div className="form-group col-12 col-lg-6">
							<label>Middle Name<span className="errorMsg"> *</span></label>
							<input
								className="form-control"
								type="text"
								required
								name="middleName"  
								placeholder="Enter Your Other Names"
								onChange={handleChange('middleName')}
								value={values.middleName}
							/>
							<div className="errorMsg">{this.state.middleNameError}</div>
						</div>

						<div className="form-group col-12 col-lg-6">
							<label>Gender<span className="errorMsg"> *</span></label>
							<select className="form-control" 
								onChange={handleChange('gender')} required>
								<option value="">--Choose--</option>
								<option name="Male" value="Male">Male</option>
								<option name="Female" value="Female">Female</option>
								<option name="Bi-sexual" value="Bi-sexual">Bi-sexual</option>
							</select>
							<div className="errorMsg">{this.state.genderError}</div>
						</div>
					</div>

					<div className="row">
						<div className="form-group col-12 col-lg-6">
							<label>Email<span className="errorMsg"> *</span></label>
							<input
								className="form-control"
								type="email"
								required
								name="email"  
								placeholder="Enter Your Email"
								onChange={handleChange('email')}
								value={values.email}
							/>
							<div className="errorMsg">{this.state.emailError}</div>
						</div>
						<div className="form-group col-12 col-lg-6">
							<label>Phone Number<span className="errorMsg"> *</span></label>
							<input
								className="form-control"
								type="text"
								required
								name="phoneNumber"  
								placeholder="Enter Your Mobile Number"
								onChange={handleChange('phoneNumber')}
								value={values.phoneNumber}
							/>
							<div className="errorMsg">{this.state.phoneNumberError}</div>
						</div>
					</div>

					<div className="row">
						<div className="form-group col-12 col-lg-6">
							<label>Date of Birth<span className="errorMsg"> *</span></label>
							<input
								className="form-control"
								type="date"
								required
								name="dob"  
								onChange={handleChange('dob')}
								value={values.dob}
							/>
							<div className="errorMsg">{this.state.dobError}</div>
						</div>
						<div className="form-group col-12 col-lg-6">
							<label>Place of Birth<span className="errorMsg"> *</span></label>
							<input
								className="form-control"
								type="text"
								required
								name="pob"  
								placeholder="Enter Your Place of Birth"
								onChange={handleChange('pob')}
								value={values.pob}
							/>
							<div className="errorMsg">{this.state.pobError}</div>
						</div>
					</div>

					<div> 
						<button 
							className="btn btn-primary w-100 font-weight-bolder"
							type="submit"
							onClick={this.handleSubmit}>
							Continue
						</button>
					</div>

					<div className="font-weight-bolder text-center mt-3">Page {this.props.page} of 6</div>
				</div>
			</React.Fragment>
		);
	}
}

export default FormUserDetails;