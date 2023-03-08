import { Text, Spacer, Container, Card } from "@nextui-org/react";
import Box from "./Box.js";

const Welcome = () => (
    <Box
        css={{
            px: "$12",
            mt: "$8",
            "@xsMax": { px: "$10" },
            textAlign: "center",
        }}
    >
        <Text h2>Welcome</Text>
        <Container>
            <Text size="$lg">Welcome to our wedding website,</Text>
            <Spacer y={1} />
            <Text size="$lg">
                where we are thrilled to share our joy and excitement with all
                of our loved ones as we prepare for the biggest day of our
                lives!
                <br />
                <Spacer y={1} />
                As we embark on this journey together, we are filled with
                gratitude for the love and support of our friends and family.
                This website is a way for us to keep everyone informed and
                connected as we approach the big day.
                <br />
                We can&apos;t wait to celebrate this special moment with you,
                and we hope this website provides a helpful and enjoyable
                experience for all.
                <br />
                <Spacer y={1} />
                Thank you for being a part of our story, and we look forward to
                seeing you on our wedding day!
            </Text>
            <Spacer y={1} />
            <Text size="$lg">Zoe & Jacob</Text>
        </Container>

        <Spacer y={1} />
    </Box>
);

export default Welcome;
