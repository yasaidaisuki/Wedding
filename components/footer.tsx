import Container from './container';
import { EXAMPLE_PATH } from '../lib/constants';

const Footer = () => {
	return (
		<footer className="bg-neutral-50 border-t border-neutral-200">
			<Container>
				<div className="py-28 flex flex-col lg:flex-row items-center">
					<h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-right mb-10 lg:mb-0 lg:pr-4 lg:w-full">
						Join us on<br />
						September 6<br />
						2023
					</h3>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
