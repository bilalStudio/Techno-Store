import React from 'react'
import { Link } from 'react-router-dom';
import CategoryMenu from './categoryMenu/CategoryMenu';
import MainMenu from './mainMenu/MainMenu';
const Bottom1 = (props) => {
  return (
    <div className="header-bottom">
					<div className="container">
						<div className="row">
							<div className="col-md-3 col-2">
								<CategoryMenu className={props.className} />
							</div>
							<div className="col-md-9 col-10">
								<MainMenu/>
								<div className="today-deal">
									<Link to="#" title="">TODAY DEALS</Link>
								</div>
								<div className="btn-menu">
									<span></span>
								</div>
							</div>
						</div>
					</div>
				</div>
    
  )
}

export default Bottom1