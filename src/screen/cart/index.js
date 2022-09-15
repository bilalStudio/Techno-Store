import React from 'react';
import Container from '../../common/container/Container';
import Feactures from '../../common/feactures/Feactures';
import CartTotal from '../../components/cart/cartTotal/CartTotal';
import Coupon from '../../components/cart/coupon/Coupon';
import ProductList from '../../components/cart/productDataTable/ProductList';

function Cart() {
	return (
		<Container>
			<section className="flat-shop-cart">
				<div className="container">
					<div className="row">
						<div className="col-lg-8">
							<div className="flat-row-title style1">
								<h3>Shopping Cart</h3>
							</div>
							<div className="table-cart">
								<table>
									<thead>
										<tr>
											<th>Product</th>
											<th>Quantity</th>
											<th>Total</th>
											<th></th>
										</tr>
									</thead>
									<tbody>
										<ProductList
											img={require('../../assets/images/product/other/12.jpg')}
											title={'Apple iPad Mini'}
											price={'$1,250.00'}
											total={'$6,250.00'}
										/>
										<ProductList
											img={require('../../assets/images/product/other/11.jpg')}
											title={'Beats Pill+ Portable'}
											price={'$1,250.00'}
											total={'$6,250.00'}
										/>
									</tbody>
								</table>
								<Coupon />
							</div>
						</div>
						<CartTotal />
					</div>
				</div>
			</section>
			<Feactures />
		</Container>
	);
}

export default Cart;
