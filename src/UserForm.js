import React from 'react';
import FormUserDetails from './CV_Template/FormUserDetails.js';
import FormPersonalDetails from './CV_Template/FormPersonalDetails.js';
import Education from './CV_Template/Education.js';
import Employment from './CV_Template/Employment.js';
import LanguageHobbiesSkillsCertification from './CV_Template/LanguageHobbiesSkillsCertification.js';
import Referees from './CV_Template/Referees.js'
import Confirm from './CV_Template/Confirm.js';
import SuccessPage from './CV_Template/SuccessPage.js';
import ErrorPage from './CV_Template/ErrorPage.js';
import FinalPage from './CV_Template/FinalPage.js';


class UserForm extends React.Component {

	state = {
		step: 1,
		firstName: '',middleName: '',lastName: '',phoneNumber: '',email: '',dob: '',pob: '',
		contact: '',careerObj: '',gender: '',maritalStatus: '',nationality: '',stateOfOrigin: '',localGovt: '',religion: '',
		priSch: '',secSch: '',priCert: '',secCert: '',priStart: '',secStart: '',priEnd: '',secEnd: '',
		tertSch: '',course: '',grade: '',tertCert: '',tertStart: '',tertEnd: '',
		emp: '',pos: '',empStart: '',empEnd: '',empTwo: '', posTwo: '',empTwoStart: '',empTwoEnd: '',empThree: '', 
		posThree: '',empThreeStart: '',empThreeEnd: '', lang: '', hobby: '', skills: '', otherSkills: '', cert: '', otherCert: '',
		ref1: '', refAdd1: '', refPhone1: '', refEmail1: '', ref2: '', refAdd2: '', refPhone2: '', refEmail2: '',
		ref3: '', refAdd3: '', refPhone3: '', refEmail3: ''
	}

	//Proceed To the next Step
	nextStep = () => {
		const {step} = this.state;
		this.setState({
			step: step + 1
		});
	}

	//GO back to Prev Step
	prevStep = () => {
		const {step} = this.state;
		this.setState({
			step: step - 1
		});
	}

	//To Handle Fields Change
	handleChange = input => e => {
		//const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
		this.setState({[input]: e.target.value});
	}

	render() {
		const {step} = this.state;
		const { firstName, middleName, lastName, phoneNumber, email, contact, careerObj, 
			dob, pob, gender, maritalStatus, nationality, stateOfOrigin, localGovt, religion, 
			priSch, secSch, priCert, secCert, priStart, priEnd, secStart, secEnd, tertSch, 
			tertCert, course, grade, tertStart, tertEnd, emp, pos, empStart, empEnd, empTwo, 
			posTwo, empTwoStart, empTwoEnd, empThree, posThree, empThreeStart, empThreeEnd, 
			lang, hobby, skills, otherSkills, cert, otherCert, ref1, refAdd1, refPhone1, refEmail1, 
			ref2, refAdd2, refPhone2, refEmail2, ref3, refAdd3, refPhone3, refEmail3 } = this.state;

		const values = { firstName, middleName, lastName, phoneNumber, email, contact, careerObj, 
			dob, pob, gender, maritalStatus, nationality, stateOfOrigin, localGovt, religion, 
			priSch, secSch, priCert, secCert, priStart, priEnd, secStart, secEnd, tertSch, 
			tertCert, course, grade, tertStart, tertEnd, emp, pos, empStart, empEnd, empTwo, 
			posTwo, empTwoStart, empTwoEnd, empThree, posThree, empThreeStart, empThreeEnd,
			lang, hobby, skills, otherSkills, cert, otherCert, ref1, refAdd1, refPhone1, refEmail1, 
			ref2, refAdd2, refPhone2, refEmail2, ref3, refAdd3, refPhone3, refEmail3 };


		switch(step) {
			case 1:
				return (
					<FormUserDetails
						nextStep={this.nextStep}
						handleChange={this.handleChange}
						values = {values}
						page = {this.state.step}
					/>
				);

			case 2:
				return (
					<FormPersonalDetails
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						handleChange={this.handleChange}
						values = {values}
						validateForm={this.validateForm}
						page = {this.state.step}
					/>
				);

			case 3:
				return (
					<Education
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						handleChange={this.handleChange}
						values = {values}
						page = {this.state.step}
					/>
				);

			case 4: 
				return (
					<Employment
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						handleChange={this.handleChange}
						values = {values}
						page = {this.state.step}
					/>
				)

			case 5:
				return (
					<LanguageHobbiesSkillsCertification
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						handleChange={this.handleChange}
						values = {values}
						page = {this.state.step}
					/>
				);

			case 6: 
				return (
					<Referees
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						handleChange={this.handleChange}
						values = {values}
						page = {this.state.step}
					/>
				);

			case 7:
				return (
					<Confirm
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						values = {values}
					/>
				);

			case 8:
				return (
					<SuccessPage 
						nextStep={this.nextStep}
					/>
				);

			case 9:
				return (
						<FinalPage 
							nextStep={this.nextStep}
							values={values}
						/>
					); 

			default:
				return (<ErrorPage />);
		}
	}
}

export default UserForm