import {
    Navbar,
    Link,
    Avatar,
    useTheme,
    Text,
    Container,
} from "@nextui-org/react";
import { useRouter } from "next/router";

const Header = () => {
    const { isDark, type } = useTheme();
    const router = useRouter();

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
                        <Avatar squared src="/favicon.ico" bordered />
                    </Link>
                </Navbar.Brand>
                <Navbar.Content
                    enableCursorHighlight
                    hideIn="xs"
                    variant="underline"
                >
                    <Navbar.Link isActive={router.asPath === "/"} href="/">
                        Welcome
                    </Navbar.Link>
                    <Navbar.Link
                        isActive={router.asPath === "/Album"}
                        href="/Album"
                    >
                        Album
                    </Navbar.Link>
                    <Navbar.Link
                        isActive={router.asPath === "/Location"}
                        href="/Location"
                    >
                        Location
                    </Navbar.Link>
                    <Navbar.Link
                        isActive={router.asPath === "/RSVP"}
                        href="/RSVP"
                    >
                        RSVP
                    </Navbar.Link>
                    <Navbar.Link isActive={router.asPath === "/FAQ"} href="FAQ">
                        FAQ
                    </Navbar.Link>
                </Navbar.Content>

                <Navbar.Collapse>
                    <Navbar.CollapseItem key="Welcome">
                        <Link
                            css={{
                                minWidth: "100%",
                            }}
                            href="/"
                        >
                            Welcome
                        </Link>
                    </Navbar.CollapseItem>
                    <Navbar.CollapseItem key="Album">
                        <Link
                            css={{
                                minWidth: "100%",
                            }}
                            href="/Album"
                        >
                            Album
                        </Link>
                    </Navbar.CollapseItem>
                    <Navbar.CollapseItem key="Location">
                        <Link
                            css={{
                                minWidth: "100%",
                            }}
                            href="/Location"
                        >
                            Location
                        </Link>
                    </Navbar.CollapseItem>
                    <Navbar.CollapseItem key="RSVP">
                        <Link
                            css={{
                                minWidth: "100%",
                            }}
                            href="/RSVP"
                        >
                            RSVP
                        </Link>
                    </Navbar.CollapseItem>
                    <Navbar.CollapseItem key="FAQ">
                        <Link
                            css={{
                                minWidth: "100%",
                            }}
                            href="/FAQ"
                        >
                            FAQ
                        </Link>
                    </Navbar.CollapseItem>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
