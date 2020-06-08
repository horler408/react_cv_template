import React, { Component } from 'react';


export class Education extends Component {
	state = {
		priSchError: '',
		priCertError: '',
		priStartError: '',
		priEndError: '',
		secSchError: '',
		secCertError: '',
		secStartError: '',
		secEndError: '',
		tertSchError: '',
		terCertError: '',
		courseError: '',
		gradeError: '',
		tertStartError: '',
		tertEndError: ''
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
			priSchError: '',
			priCertError: '',
			priStartError: '',
			priEndError: '',
			secSchError: '',
			secCertError: '',
			secStartError: '',
			secEndError: '',
			tertSchError: '',
			terCertError: '',
			courseError: '',
			gradeError: '',
			tertStartError: '',
			tertEndError: ''	
		}


		if (!fields.priSch) {
			isValid = false
			errors.priSchError = "*This field is neccessary"
		}

		if (!fields.priCert) {
			isValid = false
			errors.priCertError = "*This field is neccessary"
		}

		if (!fields.priStart) {
			isValid = false
			errors.priStartError = "*This field is neccessary"
		}

		if (!fields.priEnd) {
			isValid = false
			errors.priEndError = "*This field is neccessary"
		}

		if (!fields.secSch) {
			isValid = false
			errors.secSchError = "*This field is neccessary"
		}

		if (!fields.secCert) {
			isValid = false
			errors.secCertError = "*This field is neccessary"
		}

		if (!fields.secStart) {
			isValid = false
			errors.secStartError = "*This field is neccessary"
		}

		if (!fields.secEnd) {
			isValid = false
			errors.secEndError = "*This field is neccessary"
		}

		if (!fields.tertSch) {
			isValid = false
			errors.tertSchError = "*This field is neccessary"
		}

		if (!fields.tertCert) {
			isValid = false
			errors.terCertError = "*This field is neccessary"
		}

		if (!fields.course) {
			isValid = false
			errors.courseError = "*This field is neccessary"
		}

		if (!fields.grade) {
			isValid = false
			errors.gradeError = "*This field is neccessary"
		}

		if (!fields.tertStart) {
			isValid = false
			errors.tertStartError = "*This field is neccessary"
		}

