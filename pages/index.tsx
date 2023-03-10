import { Image, Spacer, Text } from "@nextui-org/react";

import Wrapper from "../components/page-wrapper";

export default function Index({ allPosts }: Props) {
    return (
        <Wrapper title="Welcome">
            <Image
                src="https://firebasestorage.googleapis.com/v0/b/weddingwebsite-2d923.appspot.com/o/cover%2Fcover.jpg?alt=media&token=61f6085a-4cf2-4605-be4a-6bfe03b23976"
                alt={`Cover Image`}
                className="cover-image"
            />
            <Spacer y={2} />
            <Text
                h1
                size={30}
                css={{
                    textGradient: "45deg, $blue600 -20%, $pink600 50%",
                }}
                weight="bold"
            >
                Celebrate with us
            </Text>
            <Spacer />
            <Text>
                This website is a celebration,
                <br />
                Of the love we share and the dedication,
                <br />
                <br />
                To a future bright and full of cheer,
                <br />
                With each other, forever near.
                <br />
                <br />
                <br /> So welcome, dear friends and family,
                <br />
                To a glimpse of our love story,
                <br />
                With photos, memories, and more to see,
                <br />
                <br />
                As we embark on our new journey.
            </Text>
            <Spacer y={2} />
            <text>Zoe & Jacob</text>
            <Spacer y={3} />
        </Wrapper>
    );
}
