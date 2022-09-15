import React from 'react';
import Container from '../../common/container/Container';
import { Link } from 'react-router-dom';
import Feactures from '../../common/feactures/Feactures';
import OrderDetails from '../../components/checkout/orderDetails/OrderDetails';
import BillingForm from '../../components/checkout/billingFields/BillingForm';
import ShippingForm from '../../components/checkout/shippingFields/ShippingForm';
const CheckOut = () => {
	return (
		<Container>
			<section className="flat-checkout">
				<div className="container">
					<div className="row">
						<div className="col-md-7">
							<div className="box-checkout">
								<h3 className="title">Checkout</h3>
								<div className="checkout-login">
									Returning customer? <Link to="#" title="">Click here to login</Link>
								</div>
								<form action="#" method="get" className="checkout" >
									<BillingForm />
									<ShippingForm />
								</form>
							</div>
						</div>
						<OrderDetails />
					</div>
				</div>
			</section>
			<Feactures />
		</Container>
	);
}
export default CheckOut;