		if (!fields.tertEnd) {
			isValid = false
			errors.tertEndError = "*This field is neccessary"
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
				<h1>Education Background</h1>
				<div className="infoMsg">All Fields With * Are Compulsory</div>
				<div className="row">
					<div className="form-group col-12 col-lg-6">
						<label>Primary School Attended<span className="errorMsg"> *</span></label>
						<input
							className="form-control"
							type="text"
							name="priSch"
							onChange={handleChange('priSch')}
							value={values.priSch}
						/>
						<div className="errorMsg">{this.state.priSchError}</div>
					</div>
					<div className="form-group col-12 col-lg-6">
						<label>Certificate Obtained<span className="errorMsg"> *</span></label>
						<select 
							className="form-control" onChange={handleChange('priCert')} >
							<option value="">--Choose--</option>
							<option value="School Leaving Certificate">School leaving</option>
							<option value="Kindergarteen">Kindergarteen</option>
							<option value="Nursery">Nursery peers</option>
						</select>
						<div className="errorMsg">{this.state.priCertError}</div>
					</div>
				</div>

				<div className="row">
					<div className="form-group col-12 col-lg-6">
						<label>Start Date<span className="errorMsg"> *</span></label>
						<input
						className="form-control"
							type="date"
							name="priStart"
							onChange={handleChange('priStart')}
							value={values.priStart}
						/>
						<div className="errorMsg">{this.state.priStartError}</div>
					</div>
					<div className="form-group col-12 col-lg-6">
						<label>End Date<span className="errorMsg"> *</span></label>
						<input
							className="form-control"
							type="date"
							name="priEnd"
							onChange={handleChange('priEnd')}
							value={values.priEnd}
						/>
						<div className="errorMsg">{this.state.priEndError}</div>
					</div>
				</div>
					
				<div className="row">
					<div className="form-group col-12 col-lg-6">
						<label>Secondary School Attended<span className="errorMsg"> *</span></label>
						<input
							className="form-control"
							type="text"
							name="secSch"
							onChange={handleChange('secSch')}
							value={values.secSch}
						/>
						<div className="errorMsg">{this.state.secSchError}</div>
					</div>
					<div className="form-group col-12 col-lg-6">
						<label>Certificate Obtained<span className="errorMsg"> *</span></label>
						<select 
							className="form-control" onChange={handleChange('secCert')} >
							<option value="">--Choose--</option>
							<option value="Senior Secondary Certificate Examination (WAEC)">SSCE (WAEC)</option>
							<option value="Senior Secondary Certificate Examination (NECO)">SSCE (NECO)</option>
							<option value="Basic Examination Certificate Examination (NECO)">BECE (NECO)</option>
							<option value="Basic Examination Certificate Examination (State)">BECE (State)</option>
							<option value="Private WASSCE">Private WASSCE</option>
							<option value="Private NECO">Private NECO</option>
							<option value="NABTEB">NABTEB</option>
						</select>
						<div className="errorMsg">{this.state.secCertError}</div>
					</div>
				</div>
					
				<div className="row">
					<div className="form-group col-12 col-lg-6">
						<label>Start Date<span className="errorMsg"> *</span></label>
						<input
						className="form-control"
							type="date"
							name="secStart"
							onChange={handleChange('secStart')}
							value={values.secStart}
						/>
						<div className="errorMsg">{this.state.secStartError}</div>
					</div>
					<div className="form-group col-12 col-lg-6">
						<label>End Date<span className="errorMsg"> *</span></label>
						<input
							className="form-control"
							type="date"
							name="secEnd"
							onChange={handleChange('secEnd')}
							value={values.secEnd}
						/>
						<div className="errorMsg">{this.state.secEndError}</div>
					</div>
				</div>
					
				<div className="row">
					<div className="form-group col-12 col-lg-6">
						<label>University/Polytechnic Attended<span className="errorMsg"> *</span></label>
						<input
							className="form-control"
							type="text"
							name="tertSch"
							onChange={handleChange('tertSch')}
							value={values.tertSch}
						/>
						<div className="errorMsg">{this.state.tertSchError}</div>
					</div>
					<div className="form-group col-12 col-lg-6">
						<label>Course of Study<span className="errorMsg"> *</span></label>
						<input
							className="form-control"
							type="text"
							name="course"
							onChange={handleChange('course')}
							value={values.course}
						/>
						<div className="errorMsg">{this.state.courseError}</div>
					</div>
				</div>

				<div className="row">	
					<div className="form-group col-12 col-lg-6">
						<label>Certificate Obtained<span className="errorMsg"> *</span></label>
						<select 
							className="form-control" onChange={handleChange('tertCert')} >
							<option value="">--Choose--</option>
							<option value="B.sc">B.sc</option>
							<option value="B.eng">B.Eng</option>
							<option value="B.ed">B.Ed</option>
							<option value="HND">HND</option>
							<option value="OND">OND</option>
							<option value="IJMB">IJMB</option>
							<option value="Canbridge">Canbridge</option>
						</select>
						<div className="errorMsg">{this.state.terCertError}</div>
					</div>

					<div className="form-group col-12 col-lg-6">
						<label>Grade Obtained<span className="errorMsg"> *</span></label>
						<select 
							className="form-control" onChange={handleChange('grade')} >
							<option value="">--Choose--</option>
							<option value="First Class">First Class</option>
							<option value="Second Class Upper">Second Class (Upper Division)</option>
							<option value="Second Class Lower">Second Class (Lower Division)</option>
							<option value="Distinction">Distinction</option>
							<option value="Upper Credit">Upper Credit</option>
							<option value="Lower Credit">Lower Credit</option>
							<option value="Pass">Pass</option>
						</select>
						<div className="errorMsg">{this.state.gradeError}</div>
					</div>
				</div>

				<div className="row">
					<div className="form-group col-12 col-lg-6">
						<label>Start Date<span className="errorMsg"> *</span></label>
						<input
							className="form-control"
							type="date"
							name="tertStart"
							onChange={handleChange('tertStart')}
							value={values.tertStart}
						/>
						<div className="errorMsg">{this.state.tertStartError}</div>
					</div>

					<div className="form-group col-12 col-lg-6">
						<label>End Date<span className="errorMsg"> *</span></label>
						<input
							className="form-control"
							type="date"
							name="tertEnd"
							onChange={handleChange('tertEnd')}
							value={values.tertEnd}
						/>
						<div className="errorMsg">{this.state.tertEndError}</div>
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

export default Education;