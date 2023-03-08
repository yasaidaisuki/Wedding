import { Navbar, Link, Avatar, Switch, useTheme } from '@nextui-org/react';
import Layout from './Layout.js';


export default function Header() {
	const { isDark, type } = useTheme();

	const collapseItems = [
		'Welcome',
		'Location',
		'RSVP',
		'FAQ',
	];

	return (
		<Layout>
			<Navbar
				isBordered={isDark}
				variant="sticky"
				css={{
					$$navbarBackgroundColor: 'transparent',
					$$navbarBlurBackgroundColor: 'transparent',
				}}
			>
				<Navbar.Toggle showIn="xs" />
				<Navbar.Brand
					css={{
						'@xs': {
							w: '12%',
						},
					}}
				>
					<Avatar squared src="./wedding-logo.jpeg" bordered />
				</Navbar.Brand>
				<Navbar.Content
					enableCursorHighlight
					hideIn="xs"
					variant="highlight-solid"
				>
					<Navbar.Link isActive href="/">
						{collapseItems[0]}
					</Navbar.Link>
					<Navbar.Link href="/Location">{collapseItems[1]}</Navbar.Link>
					<Navbar.Link href="#">{collapseItems[2]}</Navbar.Link>
					<Navbar.Link href="#">{collapseItems[3]}</Navbar.Link>
					<Navbar.Link href="#">{collapseItems[4]}</Navbar.Link>
				</Navbar.Content>

				<Navbar.Collapse>
					{collapseItems.map((item, index) => (
						<Navbar.CollapseItem
							key={item}
							css={{
								color: index === collapseItems.length - 1 ? '$error' : '',
							}}
							isActive={index === 0}
						>
							<Link
								css={{
									minWidth: '100%',
								}}
								href="#"
							>
								{item}
							</Link>
						</Navbar.CollapseItem>
					))}
				</Navbar.Collapse>
			</Navbar>
		</Layout>
	);
}
