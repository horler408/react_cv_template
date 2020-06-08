import React, { Component } from 'react';


class LanguageHobbiesSkillsCertificateCheck extends Component {
	state = {
		langError: '',
		hobbyError: '',
		skillsError: '',
		certError: ''
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
			langError: '',
			hobbyError: '',
			skillsError: '',
			certError: ''		
		}


		if (!fields.lang) {
			isValid = false
			errors.langError = "*Please check at least one item"
		}

		if (!fields.hobby) {
			isValid = false
			errors.hobbyError = "*Please check at least one item"
		}

		if (!fields.skills) {
			isValid = false
			errors.skillsError = "*Please check at least one item"
		}

		if (!fields.cert) {
			isValid = false
			errors.certError = "*Please check at least one item"
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
			alert("Check all the neccessary fields");
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
						<h5>Language Spoken<span className="errorMsg"> *</span></h5>
						<div className="errorMsg">{this.state.langError}</div>
						<div className="form-check">
							<input 
							type="checkbox" 
							className="form-check-input" 
							id="arabic"
							value="Arabic"
							onChange={handleChange("lang")} />
							<label className="form-check-label" htmlFor="arabic">Arabic</label>
						</div>
						<div className="form-check">
							<input 
							type="checkbox" 
							className="form-check-input" 
							id="africans"
							value="Africans"
							onChange={handleChange("lang")} />
							<label className="form-check-label" htmlFor="africans">Africans</label>
						</div>
						<div className="form-check">
							<input 
							type="checkbox" 
							className="form-check-input" 
							id="english"
							value="English"
							onChange={handleChange("lang")} />
							<label className="form-check-label" htmlFor="english">English</label>
						</div>
						<div className="form-check">
							<input 
							type="checkbox" 
							className="form-check-input" 
							id="french"
							value="French"
							onChange={handleChange("lang")} />
							<label className="form-check-label" htmlFor="french">French</label>
						</div>
						<div className="form-check">
							<input 
							type="checkbox" 
							className="form-check-input" 
							id="german"
							value="German"
							onChange={handleChange("lang")} />
							<label className="form-check-label" htmlFor="german">German</label>
						</div>
						<div className="form-check">
							<input 
							type="checkbox" 
							className="form-check-input" 
							id="hausa"
							value="Hausa"
							onChange={handleChange("lang")} />
							<label className="form-check-label" htmlFor="hausa">Hausa</label>
						</div>
						<div className="form-check">
							<input 
							type="checkbox" 
							className="form-check-input" 
							id="igbo"
							value="Igbo"
							onChange={handleChange("lang")} />
							<label className="form-check-label" htmlFor="igbo">Igbo</label>
						</div>
						<div className="form-check">
							<input 
							type="checkbox" 
							className="form-check-input" 
							id="port"
							value="Portuguese"
							onChange={handleChange("lang")} />
							<label className="form-check-label" htmlFor="port">Portuguese</label>
						</div>
						<div className="form-check">
							<input 
							type="checkbox" 
							className="form-check-input" 
							id="yoruba"
							value="Yoruba"
							onChange={handleChange("lang")} />
							<label className="form-check-label" htmlFor="yoruba">Yoruba</label>
						</div>
					</div>
					<div className="form-group col-12 col-lg-6">
						<h5>Favorite Hobbies<span className="errorMsg"> *</span></h5>
						<div className="errorMsg">{this.state.hobbyError}</div>
						<div className="form-check">
							<input 
							type="checkbox" 
							className="form-check-input" 
							id="reading"
							value="Reading"
							onChange={handleChange("hobby")} />
							<label className="form-check-label" htmlFor="reading">Reading</label>
						</div>
						<div className="form-check">
							<input 
							type="checkbox" 
							className="form-check-input" 
							id="swimming"
							value="Swimming"
							onChange={handleChange("hobby")} />
							<label className="form-check-label" htmlFor="swimming">Swimming</label>
						</div>
						<div className="form-check">
							<input 
							type="checkbox" 
							className="form-check-input" 
							id="footbal"
							value="Playing Footbal"
							onChange={handleChange("hobby")} />
							<label className="form-check-label" htmlFor="footbal">Playing Football</label>
						</div>
						<div className="form-check">
							<input 
							type="checkbox" 
							className="form-check-input" 
							id="games"
							value="Video Games"
							onChange={handleChange("hobby")} />
							<label className="form-check-label" htmlFor="games">Video Games</label>
						</div>
						<div className="form-check">
							<input 
							type="checkbox" 
							className="form-check-input" 
							id="party"
							value="Partying"
							onChange={handleChange("hobby")} />
							<label className="form-check-label" htmlFor="party">Partying</label>
						</div>
						<div className="form-check">
							<input 
							type="checkbox" 
							className="form-check-input" 
							id="movies"
							value="Watching Movies"
							onChange={handleChange("hobby")} />
							<label className="form-check-label" htmlFor="movies">Watching Movies</label>
						</div>
						<div className="form-check">
							<input 
							type="checkbox" 
							className="form-check-input" 
							id="travel"
							value="Travelling"
							onChange={handleChange("hobby")} />
							<label className="form-check-label" htmlFor="travel">Travelling</label>
						</div>
						<div className="form-check">
							<input 
							type="checkbox" 
							className="form-check-input" 
							id="friends"
							value="Meeting Friends"
							onChange={handleChange("hobby")} />
							<label className="form-check-label" htmlFor="friends">Meeting Friends</label>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="form-group col-12 col-lg-6">
						<h5>Skills Acquired<span className="errorMsg"> *</span></h5>
						<div className="errorMsg">{this.state.skillsError}</div>
						<div className="form-check">
							<input 
							type="checkbox" 
							className="form-check-input" 
							id="java"
							value="java"
							onChange={handleChange("skills")} />
							<label className="form-check-label" htmlFor="java">Java Technology</label>
						</div>
						<div className="form-check">
							<input 
							type="checkbox" 
							className="form-check-input" 
							id="windows"
							value="Windows Appreciation"
							onChange={handleChange("skills")} />
							<label className="form-check-label" htmlFor="windows">Windows Appreciation</label>
						</div>
						<div className="form-check">
							<input 
							type="checkbox" 
							className="form-check-input" 
							id="desktop"
							value="Desktop Publishing"
							onChange={handleChange("skills")} />
							<label className="form-check-label" htmlFor="desktop">Desktop Publishing</label>
						</div>
						<div className="form-check">
							<input 
							type="checkbox" 
							className="form-check-input" 
							id="offices"
							value="Ms Offices"
							onChange={handleChange("skills")} />
							<label className="form-check-label" htmlFor="offices">Ms Offices</label>
						</div>
						<div className="form-check">
							<input 
							type="checkbox" 
							className="form-check-input" 
							id="photoshop"
							value="Photoshop"
							onChange={handleChange("skills")} />
							<label className="form-check-label" htmlFor="photoshop">Photoshop Design</label>
						</div>
						<div className="form-check">
							<input 
							type="checkbox" 
							className="form-check-input" 
							id="adobe"
							value="Adobe Illustrator"
							onChange={handleChange("skills")} />
							<label className="form-check-label" htmlFor="adobe">Adobe Illustrator</label>
						</div>
						<div className="form-check">
							<input 
							type="checkbox" 
							className="form-check-input" 
							id="website"
							value="Website Design"
							onChange={handleChange("skills")} />
							<label className="form-check-label" htmlFor="website">Website Design</label>
						</div>
						<div className="form-check">
							<input 
							type="checkbox" 
							className="form-check-input" 
							id="frontend"
							value="Frontend Development"
							onChange={handleChange("skills")} />
							<label className="form-check-label" htmlFor="frontend">Frontend Development</label>
						</div>
						<div className="form-check">
							<input 
							type="checkbox" 
							className="form-check-input" 
							id="backend"
							value="Backend Development"
							onChange={handleChange("backend")} />
							<label className="form-check-label" htmlFor="backend">Backend Development</label>
						</div>
						<div className="form-check">
							<input 
							type="checkbox" 
							className="form-check-input" 
							id="database"
							value="Database Admistration"
							onChange={handleChange("skills")} />
							<label className="form-check-label" htmlFor="database">Database Development</label>
						</div>
					</div>
					<div className="form-group col-12 col-lg-6">
						<label>Other Skills</label>
						<input 
							className="form-control"
							type="text"
							value="otherSkills"
							placeholder="Other Skills Not Specified"
							onChange={handleChange('otherSkills')}
							value={values.otherSkills}
						/>
					</div>
				</div>

				<div className="row">
					<div className="form-group col-12 col-lg-6">
						<h5>Professional Certification<span className="errorMsg"> *</span></h5>
						<div className="errorMsg">{this.state.certError}</div>
						<div className="form-check">
							<input 
							type="checkbox" 
							className="form-check-input" 
							id="ccna"
							value="CCNA Certification"
							onChange={handleChange("cert")} />
							<label className="form-check-label" htmlFor="ccna">CCNA</label>
						</div>
						<div className="form-check">
							<input 
							type="checkbox" 
							className="form-check-input" 
							id="ccnp"
							value="CCNP Certification"
							onChange={handleChange("cert")} />
							<label className="form-check-label" htmlFor="ccnp">CCNP</label>
						</div>
						<div className="form-check">
							<input 
							type="checkbox" 
							className="form-check-input" 
							id="ccie"
							value="CCIE Certification"
							onChange={handleChange("cert")} />
							<label className="form-check-label" htmlFor="ccie">CCIE</label>
						</div>
						<div className="form-check">
							<input 
							type="checkbox" 
							className="form-check-input" 
							id="aplus"
							value="Comptia A+"
							onChange={handleChange("cert")} />
							<label className="form-check-label" htmlFor="aplus">Comptia A+</label>
						</div>
						<div className="form-check">
							<input 
							type="checkbox" 
							className="form-check-input" 
							id="Comptia N+"
							value="nplus"
							onChange={handleChange("cert")} />
							<label className="form-check-label" htmlFor="nplus">Comptia N+</label>
						</div>
						<div className="form-check">
							<input 
							type="checkbox" 
							className="form-check-input" 
							id="dbAdmin"
							value="Database Administrator"
							onChange={handleChange("cert")} />
							<label className="form-check-label" htmlFor="dbAdmin">Database Administrator</label>
						</div>
						<div className="form-check">
							<input 
							type="checkbox" 
							className="form-check-input" 
							id="linus"
							value="Linus Plus"
							onChange={handleChange("cert")} />
							<label className="form-check-label" htmlFor="linus">Linus Plus</label>
						</div>
						<div className="form-check">
							<input 
							type="checkbox" 
							className="form-check-input" 
							id="front"
							value="Frontend Expert"
							onChange={handleChange("cert")} />
							<label className="form-check-label" htmlFor="front">Frontend Expert</label>
						</div>
						<div className="form-check">
							<input 
							type="checkbox" 
							className="form-check-input" 
							id="back"
							value="Backend Expert"
							onChange={handleChange("cert")} />
							<label className="form-check-label" htmlFor="back">Backend Expert</label>
						</div>
					</div>
					<div className="form-group col-12 col-lg-6">
						<label>Other Certification</label>
						<input 
							className="form-control"
							type="text"
							value="otherCert"
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

export default LanguageHobbiesSkillsCertificateCheck;