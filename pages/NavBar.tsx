import { Navbar, Link, Avatar, Switch, useTheme } from "@nextui-org/react";

export default function childrenHeader() {
    const { isDark, type } = useTheme();

    const collapseItems = ["Welcome", "Location", "RSVP", "FAQ"];

    return (
        <div>
            <Navbar
                isBordered={isDark}
                variant="sticky"
                css={{
                    $$navbarBackgroundColor: "transparent",
                    $$navbarBlurBackgroundColor: "transparent",
                }}
            >
                <Navbar.Toggle showIn="xs" />
                <Navbar.Brand
                    css={{
                        "@xs": {
                            w: "12%",
                        },
                    }}
                >
                    <Link href="/">
                        <Avatar squared src="./wedding-logo.jpeg" bordered />
                    </Link>
                </Navbar.Brand>
                <Navbar.Content
                    enableCursorHighlight
                    hideIn="xs"
                    variant="highlight-solid"
                >
                    <Navbar.Link href="/">{collapseItems[0]}</Navbar.Link>
                    <Navbar.Link href="/Location">
                        {collapseItems[1]}
                    </Navbar.Link>
                    <Navbar.Link href="/RSVP">{collapseItems[2]}</Navbar.Link>
                    <Navbar.Link href="FAQ">{collapseItems[3]}</Navbar.Link>
                </Navbar.Content>

                <Navbar.Collapse>
                    {collapseItems.map((item, index) => (
                        <Navbar.CollapseItem
                            key={item}
                            css={{
                                color:
                                    index === collapseItems.length - 1
                                        ? "$error"
                                        : "",
                            }}
                            isActive={index === 0}
                        >
                            <Link
                                css={{
                                    minWidth: "100%",
                                }}
                                href="#"
                            >
                                {item}
                            </Link>
                        </Navbar.CollapseItem>
                    ))}
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
