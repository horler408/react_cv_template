import React, { Component } from 'react';


class Employment extends Component {
	state = {
		empError: '',
		posError: '',
		empStartError: '',
		empEndError: '',
		empTwoError: '',
		posTwoError: '',
		empTwoStartError: '',
		empTwoEndError: '',
		empThreeError: '',
		posThreeError: '',
		empThreeStartError: '',
		empThreeEndError: ''
	}

	continue = e => {
		e.preventDefault();
		this.props.nextStep();
	}

	back = e => {
		e.preventDefault();
		this.props.prevStep();
	}

	addButton = () => {

	}

	validate = () => {
		let fields = this.props.values
		let isValid = true;
		const errors = {
			empError: '',
			posError: '',
			empStartError: '',
			empEndError: '',
			empTwoError: '',
			posTwoError: '',
			empTwoStartError: '',
			empTwoEndError: '',
			empThreeError: '',
			posThreeError: '',
			empThreeStartError: '',
			empThreeEndError: ''
		}


		if (!fields.emp) {
			isValid = false
			errors.empError = "*Please enter your employment details"
		}

		if (!fields.pos) {
			isValid = false
			errors.posError = "*This field is neccessary"
		}

		if (!fields.empStart) {
			isValid = false
			errors.empStartError = "*This field is neccessary"	
		}

		if (!fields.empEnd) {
			isValid = false
			errors.empEndError = "*This field is neccessary"
		}

		if (!fields.empTwo) {
			isValid = false
			errors.empTwoError = "*This field is neccessary"
		}

		if (!fields.posTwo) {
			isValid = false
			errors.posTwoError = "*This field is neccessary"
		}

		if (!fields.empTwoStart) {
			isValid = false
			errors.empTwoStartError = "*This field is neccessary"
		}

		if (!fields.empTwoEnd) {
			isValid = false
			errors.empTwoEndError = "*This field is neccessary"
		}

		if (!fields.empThree) {
			isValid = false
			errors.empThreeError = "*This field is neccessary"
		}

		if (!fields.posThree) {
			isValid = false
			errors.posThreeError = "*This field is neccessary"
		}

		if (!fields.empThreeStart) {
			isValid = false
			errors.empThreeStartError = "*This field is neccessary"
		}

		if (!fields.empThreeEnd) {
			isValid = false
			errors.empThreeEndError = "*This field is neccessary"
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
				<h1>Employment history</h1>
				<div className="infoMsg">All Fields With * Are Compulsory</div>
				<div className="row">
					<div className="form-group col-12 col-lg-6">
						<label>Organisation 1<span className="errorMsg"> *</span></label> 
						<input
							className="form-control"
							type="text"
							name="emp" 
							onChange={handleChange('emp')}
							value={values.emp}
						/>
						<div className="errorMsg">{this.state.empError}</div>
					</div>
					<div className="form-group col-12 col-lg-6">
						<label>Role of Employment<span className="errorMsg"> *</span></label> 
						<input
							className="form-control"
							type="text"
							name="pos" 
							onChange={handleChange('pos')}
							value={values.pos}
						/>
						<div className="errorMsg">{this.state.posError}</div>
					</div>
				</div>

				<div className="row">
					<div className="form-group col-12 col-lg-6">
						<label>Employment Start Date<span className="errorMsg"> *</span></label> 
						<input
							className="form-control"
							type="date"
							name="empStart" 
							onChange={handleChange('empStart')}
							value={values.empStart}
						/>
						<div className="errorMsg">{this.state.empStartError}</div>
					</div>
					<div className="form-group col-12 col-lg-6">
						<label>Employment End Date<span className="errorMsg"> *</span></label> 
						<input
							className="form-control"
							type="date"
							name="empEnd" 
							onChange={handleChange('empEnd')}
							value={values.empEnd}
						/>
						<div className="errorMsg">{this.state.empEndError}</div>
					</div>
				</div>
					
				<div className="row">
					<div className="form-group col-12 col-lg-6">
						<label>Organisation 2<span className="errorMsg"> *</span></label> 
						<input
							className="form-control"
							type="text"
							name="empTwo" 
							onChange={handleChange('empTwo')}
							value={values.empTwo}
						/>
						<div className="errorMsg">{this.state.empTwoError}</div>
					</div>
					<div className="form-group col-12 col-lg-6">
						<label>Role of Employment<span className="errorMsg"> *</span></label> 
						<input
							className="form-control"
							type="text"
							name="posTwo" 
							onChange={handleChange('posTwo')}
							value={values.posTwo}
						/>
						<div className="errorMsg">{this.state.posTwoError}</div>
					</div>
				</div>

				<div className="row">
					<div className="form-group col-12 col-lg-6">
						<label>Employment Start Date<span className="errorMsg"> *</span></label> 
						<input
							className="form-control"
							type="date"
							name="empTwoStart" 
							onChange={handleChange('empTwoStart')}
							value={values.empTwoStart}
						/>
						<div className="errorMsg">{this.state.empTwoStartError}</div>
					</div>
					<div className="form-group col-12 col-lg-6">
						<label>Employment End Date<span className="errorMsg"> *</span></label> 
						<input
							className="form-control"
							type="date"
							name="empTwoEnd" 
							onChange={handleChange('empTwoEnd')}
							value={values.empTwoEnd}
						/>
						<div className="errorMsg">{this.state.empTwoError}</div>
					</div>
				</div>

				<div className="d-block">	
					<div className="row">
						<div className="form-group col-12 col-lg-6">
							<label>Organisation 3</label> 
							<input
								className="form-control"
								type="text"
								name="empThree" 
								onChange={handleChange('empThree')}
								value={values.empThree}
							/>
							<div className="errorMsg">{this.state.empThreeError}</div>
						</div>
						<div className="form-group col-12 col-lg-6">
							<label>Role of Employment</label> 
							<input
								className="form-control"
								type="text"
								name="posThree" 
								onChange={handleChange('posThree')}
								value={values.posThree}
							/>
							<div className="errorMsg">{this.state.posThreeError}</div>
						</div>
					</div>

					<div className="row">
						<div className="form-group col-12 col-lg-6">
							<label>Employment Start Date</label> 
							<input
								className="form-control"
								type="date"
								name="empThreeStart" 
								onChange={handleChange("empThreeStart")}
								value={values.empThreeStart}
							/>
							<div className="errorMsg">{this.state.empThreeStartError}</div>
						</div>
						<div className="form-group col-12 col-lg-6">
							<label>Employment End Date</label> 
							<input
								className="form-control"
								type="date"
								name="empThreeEnd" 
								onChange={handleChange('empThreeEnd')}
								value={values.empThreeEnd}
							/>
							<div className="errorMsg">{this.state.empThreeEndError}</div>
						</div>
					</div>
				</div>
					
				<div className="row"> 
					<div className="col-12 col-lg-6 my-2"> 
						<button 
							className="btn btn-primary w-100 font-weight-bolder"
							type="submit"
							onClick={this.continue}>
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

export default Employment;