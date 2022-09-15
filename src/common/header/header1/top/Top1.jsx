import React from 'react';
import AccountDetails from './accountDetail/AccountDetails';
import CallUs from './companyContact/CallUs';
import Support from './support/Support';
const Top1 = () => {
	return (
		<div className="header-top">
			<div className="container">
				<div className="row">
					<Support />
					<CallUs />
					<AccountDetails />
				</div>
			</div>
		</div>
	)
}

export default Top1