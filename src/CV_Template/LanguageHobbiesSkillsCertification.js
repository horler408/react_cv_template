import React, { Component } from 'react';


class Language extends Component {
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


		if (!fields.lang) {
			isValid = false
		}

		if (!fields.hobby) {
			isValid = false
		}

		if (!fields.skills) {
			isValid = false
		}

		if (!fields.cert) {
			isValid = false
		}


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
				<h1>Language, Hobbies, Skills and Certification</h1>
				<div className="infoMsg">All Fields With * Are Compulsory</div>
				<div className="row">
					<div className="form-group col-12 col-lg-6">
						<label>Language Spoken<span className="errorMsg"> *</span></label>
						<select 
							className="form-control" onChange={handleChange('lang')} multiple required >
							<option value="">--None--</option>
							<option value="Igbo">Igbo</option>
							<option value="Hausa">Hausa</option>
							<option value="Yoruba">Yoruba</option>
							<option value="English">English</option>
							<option value="French">French</option>
							<option value="Arabic">Arabic</option>
							<option value="Africans">Africans</option>
							<option value="German">German</option>
							<option	value="Spanish">Spanish</option>
							<option value="Portugese">Portugese</option>
						</select>
					</div>
					<div className="form-group col-12 col-lg-6">
						<label>Hobbies<span className="errorMsg"> *</span></label>
						<select 
							className="form-control" onChange={handleChange('hobby')} multiple required>
							<option value="">--None--</option>
							<option value="Reading">Reading</option>
							<option value="Swimming">Swimmig</option>
							<option value="Playing">Playing Football</option>
							<option value="Partying">Partying</option>
							<option value="Video Games">Video Games</option>
							<option value="Movies">Movies</option>
							<option value="Meeting Friends">Meeting Friends</option>
							<option value="Travelling">Travelling</option>
							<option value="Sleeping">Sleeping</option>
							<option value="Cooking">Cooking</option>
						</select>
					</div>
				</div>

				<div className="row">
					<div className="form-group col-12 col-lg-6">
						<label>Skills Acquired<span className="errorMsg"> *</span></label>
						<select 
							className="form-control" onChange={handleChange('skills')} multiple required>
							<option value="">--None--</option>
							<option value="Java">Java Technology</option>
							<option value="Windows Appreciation">Window Appreciation</option>
							<option value="Desktop Publishing">Desktop Publishing</option>
							<option value="Ms Offices">Ms Offices</option>
							<option value="Photoshop Design">Photoshop Design</option>
							<option value="Adobe illustrator">Adobe illustrator</option>
							<option value="Website">Website Design</option>
							<option value="Front-end Development">Front-end Development</option>
							<option value="Back-end Development">Back-end Development</option>
							<option value="Database Management">Database Management</option>
							<option value="Mobile Devop">Mobile Devop</option>
						</select>
					</div>
					<div className="form-group col-12 col-lg-6">
						<label>Other Skills</label>
						<input 
							className="form-control"
							type="text"
							name="otherSkills"
							placeholder="Other Skills Not Specified"
							onChange={handleChange('otherSkills')}
							value={values.otherSkills}
						/>
					</div>
				</div>

				<div className="row">
					<div className="form-group col-12 col-lg-6">
						<label>Certification Obtained<span className="errorMsg"> *</span></label>
						<select 
							className="form-control" onChange={handleChange('cert')} multiple required>
							<option value="">--None--</option>
							<option name="CCNA" value="CCNA">CCNA</option>
							<option name="CCNP" value="CCNP">CCNP</option>
							<option name="Comptia A+" value="Comptia A+">Comptia A+</option>
							<option name="Comptia N+" value="Comptia N+">Comptia N+</option>
							<option name="Oracle Database Administrator" value="Oracle Database Administrator">Oracle Database Administrator</option>
							<option name="Linus" value="Linus">Linus Plus</option>
							<option name="CCIE" value="CCIE">CCIE</option>
						</select>
					</div>
					<div className="form-group col-12 col-lg-6">
						<label>Other Certification</label>
						<input 
							className="form-control"
							type="text"
							name="otherCert"
							placeholder="Other Certification Not Specified"
							onChange={handleChange('otherCert')}
							value={values.otherCert}
						/>
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
		)
	}
}

export default Language;