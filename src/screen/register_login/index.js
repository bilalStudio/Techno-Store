import React from 'react';
import Container from '../../common/container/Container';
import Feactures from '../../common/feactures/Feactures';
import Login from '../../components/register_login/login/Login';
import Register from '../../components/register_login/register/Register';

const Registration = () => {
	return (
		<Container>
			<section className="flat-account background">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<Login />
						</div>
						<div className="col-md-6">
							<Register />
						</div>
					</div>
				</div>
			</section>
			<Feactures />
		</Container>
	);
}

export default Registration;