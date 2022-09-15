import React from 'react'
import CompanyContact from './contactWithCompany/CompanyContact'
import FindbycatAndCustomer from './findbycatAndCustomerCare/FindbycatAndCustomer'
import MobileApp from './mobileApp/MobileApp'
import SignUp from './signUp/SignUp';
const FooterUp = () => {
  return (
    <footer  className='style2' style={{ backgroundImage: `url(${require("../../../assets/images/slider/bg-ft.jpg")})`}} >
      <div className="container">
        <div className="row">
          <CompanyContact />
          <FindbycatAndCustomer />
          <SignUp />
        </div>
        <MobileApp />
      </div>
    </footer>
  )
}

export default FooterUp