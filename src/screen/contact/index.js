import React from 'react';
import CompanyContactInfo from '../../components/contact/companyInfo/CompanyContactInfo';
import ContactMap from '../../components/contact/map/ContactMap';
import ContactForm from '../../components/contact/userInfo/ContactForm';
import Container from '../../common/container/Container';

const Contact = () => {
  return (
      <Container>
        <ContactMap />
        <section className="flat-contact style2">
          <div className="container">
            <div className="row">
              <ContactForm />
              <CompanyContactInfo />
            </div>
          </div>
        </section>
      </Container>
  )
}

export default Contact