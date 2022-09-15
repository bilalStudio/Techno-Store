import React from 'react';
import Bottom1 from './header1/bottom/Bottom1';
import BreadCrums from './header1/breadcrums/BreadCrums';
import Middle1 from './header1/middle/Middle1';
import Top1 from './header1/top/Top1';

const ContactHeader = (props) => {
	let bread='';
	if(!props.className){
		 bread=<BreadCrums />
	}
	
	return (
		<>
			<section id="header" className="header">
				<Top1 />
				<Middle1 />
				<Bottom1 className={props.className} />
			</section>
			{bread}
			
		</>

	);
}

export default ContactHeader;