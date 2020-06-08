import React, { Component } from 'react';

class FinalPage extends Component {

	handlePrint = () => {
		window.print();
	}

	render() {
		const { values } = this.props

		let firstName = values.firstName.toUpperCase();
		let middleName = values.middleName.toUpperCase();
		let lastName = values.lastName.toUpperCase();

		return (
			<div className="my-2 py-2">
				<button 
				className="btn btn-success print"
				onClick={this.handlePrint}
				>Print
				</button>

				<h1 className="text-center">{`${lastName} ${firstName} ${middleName}`}</h1>

				<div className="text-center font-weight-bold">
					{values.contact}
				</div>
				<p className="text-center"><i className="fa fa-envelope"></i>Email: {values.email}</p>
				<p className="text-center"><i className="fa fa-phone"></i>Phone: {values.phoneNumber}</p>

				<div className="shadow-large">
					<div className="career">
						<h4 className="bg-dark sub-heading py-1">CAREER OBJECTIVES</h4>
						<p>{values.careerObj}</p>
					</div>

					<div className="personal">
						<h4 className="bg-dark sub-heading py-2">PERSONAL INFO</h4>
						<p><span className="font-weight-bold">Date of birth:</span> {values.dob}</p>
						<p><span className="font-weight-bold">Place of birth:</span> {values.pob}</p>
						<p><span className="font-weight-bold">Gender:</span> {values.gender}</p>
						<p><span className="font-weight-bold">Marital Status:</span> {values.maritalStatus}</p>
						<p><span className="font-weight-bold">Nationality:</span> {values.nationality}</p>
						<p><span className="font-weight-bold">Religion:</span> {values.religion}</p>
						<p><span className="font-weight-bold">tate of Origin:</span> {values.stateOfOrigin}</p>
						<p><span className="font-weight-bold">Local Government Area:</span> {values.localGovt}</p> 
					</div>
				
					
					<div className="institution">
						<h4 className="bg-dark sub-heading py-1">INSTITUTION ATTEDNDED WITH DATES</h4>
						<p className=""> {`${values.tertSch} (${values.tertStart} - ${values.tertEnd})`}</p>
						<p className=""> {`${values.secSch} (${values.secStart} - ${values.secEnd})`}</p>
						<p className=""> {`${values.priSch} (${values.priStart} - ${values.priEnd})`}</p>
					</div>

					<div className="qualification">
						<h4 className="bg-dark sub-heading py-1">EDUCATIONAL QUALIFICATIONS WITH DATES</h4>
						<p>{`${values.tertCert}, ${values.grade} (${values.course}) - ${values.tertStart} to ${values.tertEnd}`}</p>
						<p>{`${values.secCert} - ${values.secStart} to ${values.secEnd}`}</p>
						<p>{`${values.priCert} - ${values.priStart} to ${values.priEnd}`}</p>
					</div>

					<div className="experience">
						<h4 className="bg-dark sub-heading py-1">WORKING EXPERIENCE WITH DATES</h4>
						<div>
							<p>{`${values.emp} - ${values.empStart} to ${values.empEnd}`}</p>
							<p><span className="font-weight-bold">Position Held:</span> {values.pos}</p>
						</div>
						<div>
							<p>{`${values.empTwo} - ${values.empTwoStart} to ${values.empTwoEnd}`}</p>
							<p><span className="font-weight-bold">Position Held:</span> {values.posTwo}</p>
						</div>
						<div>
							<p>{`${values.empThree} - ${values.empThreeStart} to ${values.empThreeEnd}`}</p>
							<p><span className="font-weight-bold">Position Held:</span> {values.posThree}</p>
						</div>
					</div>

					<div className="skills">
						<h4 className="bg-dark sub-heading py-1">TECHNICAL SKILLS ACQUIRED</h4>
						<p><span className="font-weight-bold">Skills Acquired Are:</span> {values.skills}</p>
						<p><span className="font-weight-bold">Certification Obtained Are:</span> {values.cert}</p>
					</div>
					<div className="hobbies">
						<h4 className="bg-dark sub-heading py-1">FAVORITE HOBBIES</h4>
						<p><span className="font-weight-bold">My Hobbies Are</span>: {values.hobby} </p>
					</div>
					<div className="languages">
						<h4 className="bg-dark sub-heading py-1">LANGUAGE SPOKEN</h4>
						<p><span className="font-weight-bold">Lanuage Spoken Are</span>: {values.lang} </p>
					</div>
					<div className="referees">
						<h4 className="bg-dark sub-heading py-1">REFEREES</h4>
						<div className="referee 1">
							<p><strong>{values.ref1}</strong></p>
							<p>{values.refAdd1}</p>
							<p>{`${values.refEmail1}, ${values.refPhone1}`}</p>
						</div>
						<div className="referee 2">
							<p><strong>{values.ref2}</strong></p>
							<p>{values.refAdd2}</p>
							<p>{`${values.refEmail2}, ${values.refPhone2}`}</p>
						</div>
						<div className="referee 3">
							<p><strong>{values.ref3}</strong></p>
							<p>{values.refAdd3}</p>
							<p>{`${values.refEmail3}, ${values.refPhone3}`}</p>
						</div>
					</div>
				</div>	
			</div>
		); 
	}
}

export default FinalPage;