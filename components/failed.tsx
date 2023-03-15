import { Container, Button, Spacer, Text, Image } from "@nextui-org/react";
import Wrapper from "./page-wrapper";

const failed = (title) => {
    return (
        <Wrapper title={title}>
            <Container>
                <Spacer y={2} />
                <Text>Woops there's something wrong...</Text>
                <Image src="https://firebasestorage.googleapis.com/v0/b/weddingwebsite-2d923.appspot.com/o/global%2Ffailed.jpg?alt=media&token=baa4c5e5-c11c-491b-8b39-92b648c282db" />
                <Spacer y={2} />
                <Button
                    shadow
                    color="gradient"
                    auto
                    onClick={() => {
                        window.location.reload();
                    }}
                >
                    Click me to retry!
                </Button>
                <Spacer y={2} />
            </Container>
        </Wrapper>
    );
};

export default failed;
