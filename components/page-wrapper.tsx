import { Container, Card, Text } from "@nextui-org/react";

import Header from "./header";
import Footer from "./footer";

type Props = {
    children: React.ReactNode;
    title: string;
};

export default function Wrapper({ title, children }: Props) {
    return (
        <div>
            <Header />
            <Container>
                <Text h1 size={90} weight="bold">
                    ZP. & JW.
                </Text>
                {children}
            </Container>
            <Footer />
        </div>
    );
}
