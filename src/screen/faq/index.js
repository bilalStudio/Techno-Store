import React from 'react';
import Container from '../../common/container/Container';
import Questions from '../../components/faq/questions/Questions';
function Faq() {
    return (
       <Container>
        <section className="flat-row flat-accordion">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="accordion">
							<div className="title">
								<h3>Answers to Your Questions</h3>
							</div>
							<Questions
							question={'What is your international returns policy?'}
							answer={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in accumsan dui. In hac habitasse platea dictumst. Donec sit amet auctor leo. Sed venenatis posuere risus quis dictum. Vivamus ullamcorper orci vitae eros tincidunt, a aliquet lacus dapibus. Sed consectetur, est vel tincidunt imperdiet, justo est dignissim lorem, nec tincidunt lacus lacus ac risus. Cras pretium enim nec vestibulum aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;'}
							/>
							<Questions
							question={'How can I find your international delivery policy?'}
							answer={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in accumsan dui. In hac habitasse platea dictumst. Donec sit amet auctor leo. Sed venenatis posuere risus quis dictum. Vivamus ullamcorper orci vitae eros tincidunt, a aliquet lacus dapibus. Sed consectetur, est vel tincidunt imperdiet, justo est dignissim lorem, nec tincidunt lacus lacus ac risus. Cras pretium enim nec vestibulum aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;'}
							/>
							<Questions
							question={"What should I do if my order hasn't been delivered yet? "}
							answer={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in accumsan dui. In hac habitasse platea dictumst. Donec sit amet auctor leo. Sed venenatis posuere risus quis dictum. Vivamus ullamcorper orci vitae eros tincidunt, a aliquet lacus dapibus. Sed consectetur, est vel tincidunt imperdiet, justo est dignissim lorem, nec tincidunt lacus lacus ac risus. Cras pretium enim nec vestibulum aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;'}
							/>
							<Questions
							question={"I'm an international customer, have you received my returned items?"}
							answer={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in accumsan dui. In hac habitasse platea dictumst. Donec sit amet auctor leo. Sed venenatis posuere risus quis dictum. Vivamus ullamcorper orci vitae eros tincidunt, a aliquet lacus dapibus. Sed consectetur, est vel tincidunt imperdiet, justo est dignissim lorem, nec tincidunt lacus lacus ac risus. Cras pretium enim nec vestibulum aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;'}
							/>
							<Questions
							question={'How can I get a new returns note?'}
							answer={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in accumsan dui. In hac habitasse platea dictumst. Donec sit amet auctor leo. Sed venenatis posuere risus quis dictum. Vivamus ullamcorper orci vitae eros tincidunt, a aliquet lacus dapibus. Sed consectetur, est vel tincidunt imperdiet, justo est dignissim lorem, nec tincidunt lacus lacus ac risus. Cras pretium enim nec vestibulum aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;'}
							/>
							<Questions
							question={"What should I do if my order hasn't been delivered yet?"}
							answer={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in accumsan dui. In hac habitasse platea dictumst. Donec sit amet auctor leo. Sed venenatis posuere risus quis dictum. Vivamus ullamcorper orci vitae eros tincidunt, a aliquet lacus dapibus. Sed consectetur, est vel tincidunt imperdiet, justo est dignissim lorem, nec tincidunt lacus lacus ac risus. Cras pretium enim nec vestibulum aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;'}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
       </Container>
    );
}

export default Faq;