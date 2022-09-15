import React from 'react'
import { Link } from 'react-router-dom';
import CategoryDetail from '../../../categoryDetail/CategoryDetail';
const CategoryMenu = (props) => {
	return (
		<div id="mega-menu" className={props.className}>
			<div className="btn-mega"><span></span>ALL CATEGORIES</div>
			<ul className="menu">
				<li>
					<Link to="#" title="" className="dropdown">
						<span className="menu-img">
							<img src={require('../../../../../assets/images/icons/menu/01.png')} alt="" />
						</span>
						<span className="menu-title">
							Laptops & Mac
						</span>
					</Link>

					<CategoryDetail />
				</li>
				<li>
					<Link to="#" title="" className="dropdown">
						<span className="menu-img">
							<img src={require('../../../../../assets/images/icons/menu/02.png')} alt="" />
						</span>
						<span className="menu-title">
							Mobile & Tablet
						</span>
					</Link>
					<CategoryDetail />
				</li>
				<li>
					<Link to="#" title="" className="dropdown">
						<span className="menu-img">
							<img src={require('../../../../../assets/images/icons/menu/03.png')} alt="" />
						</span>
						<span className="menu-title">
							Home Devices
						</span>
					</Link>
					<CategoryDetail />
				</li>
				<li>
					<Link to="#" title="">
						<span className="menu-img">
							<img src={require('../../../../../assets/images/icons/menu/04.png')} alt="" />
						</span>
						<span className="menu-title">
							Software
						</span>
					</Link>
				</li>
				<li>
					<Link to="#" title="">
						<span className="menu-img">
							<img src={require('../../../../../assets/images/icons/menu/05.png')} alt="" />
						</span>
						<span className="menu-title">
							TV & Audio
						</span>
					</Link>
				</li>
				<li>
					<Link to="#" title="">
						<span className="menu-img">
							<img src={require('../../../../../assets/images/icons/menu/06.png')} alt="" />
						</span>
						<span className="menu-title">
							Sports & Fitness
						</span>
					</Link>
				</li>
				<li>
					<Link to="#" title="" className="dropdown">
						<span className="menu-img">
							<img src={require('../../../../../assets/images/icons/menu/07.png')} alt="" />
						</span>
						<span className="menu-title">
							Games & Toys
						</span>
					</Link>
					<CategoryDetail />
				</li>
				<li>
					<Link to="#" title="">
						<span className="menu-img">
							<img src={require('../../../../../assets/images/icons/menu/08.png')} alt="" />
						</span>
						<span className="menu-title">
							Video Cameras
						</span>
					</Link>
				</li>
				<li>
					<Link to="#" title="" className="dropdown">
						<span className="menu-img">
							<img src={require('../../../../../assets/images/icons/menu/09.png')} alt="" />
						</span>
						<span className="menu-title">
							Accessories
						</span>
					</Link>
					<CategoryDetail />
				</li>
				<li>
					<Link to="#" title="" className="dropdown">
						<span className="menu-img">
							<img src={require('../../../../../assets/images/icons/menu/10.png')} alt="" />
						</span>
						<span className="menu-title">
							Security
						</span>
					</Link>

					<CategoryDetail />
				</li>
			</ul>
		</div>
	)
}

export default CategoryMenu