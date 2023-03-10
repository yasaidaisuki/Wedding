import { Container, Spacer, Text } from "@nextui-org/react";
import { EXAMPLE_PATH } from "../lib/constants";

const Footer = () => {
    return (
        <footer className="bg-neutral-50 border-t border-neutral-200">
            <Container>
                <Spacer y={3} />
                <Text
                    size={30}
                    css={{
                        textAlign: "right",
                    }}
                    weight="bold"
                >
                    Join us on
                    <br />
                    September 6<br />
                    2023
                </Text>
                <Spacer y={3} />
            </Container>
        </footer>
    );
};

export default Footer;
