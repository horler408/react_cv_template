import React, { Component } from 'react';


class Confirm extends Component {
	
	continue = e => {
		e.preventDefault();
		//PROCESS FORM
		this.props.nextStep();
	}

	back = e => {
		e.preventDefault();
		this.props.prevStep();
	}

	handleMultiples = () => {

	}


	render() {
		let { values: {firstName, middleName, lastName, phoneNumber, email, contact, careerObj, 
			dob, pob, gender, maritalStatus, nationality, stateOfOrigin, localGovt, religion, 
			priSch, secSch, priCert, secCert, priStart, priEnd, secStart, secEnd, tertSch, 
			tertCert, course, grade, tertStart, tertEnd, emp, pos, empStart, empEnd, empTwo, 
			posTwo, empTwoStart, empTwoEnd, empThree, posThree, empThreeStart, empThreeEnd,
			lang, hobby, skills, otherSkills, cert, otherCert, ref1, refAdd1, refPhone1, refEmail1, 
			ref2, refAdd2, refPhone2, refEmail2, ref3, refAdd3, refPhone3, refEmail3}} = this.props;

		firstName = firstName.toUpperCase();
		middleName = middleName.toUpperCase();
		lastName = lastName.toUpperCase();
		return (
			<div className="App">				
					<h1>Confirm Your Details</h1>
					<ul className="">
						<li className="list-item">
							Surname: {lastName}
						</li>

						<li className="list-item">
							First Name: {firstName}
						</li>

						<li className="list-item">
							Other Name: {middleName}
						</li>

						<li className="list-item">
							Phone Number: {phoneNumber}
						</li>

						<li className="list-item">
							Email: {email}
						</li>
						<hr/>
						<br/>
						<li className="list-item">
							Contact Address: {contact}
						</li>
						
						<li className="list-item">
							Objectives: {careerObj}
						</li>

						<li className="list-item">
							Marital Status: {maritalStatus}
						</li>

						<li className="list-item">
							Date of Birth: {dob}
						</li>

						<li className="list-item">
							Place of Birth: {pob}
						</li>

						<li className="list-item">
							Country: {nationality}
						</li>

						<li className="list-item">
							State of Origin: {stateOfOrigin}
						</li>

						<li className="list-item">
							Local Government: {localGovt}
						</li>

						<li className="list-item">
							Gender: {gender}
						</li>

						<li className="list-item">
							Religion: {religion}
						</li>
						<hr/>
						<br/>
						<li className="list-item">
							Primary School Attended: {priSch}
						</li>

						<li className="list-item">
							Primary School Certificate Obtained: {priCert}
						</li>

						<li className="list-item">
							Primary School Start Date: {priStart}
						</li>

						<li className="list-item">
							Primary School End Date: {priEnd}
						</li>
						<hr/>
						<br/>
						<li className="list-item">
							Secondary School Attended: {secSch}
						</li>

						<li className="list-item">
							Secondary School Certificate Obtained: {secCert}
						</li>

						<li className="list-item">
							Secondary School Start Date: {secStart}
						</li>

						<li className="list-item">
							Secondary School End Date: {secEnd}
						</li>
						<hr/>
						<br/>
						<li className="list-item">
							University/Polytechnic Attended: {tertSch}
						</li>

						<li className="list-item">
							Tertiary School Certificate Obtained: {tertCert}
						</li>

						<li className="list-item">
							Course of Study: {course}
						</li>

						<li className="list-item">
							Grade Obtained: {grade}
						</li>

						<li className="list-item">
							Tertiary School Start Date: {tertStart}
						</li>

						<li className="list-item">
							 Tertiary School End Date: {tertEnd}
						</li>
						<hr/>
						<br/>
						<li className="list-item">
							Organisation One: {emp}
						</li>

						<li className="list-item">
							Role of Employment One: {pos}
						</li>

						<li className="list-item">
							Employment One Satrt Date: {empStart}
						</li>

						<li className="list-item">
							Employment One End Date: {empEnd}
						</li>
						<hr/>
						<br/>
						<li className="list-item">
							Organisation Two: {empTwo}
						</li>

						<li className="list-item">
							Role of Employment Two: {posTwo}
						</li>

						<li className="list-item">
							Employment Two Satrt Date: {empTwoStart}
						</li>

						<li className="list-item">
							Employment Two End Date: {empTwoEnd}
						</li>
						<hr/>
						<br/>
						<li className="list-item">
							Organisation Three: {empThree}
						</li>

						<li className="list-item">
							Role of Employment Three: {posThree}
						</li>

						<li className="list-item">
							Employment Three Satrt Date: {empThreeStart}
						</li>

						<li className="list-item">
							Employment Three End Date: {empThreeEnd}
						</li>
						<hr/>
						<br/>
						<li className="list-item">
							Language Spoken: {lang}
						</li>

						<li className="list-item">
							Hobbies: {hobby}
						</li>

						<li className="list-item">
							Skills Acquired: {skills}
						</li>

						<li className="list-item">
							Other Skills Acquired: {otherSkills}
						</li>

						<li className="list-item">
							Professional Certification: {cert}
						</li>

						<li className="list-item">
							Other Professional Certification: {otherCert}
						</li>
						<hr/>
						<br/>
						<li className="list-item">
							Referee One: {ref1}
						</li>

						<li className="list-item">
							Referee Contact Address: {refAdd1}
						</li>

						<li className="list-item">
							Referee Phone Number: {refPhone1}
						</li>

						<li className="list-item">
							Referee Email Address: {refEmail1}
						</li>
						<hr/>
						<br/>
						<li className="list-item">
							Referee Two: {ref2}
						</li>

						<li className="list-item">
							Referee Contact Address: {refAdd2}
						</li>

						<li className="list-item">
							Referee Phone Number: {refPhone2}
						</li>

						<li className="list-item">
							Referee Email Address: {refEmail2}
						</li>
						<hr/>
						<br/>
						<li className="list-item">
							Referee Three: {ref3}
						</li>

						<li className="list-item">
							Referee Contact Address: {refAdd3}
						</li>

						<li className="list-item">
							Referee Phone Number: {refPhone3}
						</li>

						<li className="list-item">
							Referee Email Address: {refEmail3}
						</li>
					</ul>
				
					<div className="row"> 
						<div className="col-12 col-lg-6 my-2"> 
							<button 
								className="btn btn-primary w-100 font-weight-bolder"
								type="submit"
								onClick={this.continue}>
								Confirm & Submit
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
			</div>
		)
	}
}


export default Confirm;